"use client";

import { createTaskServer } from "../app/utils/actions";
import { useFormStatus, useFormState } from "react-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

function Button() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            className="btn btn-primary join-item"
            disabled={pending}
        >
            {pending ? "pleast wait ..." : "create task"}
        </button>
    );
}

const initialState = {
    message: null,
    error: null,
};

function TaskFormClient() {
    const [state, formAction] = useFormState(createTaskServer, initialState);

    useEffect(() => {
        if (state.message) {
            toast.success("Task created successfully");
        }
        if (state.error) {
            toast.error("Failed to create task: " + state.error.message);
        }
    }, [state]);

    return (
        <form action={formAction}>
            <div className="join w-full">
                <input
                    type="text"
                    className="input input-bordered join-item w-full"
                    placeholder="type here"
                    name="content"
                    required
                />
                <Button />
            </div>
        </form>
    );
}

export default TaskFormClient;
