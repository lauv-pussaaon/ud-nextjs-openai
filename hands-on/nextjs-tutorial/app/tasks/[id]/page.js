import TaskForm from "../../../components/TaskForm";

function SingleTaskPage({ params }) {
    const id = params.id;
    return (
        <div className="max-w-lg">
            <TaskForm id={id} />
        </div>
    );
}

export default SingleTaskPage;
