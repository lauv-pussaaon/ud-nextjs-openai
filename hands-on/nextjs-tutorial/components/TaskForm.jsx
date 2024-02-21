import { createTask, updateTask, getTask } from "../app/utils/actions";

async function handleCreateTask(formData) {
    "use server";
    const id = formData.get("id");
    if (!id) await createTask({ content: formData.get("content") });
    else
        await updateTask(id, {
            content: formData.get("content"),
            completed: formData.get("completed") === "on",
        });
}

async function TaskForm({ task }) {
    const editMode = Boolean(task);
    return (
        <form action={handleCreateTask}>
            <div className="join w-full flex-col gap-4">
                <input
                    type="text"
                    className="input input-bordered join-item w-full"
                    placeholder="type here"
                    name="content"
                    defaultValue={task?.content}
                    required
                />
                {editMode && (
                    <>
                        <input type="hidden" name="id" value={task.id} />
                        <div className="form-control self-end">
                            <label
                                htmlFor="completed"
                                className="label cursor-pointer flex-row gap-4"
                            >
                                <span className="label-text">completed</span>
                                <input
                                    type="checkbox"
                                    defaultChecked={task.completed}
                                    id="completed"
                                    name="completed"
                                    className="checkbox checkbox-primary checkbox-sm"
                                />
                            </label>
                        </div>
                    </>
                )}
                <button type="submit" className="btn btn-primary join-item">
                    {editMode ? "Update task" : "Create task"}
                </button>
            </div>
        </form>
    );
}

export default TaskForm;
