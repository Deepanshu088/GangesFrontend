import "swiper/css";
import "swiper/css/navigation";

import '../public/css/bootstrap.min.css';
import '../public/css/style.css';
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/redux/store";
import ChatbotScript from "@/components/ChatBot";

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
        <PersistGate persistor={persistor}>
            {!loading ? (
                <Component {...pageProps} />
            ) : (
                <div className="preloader"></div>
            )}
            <ChatbotScript />
        </PersistGate>
    </Provider>
}

export default MyApp