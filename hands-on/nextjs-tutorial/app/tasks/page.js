import TaskFormClient from "../../components/TaskFormClient";
import TaskList from "../../components/TaskList";

function TasksPage() {
    return (
        <div className="max-w-lg">
            <TaskFormClient />
            <TaskList />
        </div>
    );
}

export default TasksPage;
