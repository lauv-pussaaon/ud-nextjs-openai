import NewTour from "@/components/NewTour";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";

const ChatPage = () => {
    const queryClient = new QueryClient();
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NewTour />
        </HydrationBoundary>
    );
};
export default ChatPage;
