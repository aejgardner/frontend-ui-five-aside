import React from "react";

const Header = ({ children }) => (
    <header className="header">
        <h1>
            {children}
        </h1>
    </header>
);

export default Header;