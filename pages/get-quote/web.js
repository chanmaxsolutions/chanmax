import React, { useState } from "react";
import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";

function Web() {
    const [state, setState] = useState([
        {
            "iOS APP": {status: false, icon: ""},
            "Android App": {status: false, icon: ""},
            "Web App": {status: false, icon: ""},
            "Desktop App": {status: false, icon: ""},
            Database: {status: false, icon: ""},
            Backend: {status: false, icon: ""},
            Frontend: {status: false, icon: ""},
            "Admin Panel": {status: false, icon: ""},
            "API Integration": {status: false, icon: ""},
            "Payment Gateway": {status: false, icon: ""},
            "Logo & Branding": {status: false, icon: ""},
            "UX Design": {status: false, icon: ""},
            "No idea": {status: false, icon: ""},
        },
        {
            "$500 <": {status: false, icon: ""},
            "$500 - $1500": {status: false, icon: ""},
            "$1500 - $6000": {status: false, icon: ""},
            "$6000 - $10, 000": {status: false, icon: ""},
            "$10, 000 +": {status: false, icon: ""},
            "No idea": {status: false, icon: ""},
        },
        {
            Google: {status: false, icon: ""},
            LinkedIn: {status: false, icon: ""},
            Facebook: {status: false, icon: ""},
            Email: {status: false, icon: ""},
            Event: {status: false, icon: ""},
            Other: {status: false, icon: ""},
        },
    ]);

    const handleSelect = (path, name) => {
        let temp = [...state];
        temp[path][name]['status'] = !temp[path][name]['status'];
        setState(temp);
    };

    const handlePriceSelect = (path, name) => {
        let temp = [...state];
        if(!(temp[path][name]['status'])){
            Object.keys(temp[path]).map((item, i) => {
                if(temp[path][name]['status'])
                console.log(temp[path][name], 'zzz');
            });
        }

        // temp[path][name]['status'] = !temp[path][name]['status'];
        // setState(temp);
    }

    return (
        <React.Fragment>
            <SEO title="Chanmax" />
            <PageHeader
                subHead="Get Quote"
                mainHead="Start a project with us"
                bgImg="/images/4.jpg"
                des="We help product vendors create impactful and 
            futuristic digital solutions to solve real user problems.​"
            />
            <div className="container contact-details-container">
                <div className="row justify-content-md-center">
                    <h3 className="text-center">Estimate Project</h3>
                    <h6>What is the scope of your project?</h6>
                    {state[0] &&
                        Object.keys(state[0]).map((data) => (
                            <div
                                style={{
                                    width: 150,
                                    height: 150,
                                    border: `1px solid ${
                                        state[0][data]['status'] ? "red" : "black"
                                    }`,
                                    fontSize: 20,
                                    textAlign: "center",
                                    margin: 4,
                                }}
                                onClick={() => handleSelect(0, data)}
                            >
                                {data}
                            </div>
                        ))}
                    <h6>What would you like to do?</h6>
                    {state[1] &&
                        Object.keys(state[1]).map((data) => (
                            <div
                                style={{
                                    width: 150,
                                    height: 150,
                                    border: `1px solid ${
                                        state[1][data]['status'] ? "red" : "black"
                                    }`,
                                    fontSize: 20,
                                    textAlign: "center",
                                    margin: 4,
                                }}
                                onClick={() => handlePriceSelect(1, data)}
                            >
                                {data}
                            </div>
                        ))}
                    <h6>How did you hear about us?</h6>
                    {state[2] &&
                        Object.keys(state[2]).map((data) => (
                            <div
                                style={{
                                    width: 150,
                                    height: 150,
                                    border: `1px solid ${
                                        state[2][data]['status'] ? "red" : "black"
                                    }`,
                                    fontSize: 20,
                                    textAlign: "center",
                                    margin: 4,
                                }}
                                onClick={() => handleSelect(2, data)}
                            >
                                {data}
                            </div>
                        ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Web;
