"use client";

import { generateChatResponse } from "@/app/utils/actions";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

function Chat() {
    const [messages, setMessages] = useState([]);

    const { mutate: submitMessage, isPending } = useMutation({
        mutationFn: (query) => generateChatResponse([...messages, query]),
        onSuccess: (data) => {
            setMessages((prev) => [...prev, data]);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    const { register, handleSubmit, reset } = useForm();

    function submitPrompt(formData) {
        const query = { role: "user", content: formData.prompt };
        submitMessage(query);
        setMessages((prev) => [...prev, query]);
        reset();
    }

    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    }, [isPending]);

    return (
        <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
            <div>
                <h1 className="text-4xl font-medium">Conversation</h1>
            </div>
            {messages.map(({ role, content }, index) => {
                const avatar = role === "user" ? "👨‍🚀" : "🤖";
                const bg = role === "user" ? "bg-base-200" : "bg-base-100";
                const position = role === "user" ? "flex-row-reverse" : "";
                return (
                    <div
                        key={index}
                        className={`${bg} flex gap-4 ${position} py-6 -mx-8 px-8 text-xl leading-loose border-b border-base-300`}
                    >
                        <span className="mr-4">{avatar}</span>
                        <p className="max-w-3xl">{content}</p>
                    </div>
                );
            })}
            {isPending ? <span className="loading"></span> : null}
            <form
                onSubmit={handleSubmit(submitPrompt)}
                className="w-full pt-12"
            >
                <div className="join w-full">
                    <input
                        type="text"
                        placeholder="Message GeniusGPT"
                        className="input input-bordered join-item w-full"
                        required
                        {...register("prompt")}
                    />
                    <button
                        className="btn btn-primary join-item"
                        type="submit"
                        disabled={isPending}
                    >
                        ask question
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Chat;
