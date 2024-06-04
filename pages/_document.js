import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {


	return (
		<Html lang="en">
			<Head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
			</Head>
			<body>
				<Main />
				<NextScript />
				<div className="chat-bubble-message" id="botfullyPrompt">
					<i id="chatBotCross" className="chatBotCross fa fa-times" onClick={() => document.getElementById('botfullyPrompt').style.display = 'none'}></i>
					<div id="promptHeader" className="bubble-message-header"></div>
					<div id="promptBody" className="bubble-message-text"></div>
				</div>
			</body>
		</Html>
	);
}
