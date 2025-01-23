import cors from '@elysiajs/cors';
import { Elysia } from 'elysia';
import Event from './Event';
import { Net } from './Net';

import { anthropic } from '@ai-sdk/anthropic';
import { openai } from "@ai-sdk/openai";
import { LanguageModel } from 'ai';


export interface Server_I {
    models: {
        openai: LanguageModel;
        anthropic: LanguageModel;
    };
}

export default class Server {
    static init() {
        const models = {
            openai: openai('gpt-4o'),
            anthropic: anthropic("claude-3-5-haiku-latest")
        };
        const app: Server_I = {
            models
        };

        new Elysia()
            .use(cors())
            .post('/', ({ body }) => JSON.stringify(Event.onEvent(app, body as Net.C.Prompt_I)))
            .listen(3000, () => console.log('Listening on port 3000'));
    }
}

// TODO: stream ai response

// import { Stream } from '@elysiajs/stream'
// new Elysia()
//     .get('/', () => new Stream(async (stream) => {
//         stream.send('hello')
//         await stream.wait(1000)
//         stream.send('world')
//         stream.close()
//     }))
//     .listen(3000)