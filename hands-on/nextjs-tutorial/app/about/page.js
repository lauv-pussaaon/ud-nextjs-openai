import Link from "next/link";
import React from "react";

function AboutPage() {
    return (
        <div>
            <h1 class="text-7xl">About Page</h1>
            <Link href="/" className="text-2xl">
                Home Page
            </Link>
        </div>
    );
}

export default AboutPage;
