import TaskFormClient from "../../components/TaskFormClient";
import TaskList from "../../components/TaskList";
export const dynamic = "force-dynamic";

function TasksPage() {
    return (
        <div className="max-w-lg">
            <TaskFormClient />
            <TaskList />
        </div>
    );
}

export default TasksPage;
