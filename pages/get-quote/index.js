import React, { useState } from "react";
import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import Image from "next/image";
import { quotaData } from "../../data/quota";
import { useRouter } from "next/router";

export default function GetQuote() {

    const router = useRouter();

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
                    {quotaData.map(({ name, desc }) => (
                        <div className="col-sm-3 text-center mt-4 ">
                            <div className="card" onClick={() => router.push('/get-quote/web') }>
                                <div className="card-body  testimonial-card">
                                    <Image
                                        src="/images/icon-1.svg"
                                        className=""
                                        width={70.5}
                                        height={72}
                                        alt="..."
                                    />
                                    <p className="card-title">{name}</p>
                                    <p className="card-text">{desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* {step === 1 && (
                <AppTypeQuote
                    handleNext={(e) => {
                        setStep(2);
                        setApp(e);
                    }}
                    handleSelect={setApp}
                />
            )}
            {step === 2 && <WebAppFeautreQuote  />} */}
        </React.Fragment>
    );
}
