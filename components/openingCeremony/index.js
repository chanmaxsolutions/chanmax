import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Event from "./Event";
import Guest from "./Guest";
import { getService } from "../../helper/getService";
import Thankyou from "./Thankyou";

function OpeningCeremony({ children }) {
    const router = useRouter();
    const [isFinishEvent, setFinishEvent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        if (sessionStorage.getItem("isFinishEvent") === "578gyyt789j") {
            setFinishEvent(true);
            setLoading(true);
        } else {
            fetchData();
        }
    }, []);

    const fetchData = async () => {
        try {
            const response = await getService("/check-status");
            setFinishEvent(response.status);
            if (response.status) {
                sessionStorage.setItem("isFinishEvent", "578gyyt789j");
                if(router.pathname === "/thank-you/[id]"){
                    router.push("/");
                }
            }
        } catch (error) {
            setFinishEvent(false);
        }
        setLoading(true);
    };

    useEffect(() => {
        if (!isFinishEvent) {
            setTimeout(() => {
                fetchData();
                setTime(time + 1);
            }, 10000);
        }
    }, [time]);

    return (
        <div>
            {loading && (
                <>
                    {isFinishEvent ? (
                        <>{children}</>
                    ) : (
                        <>
                            {router.pathname === "/opening-invite/[id]" ? (
                                <Guest setDone={setFinishEvent} />
                            ) : router.pathname === "/thank-you/[id]" ? (
                                <Thankyou />
                            ) : (
                                <Event />
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default OpeningCeremony;
