"use client";

import React from "react";

function Error(error) {
    return <div>{error.error.message}</div>;
}

export default Error;
