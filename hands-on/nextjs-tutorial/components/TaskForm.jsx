import { createTask, updateTask, getTask } from "../app/utils/actions";

async function handleCreateTask(formData) {
    "use server";
    const id = formData.get("id");
    if (!id) await createTask({ content: formData.get("content") });
    else await updateTask(id, { content: formData.get("content") });
}

async function TaskForm({ id }) {
    const task = id ? await getTask(id) : {};
    return (
        <form action={handleCreateTask}>
            <div className="join w-full">
                <input
                    type="text"
                    className="input input-bordered join-item w-full"
                    placeholder="type here"
                    name="content"
                    defaultValue={task.content}
                    required
                />
                <input type="hidden" name="id" value={id} />
                <button type="submit" className="btn btn-primary join-item">
                    {id ? "Update task" : "Create task"}
                </button>
            </div>
        </form>
    );
}

export default TaskForm;
