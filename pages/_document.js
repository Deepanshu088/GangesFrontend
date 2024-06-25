import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
				<link rel="canonical" href="https://palaceonganges.com" />
			</Head>

			<body>
				<Main />
				<NextScript />
				<Script src="https://www.googletagmanager.com/gtag/js?id=G-7MP5XE6CM5" />
				<Script dangerouslySetInnerHTML={{
					__html: `window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments)}
					gtag('js', new Date());

					gtag('config', 'G-7MP5XE6CM5');`
				}} />
				<Script type="application/ld+json" dangerouslySetInnerHTML={{
					__html: `{
							"@context": "https://schema.org/",
							"@type": "WebSite",
							"name": "Palace On Ganges",
							"url": "https://palaceonganges.com",
							"potentialAction": {
								"@type": "SearchAction",
								"target": "https://palaceonganges.com{search_term_string}",
								"query-input": "required name=search_term_string"
							}
						}
					`
				}} />
				<div className="chat-bubble-message" id="botfullyPrompt">
					<i id="chatBotCross" className="chatBotCross fa fa-times" onClick={() => document.getElementById('botfullyPrompt').style.display = 'none'}></i>
					<div id="promptHeader" className="bubble-message-header"></div>
					<div id="promptBody" className="bubble-message-text"></div>
				</div>
			</body>
		</Html>
	);
}
