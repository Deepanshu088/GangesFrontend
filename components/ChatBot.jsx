import { useEffect } from 'react';

const ChatbotScript = () => {
    useEffect(() => {
        const scriptContent = `
            botWidth = '400px';
            botHeight = '525px';
            headerColor = '#aa8453';
            headerTextColor = '#ffffff';
            headerText = 'Palace on Ganges';
            buttonIcon = "<i class='fa fa-comments'></i>";
            promptHeader = "We're Online!";
            promptBody = 'How may I help you today?';

            document.getElementById("promptHeader").innerHTML = promptHeader;
            document.getElementById("promptBody").innerHTML = promptBody;

            function closeBotfullyPrompt() {
                document.getElementById('botfullyPrompt').style.display = 'none';
            }
        `;

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = scriptContent;
        document?.body?.appendChild(script);

        const botScript = document.createElement('script');
        botScript.src = "https://cloud.botspice.com/api/chatbots/botOnSite?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGF0Ym90Ijp7ImlkIjoiNjY1YWQ0NGI4Y2M3ZTQ2YTExMjhjOTY5IiwidXJsQm90Ijp0cnVlLCJwdWJsaXNoVHlwZSI6IndlYnNpdGUiLCJjcmVhdGVkQnkiOiI2NjVhYmJmZDhjYzdlNDZhMTEyOGM3ODIifSwic3ViIjoiNjY1YWQ0NGI4Y2M3ZTQ2YTExMjhjOTY5IiwiaWF0IjoxNzE3MjQ0MTcyLCJleHAiOjE3MTk4MzYxNzJ9.Enu8WaFwXzzFgdmutrWEctXEt-k0K0NNnEWCvivRDqs&height=525px&width=400px&poptime=-1000";
        document?.body?.appendChild(botScript);

        return () => {
            document.body.removeChild(script);
            document.body.removeChild(botScript);
        };
    }, []);

    return null;
};

export default ChatbotScript;
