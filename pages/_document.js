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
					<i className="fa fa-times" style={{ position: 'absolute', right: '5px', top: '5px', fontSize: '20px', color: '#a9a7a7' }} onClick={() => document.getElementById('botfullyPrompt').style.display = 'none'}></i>
					<div style={{ fontWeight: '600', cursor: 'pointer' }} id="promptHeader" className="bubble-message-header"></div>
					<div style={{ color: '#666', fontSize: '13px' }} id="promptBody" className="bubble-message-text"></div>
				</div>
			</body>
		</Html>
	);
}
