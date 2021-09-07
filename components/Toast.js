import React from "react";

export default function Toast({ message, handleClose }) {
    return (
        <div
            style={{
                position: "fixed",
                padding: 20,
                top: "calc(100vh - 100px)",
                left: 20,
                width: 300,
                border: "1px solid black",
                background: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <div>{message}</div>
            <div>
                <button type="button" className="btn-close ms-2" onClick={handleClose}>
                    <span className="visually-hidden">Close</span>
                </button>
            </div>
        </div>
    );
}
