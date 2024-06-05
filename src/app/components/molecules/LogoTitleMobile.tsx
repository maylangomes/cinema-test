import React from "react";
import LogoMobile from "../atoms/LogoMobile";
import Title from "../atoms/Title";

const LogoTitleMobile = () => {
    return (
        <div className="text-gray-900 text-4xl font-bold bg-yellow-200 md:hidden flex justify-center">
            <div className="flex">
                <LogoMobile/>
                <Title/>
            </div>
        </div>
    );
};

export default LogoTitleMobile;