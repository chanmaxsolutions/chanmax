import React, { useState } from "react";
import Image from "next/image";
import { webQuota } from "../data/quota";

const priceData = [
    { a: 100, b: 150, c: 100 },
    {
        d: 100,
        e: 100,
        f: 100,
        g: 100,
        h: 100,
        i: 100,
        j: 100,
        k: 100,
        l: 100,
    },
    { m: 100, n: 100, o: 100, p: 100 },
];

function WebAppFeautreQuote() {
    const [state, setState] = useState([
        { a: false, b: false, c: false },
        {
            d: false,
            e: false,
            f: false,
            g: false,
            h: false,
            i: false,
            j: false,
            k: false,
            l: false,
        },
        { m: false, n: false, o: false, p: false },
    ]);
    const [total, setTotal] = useState(0);

    const handleSelect = (path, name, price) => {
        let temp = [...state];
        let subTotal;
        temp[path][name] = !temp[path][name];
        if (temp[path][name]) {
            subTotal = total + price;
        } else {
            subTotal = total - price;
        }
        setState(temp);
        setTotal(subTotal);
    };

    return (
        <div className="container contact-details-container">
            <div className="row justify-content-md-center">
                <h3 className="text-center">Estimate Project = {total}</h3>
                <h6>What would you like to do?</h6>
                {state[0] &&
                    Object.keys(state[0]).map((data, i) => (
                        <div
                            style={{
                                width: 150,
                                height: 150,
                                border: `1px solid ${
                                    state[0][data] ? "red" : "black"
                                }`,
                                fontSize: 90,
                                textAlign: "center",
                                margin: 4,
                            }}
                            onClick={() =>
                                handleSelect(0, data, priceData[0][data])
                            }
                        >
                            {data}
                        </div>
                    ))}
                <h6>What would you like to do?</h6>
                {state[1] &&
                    Object.keys(state[1]).map((data, i) => (
                        <div
                            style={{
                                width: 150,
                                height: 150,
                                border: `1px solid ${
                                    state[1][data] ? "red" : "black"
                                }`,
                                fontSize: 90,
                                textAlign: "center",
                                margin: 4,
                            }}
                            onClick={() =>
                                handleSelect(1, data, priceData[1][data])
                            }
                        >
                            {data}
                        </div>
                    ))}
                <h6>What would you like to do?</h6>
                {state[2] &&
                    Object.keys(state[2]).map((data, i) => (
                        <div
                            style={{
                                width: 150,
                                height: 150,
                                border: `1px solid ${
                                    state[2][data] ? "red" : "black"
                                }`,
                                fontSize: 90,
                                textAlign: "center",
                                margin: 4,
                            }}
                            onClick={() =>
                                handleSelect(2, data, priceData[2][data])
                            }
                        >
                            {data}
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default WebAppFeautreQuote;
