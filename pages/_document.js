import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {


	return (
		<Html lang="en">
			<Head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
				<meta property="og:URL" content="/favicon.ico" />

				<meta property="og:type" content="article" />

				<meta property="og:title" content="Palace on Ganges" />

				<meta property="og:description" content="Welcome to the Palace on Ganges, an exquisite fusion of traditional elegance and contemporary luxury located at the heart of Varanasi’s spiritual landscape, on the famous Assi Ghat." />

				<meta property="og:image" content="/favicon.ico" />
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
