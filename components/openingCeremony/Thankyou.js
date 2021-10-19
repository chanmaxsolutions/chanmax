import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import GuestDetails from "./GuestDetails";

function Thankyou() {
    const router = useRouter();
    const [guest, setGuest] = useState();

    useEffect(() => {
        const path = window.location.pathname;
        const pathName = path.substring(path.lastIndexOf("/") + 1);
        const guestData = GuestDetails.find((data) => data.id === pathName);
        if (guestData) {
            setGuest(guestData);
        } else {
            router.replace("/");
        }
    }, []);

    return (
        <div
            style={{
                height: "100vh",
                overflow: "hidden",
                background: "black",
                color: "white",
            }}
        >
            <div>
                <img className="p-3" src="/images/svg/logo-white.svg" alt="CHANMAX TECHNOLOGIES" />
            </div>
            <div style={{ textAlign: "center", fontSize: "xxx-large", marginBottom: 10 }}>Thank you {guest?.name} !</div>
            <div style={{ textAlign: "center", fontSize: "xxx-large", marginBottom: 10 }}>Waiting for others opening</div>
        </div>
    );
}

export default Thankyou;
