import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";

function TasksPage() {
    return (
        <div className="max-w-lg">
            <TaskForm />
            <TaskList />
        </div>
    );
}

export default TasksPage;
