import { deleteTask } from "../app/utils/actions";

async function handleDeleteForm(formData) {
    "use server";
    await deleteTask(formData.get("id"));
}

function DeleteForm({ id }) {
    return (
        <form action={handleDeleteForm}>
            <input type="hidden" name="id" value={id} />
            <button className="btn btn-error btn-xs">Delete</button>
        </form>
    );
}

export default DeleteForm;
