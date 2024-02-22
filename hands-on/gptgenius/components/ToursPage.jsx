"use client";

import { getAllTours } from "../app/utils/actions";
import { useQuery } from "@tanstack/react-query";
import ToursList from "./ToursList";
import { useState } from "react";

function ToursPage() {
    const [searchValue, setSearchValue] = useState("");
    const { data: tours, isPending } = useQuery({
        queryKey: ["tours", searchValue],
        queryFn: () => getAllTours(searchValue),
    });

    return (
        <>
            <form className="max-w-lg mb-12">
                <div className="join w-full">
                    <input
                        type="text"
                        placeholder="enter city or country here ..."
                        className="input input-bordered join-item w-full"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        required
                    />
                    <button
                        className="btn btn-primary join-item"
                        type="button"
                        disabled={isPending}
                        onClick={() => setSearchValue("")}
                    >
                        {isPending ? "please wait ..." : "reset"}
                    </button>
                </div>
            </form>
            {isPending ? (
                <span className="loading"></span>
            ) : (
                <ToursList tours={tours} />
            )}
        </>
    );
}

export default ToursPage;
