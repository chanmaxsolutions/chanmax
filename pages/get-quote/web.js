import React, { useState, useRef } from "react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import { estimateData } from "../../data/quota";
import TextInput from "../../components/FormsUI/TextInput";
import BoxQauote from "../../components/BoxQauote";

function Web() {
    const [state, setState] = useState(estimateData);
    const [values, setValues] = useState({});
    const [error, setError] = useState({});
    const techRef = useRef(null);
    const budgetRef = useRef(null);

    const handleChange = (e) => {
        setError({});
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSelect = (path, name) => {
        setError({});
        let temp = [...state];
        temp[path][name]["status"] = !temp[path][name]["status"];
        setState(temp);
    };

    const handlePriceSelect = (path, name) => {
        setError({});
        let temp = [...state];
        if (!temp[path][name]["status"]) {
            Object.keys(temp[path]).map((item) => {
                name === item
                    ? (temp[path][item]["status"] = true)
                    : (temp[path][item]["status"] = false);
            });
        }
        setState(temp);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let technology = Object.keys(state[0]).filter(
            (item) => state[0][item]["status"]
        );
        let budget = Object.keys(state[1]).find(
            (item) => state[1][item]["status"]
        );
        let source = Object.keys(state[2]).filter(
            (item) => state[2][item]["status"]
        );

        if (!technology.length) {
            techRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
            return setError({
                ...error,
                technology: "Please select atleast one technology",
            });
        }

        if (!budget) {
            budgetRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
            return setError({
                ...error,
                budget: "Please select atleast one budget",
            });
        }

        const postData = {
            ...values,
            technology,
            budget,
            source,
        };

        console.log(postData, "zzz");
    };

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
                    <div
                        ref={techRef}
                        className={`d-flex flex-wrap justify-content-center p-2 mb-4 ${
                            error.technology && "border border-danger"
                        }`}
                    >
                        {state[0] &&
                            Object.keys(state[0]).map((data) => (
                                <BoxQauote
                                    isSelected={state[0][data]["status"]}
                                    handleClick={() => handleSelect(0, data)}
                                    title={data}
                                    icon={state[0][data]["icon"]}
                                />
                            ))}
                    </div>
                    <h6>What would you like to do?</h6>
                    <div
                        ref={budgetRef}
                        className={`d-flex flex-wrap justify-content-center p-2 mb-4 ${
                            error.budget && "border border-danger"
                        }`}
                    >
                        {state[1] &&
                            Object.keys(state[1]).map((data) => (
                                <BoxQauote
                                    isSelected={state[1][data]["status"]}
                                    handleClick={() =>
                                        handlePriceSelect(1, data)
                                    }
                                    title={data}
                                    icon={state[1][data]["icon"]}
                                 />
                            ))}
                    </div>
                    <h6>How did you hear about us?</h6>
                    <div className="d-flex flex-wrap justify-content-center">
                        {state[2] &&
                            Object.keys(state[2]).map((data) => (
                                <BoxQauote
                                    isSelected={state[2][data]["status"]}
                                    handleClick={() => handleSelect(2, data)}
                                    title={data}
                                    icon={state[2][data]["icon"]}
                                />
                            ))}
                    </div>
                    <form className="mt-4" onSubmit={handleSubmit}>
                        <TextInput
                            required
                            onChange={handleChange}
                            value={values.name}
                            name="name"
                            placeholder="Your Name"
                        />
                        <br />
                        <TextInput
                            type="email"
                            required
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            placeholder="Email Address"
                        />
                        <br />
                        <TextInput
                            onChange={handleChange}
                            value={values.company}
                            name="company"
                            placeholder="Company Name"
                        />
                        <br />
                        <TextInput
                            required
                            onChange={handleChange}
                            value={values.phone}
                            name="phone"
                            placeholder="Your Phone Number"
                        />
                        <button type="submit" className="btn btn-primary mt-4">
                            Request Estimate
                        </button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Web;
