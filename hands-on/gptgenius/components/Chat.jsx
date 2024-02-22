"use client";

import { submitPrompts } from "@/app/utils/actions";
import { useState } from "react";

function Chat() {
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        submitPrompts(text);
        setText("");
    }

    return (
        <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
            <form onSubmit={handleSubmit} className="max-w-4xl pt-12">
                <div className="join w-full">
                    <input
                        type="text"
                        placeholder="Message GeniusGPT"
                        className="input input-bordered join-item w-full"
                        value={text}
                        required
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button className="btn btn-primary join-item" type="submit">
                        ask question
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Chat;
