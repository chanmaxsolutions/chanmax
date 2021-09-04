import React from "react";

export default function TextInput(props) {
    return (
        <input
            className="contact-form-control form-control shadow-none"
            autoComplete="false"
            type="text"
            {...props}
        />
    );
}
