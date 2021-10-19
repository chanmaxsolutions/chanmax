import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Event from "./Event";
import Guest from "./Guest";
import { getService } from "../../helper/getService";

function OpeningCeremony({ children }) {
    const router = useRouter();
    const [isFinishEvent, setFinishEvent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        // if (router.pathname !== "/opening-invite/[id]") {
        //     router.replace("/");
        // }
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await getService("/check-status");
            setFinishEvent(response.status);
        } catch (error) {
            setFinishEvent(false);
        }
        setLoading(true);
    };

    useEffect(() => {
        if(!isFinishEvent){
            setTimeout(() => {
                fetchData();
                setTime(time + 1);
            }, 10000)
        }
    }, [time])

    return (
        <div>
            {loading && (
                <>
                    {isFinishEvent ? (
                        <>{children}</>
                    ) : (
                        <>{router.pathname === "/opening-invite/[id]" ? <Guest setDone={setFinishEvent} /> : <Event />}</>
                    )}
                </>
            )}
        </div>
    );
}

export default OpeningCeremony;
