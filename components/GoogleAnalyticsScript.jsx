const GoogleAnalyticsScript = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-7MP5XE6CM5');
    return null;
}

export default GoogleAnalyticsScript;