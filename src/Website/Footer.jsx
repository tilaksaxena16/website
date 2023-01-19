import React from "react";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer className="w-100 bg-light text-center">
                <p>© {year} Phone Pe. All Rights Reserved | Terms and Conditions</p>
            </footer>
        </>
    );
};

export { Footer };