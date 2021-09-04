import React from "react";

function BoxQauote({ title, icon, handleClick, isSelected }) {
    return (
        <div
            style={{
                width: 150,
                height: 150,
                border: `2px solid ${isSelected ? "#1A9369" : "white"}`,
                backgroundColor: isSelected ? "#1A9369" : "white",
                color: isSelected ? "white" : "black",
                fontSize: 20,
                textAlign: "center",
                margin: 4,
            }}
            onClick={handleClick}
        >
            <div className="fs-1">{icon}</div>
            <div
                className="d-flex align-items-center justify-content-center"
                style={!icon ? { height: "100%" } : {}}
            >
                {title}
            </div>
        </div>
    );
}

export default BoxQauote;
