"use client";

import { createTaskServer } from "../app/utils/actions";
import { useFormStatus, useFormState } from "react-dom";

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

    return (
        <form action={formAction}>
            {state.message && (
                <p className="mb-2 text-green-300">{state.message}</p>
            )}
            {state.error && <p className="mb-2 text-red-300">{state.error}</p>}
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
