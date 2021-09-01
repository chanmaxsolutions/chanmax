import React from "react";

function BoxQauote({ title, data }) {
    return (
        <React.Fragment>
            <div style={{ fontSize: 30 }}>{title}</div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                {data.map((item, index) => (
                    <div key={index} style={{ border: "1px solid black", padding: 25 }}>
                        {item}
                    </div>
                ))}
            </div>
            {/* <div style={{ fontSize: 30 }}>No of Pages</div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ border: "1px solid black", padding: 25 }}>
                    {"< "}5
                </div>
                <div style={{ border: "1px solid black", padding: 25 }}>
                    5 - 10
                </div>
                <div style={{ border: "1px solid black", padding: 25 }}>
                    1 - 15
                </div>
                <div style={{ border: "1px solid black", padding: 25 }}>
                    15+
                </div>
            </div> */}
        </React.Fragment>
    );
}

export default BoxQauote;
