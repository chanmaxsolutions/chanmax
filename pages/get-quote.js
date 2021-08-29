import React, { useState } from "react";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import AppTypeQuote from "../components/AppTypeQuote";
import WebAppFeautreQuote from "../components/WebAppFeautreQuote";

export default function GetQuote() {
    const [step, setStep] = useState(1);
    const [selectedApp, setApp] = useState(null);

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

            {step === 1 && (
                <AppTypeQuote
                    handleNext={(e) => {
                        setStep(2);
                        setApp(e);
                    }}
                    handleSelect={setApp}
                />
            )}
            {step === 2 && <WebAppFeautreQuote  />}
        </React.Fragment>
    );
}
