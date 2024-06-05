import Link from "next/link";
import React from "react";

const LinkHome = () => {
    return (
        <Link className="text-xl font-medium text-teal-600 hover:underline" href="/view">
        Click here to explore available movies
      </Link>
    );
};

export default LinkHome;