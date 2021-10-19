import React from "react";

function Event() {
    return (
        <div
            style={{
                display: "grid",
                placeItems: "center",
                height: "100vh",
                overflow: "hidden",
                background: "black",
                color: "white",
            }}
        >
            <div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src="/images/svg/logo-white.svg" alt="CHANMAX TECHNOLOGIES" />
                </div>
                <br />
                <div style={{ fontSize: "xxx-large", textAlign: 'center' }}>GRAND OPENING</div>
            </div>
            <div>TODAY @ 7:00 PM</div>
        </div>
    );
}

export default Event;
