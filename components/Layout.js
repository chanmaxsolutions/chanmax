import Footer from "./Footer";

import dynamic from "next/dynamic";
import OpeningCeremony from "./openingCeremony";

const Header = dynamic(() => import("./Header"), { ssr: false });

export default function Layout({ children }) {
    return (
        <OpeningCeremony>
            <Header />
            {children}
            <Footer />
        </OpeningCeremony>
    );
}
