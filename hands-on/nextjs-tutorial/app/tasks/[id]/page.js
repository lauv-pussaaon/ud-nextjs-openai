import Link from "next/link";
import TaskForm from "../../../components/TaskForm";
import { getTask } from "../../utils/actions";

async function SingleTaskPage({ params }) {
    const id = params.id;
    const task = await getTask(id);
    return (
        <div className="max-w-lg">
            <Link href="/tasks" className="btn-link block mb-8">
                &larr; back to tasks
            </Link>
            <TaskForm task={task} />
        </div>
    );
}

export default SingleTaskPage;
