export const metadata = {
    title: "GPTGenius",
    description: "Have a good night",
};

function layout({ children }) {
    return (
        <div className="join w-full flex-col gap-4">
            <h1 className="block w-full">GPT Genius</h1>
            <div>{children}</div>
        </div>
    );
}

export default layout;
