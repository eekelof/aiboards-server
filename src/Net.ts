interface Action_I {
    action: "card" | "list";
    content: string;
}

export declare namespace Net {
    namespace C {
        interface Prompt_I {
            m: "prompt";
            model: "openai" | "anthropic";
            prompt: string;
        }
    }
    namespace S {
        interface Actions_I {
            actions: Action_I[]
        }
    }
}