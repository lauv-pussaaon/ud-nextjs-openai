"use client";

import { Toaster } from "react-hot-toast";

function UIProvider({ children }) {
    return (
        <>
            <Toaster />
            {children}
        </>
    );
}

export default UIProvider;
