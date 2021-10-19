/** @format */

import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/sass/main.scss";
import "../styles/globals.css";
import { motion } from "framer-motion";

// Import Carousel css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {
    const [time, setTime] = useState(0);
    useEffect(() => {
        if (time < 10) {
            setTimeout(() => {
                setTime((time) => time + 1);
            }, 1000);
        }
    }, [time]);

    return (
        <>
            <Head>
                {time > 10 && (
                    <script
                        type="text/javascript"
                        id="hs-script-loader"
                        async
                        defer
                        src="//js-na1.hs-scripts.com/20769226.js"
                    ></script>
                )}
            </Head>
            <motion.div initial={{ opacity: 0.9 }} animate={{ opacity: 1 }} key={router.route}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </motion.div>
        </>
    );
}
