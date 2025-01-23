import { Net } from './Net';
import { Server_I } from './Server';

import { generateText } from 'ai';

export default class Event {
    static async onEvent(app: Server_I, body: Net.C.Prompt_I) {

        const { text } = await generateText({
            model: app.models.anthropic,
            system: 'You are a friendly assistant!',
            prompt: body.prompt,
        });
        console.log(text)

        return true;
    }
}