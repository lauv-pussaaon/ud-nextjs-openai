"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    getExistingTour,
    generateTourResponse,
    createNewTour,
} from "../app/utils/actions";
import { toast } from "react-hot-toast";
import TourInfo from "./TourInfo";

function NewTour() {
    const queryClient = useQueryClient();
    const {
        mutate: getTourResponse,
        isPending,
        data: tour,
    } = useMutation({
        mutationFn: async (destination) => {
            const existingTour = await getExistingTour(destination);
            if (existingTour) return existingTour;

            const newTour = await generateTourResponse(destination);
            if (!newTour) {
                toast.error("No matching city found...");
            }
            await createNewTour(newTour);
            queryClient.invalidateQueries({ queryKey: ["tours"] });
            return newTour;
        },
    });

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const destination = Object.fromEntries(formData.entries());
        getTourResponse(destination);
    }

    if (isPending) {
        return <span className="loading loading-lg"></span>;
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-2xl">
                <h2 className="font-medium mb-4">
                    Select your dream destination
                </h2>
                <div className="join w-full">
                    <input
                        type="text"
                        className="input input-bordered join-item w-full"
                        placeholder="city"
                        name="city"
                        required
                    />
                    <input
                        type="text"
                        className="input input-bordered join-item w-full"
                        placeholder="country"
                        name="country"
                        required
                    />
                    <button className="btn btn-primary join-item" type="submit">
                        generate tour
                    </button>
                </div>
            </form>
            <div className="mt-16">
                {tour ? <TourInfo tour={tour} /> : null}
            </div>
        </>
    );
}
export default NewTour;