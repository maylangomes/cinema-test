import React from "react";
import LogoDesktop from "../atoms/LogoDesktop";
import Title from "../atoms/Title";

const LogoTitleDesktop = () => {
    return (
        <div className="w-1/3 items-center justify-center text-gray-900 text-4xl font-bold bg-yellow-200 hidden md:flex">
            <div className="flex flex-col">
                <LogoDesktop/>
                <Title/>
            </div>
        </div>
    );
};

export default LogoTitleDesktop;