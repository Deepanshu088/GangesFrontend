import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {

	console.log("docummenentneiktnoentotneonto");

	return (
		<Html lang="en">
			<Head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

				<title>Palace on Ganges Heritage Hotel | Stay at Assi Ghat, Varanasi</title>
				{/* <meta name="description" key="description" content="Discover the timeless beauty of Varanasi at Palace on Ganges Heritage Hotel. Situated on Assi Ghat, this heritage hotel offers comfortable rooms, traditional cuisine, and stunning views of the Ganges River. Book your heritage stay today." />
				<meta name="keywords" key="keywords" content="Palace on Ganges Heritage Hotel, Heritage Hotel Varanasi, Hotel Assi Ghat Varanasi, Stay on Assi Ghat, Ganges River Hotel Varanasi, Varanasi Heritage Accommodation, Palace on Ganges, Assi Ghat Hotels" />
				<meta name="author" key="author" content="Palace on Ganges" />
				<meta property="og:title" key="og:title" content="Palace on Ganges Heritage Hotel | Stay at Assi Ghat, Varanasi" />
				<meta property="og:description" key="og:description" content="Discover the timeless beauty of Varanasi at Palace on Ganges Heritage Hotel. Situated on Assi Ghat, this heritage hotel offers comfortable rooms, traditional cuisine, and stunning views of the Ganges River. Book your heritage stay today." />
				<meta property="og:url" key="og:url" content="https://palaceonganges.com" />
				<meta property="og:image" key="og:image" content="/favicon.ico" /> */}

				{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-7MP5XE6CM5"></script>
				<script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments)}
					gtag('js', new Date());

					gtag('config', 'G-7MP5XE6CM5');
				</script> */}
			</Head>

			<body>
				<Main />
				<NextScript />
				<Script src="https://www.googletagmanager.com/gtag/js?id=G-7MP5XE6CM5" />
				{/* <GoogleAnalyticsScript /> */}
				<div className="chat-bubble-message" id="botfullyPrompt">
					<i id="chatBotCross" className="chatBotCross fa fa-times" onClick={() => document.getElementById('botfullyPrompt').style.display = 'none'}></i>
					<div id="promptHeader" className="bubble-message-header"></div>
					<div id="promptBody" className="bubble-message-text"></div>
				</div>
			</body>
		</Html>
	);
}
