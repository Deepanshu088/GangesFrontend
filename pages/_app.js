import "swiper/css";
import "swiper/css/navigation";

import '../public/css/bootstrap.min.css';
import '../public/css/style.css';
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store, { persistor } from "@/redux/store";
import ChatbotScript from "@/components/ChatBot";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    // const [loading, setLoading] = useState(false);
    const loading = false;
    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    // }, []);
    return <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
            <Head>
                <title>Palace on Ganges Heritage Hotel | Stay at Assi Ghat, Varanasi</title>
                <meta name="description" key="description" content="Discover the timeless beauty of Varanasi at Palace on Ganges Heritage Hotel. Situated on Assi Ghat, this heritage hotel offers comfortable rooms, traditional cuisine, and stunning views of the Ganges River. Book your heritage stay today." />
                <meta name="keywords" key="keywords" content="Palace on Ganges Heritage Hotel, Heritage Hotel Varanasi, Hotel Assi Ghat Varanasi, Stay on Assi Ghat, Ganges River Hotel Varanasi, Varanasi Heritage Accommodation, Palace on Ganges, Assi Ghat Hotels" />
                <meta name="author" key="author" content="Palace on Ganges" />
                <meta property="og:title" key="og:title" content="Palace on Ganges Heritage Hotel | Stay at Assi Ghat, Varanasi" />
                <meta property="og:description" key="og:description" content="Discover the timeless beauty of Varanasi at Palace on Ganges Heritage Hotel. Situated on Assi Ghat, this heritage hotel offers comfortable rooms, traditional cuisine, and stunning views of the Ganges River. Book your heritage stay today." />
                <meta property="og:url" key="og:url" content="https://palaceonganges.com" />
                <meta property="og:image" key="og:image" content="/favicon.ico" />
            </Head>

            {!loading ? (
                <Component {...pageProps} />
            ) : (
                <div className="preloader"></div>
            )}
            <ChatbotScript />
        {/* </PersistGate> */}
    </Provider>
}

export default MyApp