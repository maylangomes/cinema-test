import React from "react";
import Welcome from "../atoms/WelcomeHome";
import LinkHome from "../atoms/LinkHome";

const WelcomeLinkHome = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="text-center">
          <Welcome/>
          <LinkHome/>
        </div>
      </main>
    );
};

export default WelcomeLinkHome;