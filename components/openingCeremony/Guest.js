import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { postService } from "../../helper/postService";
import GuestDetails from "./GuestDetails";

function Guest({ setDone }) {
    const router = useRouter();
    const [guest, setGuest] = useState();
    const [code, setCode] = useState();

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

    const hanldeSubmit = async () => {
        try {
            const response = await postService(`/open-me/${guest.id}`, { code });
            if (response.status === true) {
                setDone(true);
                router.push(`/thank-you/${guest.id}`)
            } else {
                alert("Incorrect Code");
            }
        } catch (error) {
            alert("Something Went Wrong");
        }
    };

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
            <div style={{ textAlign: "center", fontSize: "xxx-large", marginBottom: 10 }}>Hello, {guest?.name} !</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                    style={{ width: 150, height: 150, objectFit: "cover", boxShadow: "0px 0px 5px white", borderRadius: 10 }}
                    src={guest?.img}
                />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 50 }}>
                <div>
                    <input
                        required
                        placeholder="Type your invite code"
                        style={{ fontSize: "large", background: "black", color: "white" }}
                        type="text"
                        onChange={(e) => setCode(e.target.value)}
                    />
                </div>
                <div style={{ marginLeft: 10 }}>
                    <button onClick={hanldeSubmit} style={{ marginTop: 0 }}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Guest;
