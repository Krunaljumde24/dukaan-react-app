import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarOpen = () => {
        setSidebarOpen(true);
    };

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="sidebar">
            asdf

        </div>
    );
};

export default Sidebar;