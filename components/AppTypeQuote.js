import React from "react";
import Image from "next/image";
import { quotaData } from "../data/quota";

function AppTypeQuote({ handleNext }) {
    return (
        <div className="container contact-details-container">
            <div className="row justify-content-md-center">
                {quotaData.map(({ name, desc }) => (
                    <div className="col-sm-3 text-center mt-4 ">
                        <div className="card" onClick={()=>handleNext(name)}>
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
    );
}

export default AppTypeQuote;
