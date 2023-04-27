const dotenv = require('dotenv');
const {Configuration, OpenAIApi } = require('openai');

dotenv.config();
//openAI.apiKey = process.env.OPEN_AI_API_KEY;

const config = new Configuration({
    organization: "org-cYZUh0Epxg6ln7XUV82OdDu5",
    apiKey: "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",
});

const openAI = new OpenAIApi(config);

async function sendToChatGPT(prompt) {
    try {
        const result = await openAI.createCompletion({
            model: 'gpt-3.5-turbo',
            prompt: prompt,
            max_tokens: 30,
            temperature: 1,
        });

        //return result.choices[0].text.trim();
        //return result.data;

        console.log(result.data);
    }
    catch (error) {
        console.log(error);
    }
}

sendToChatGPT("Say HelloWorld!, please");




//module.exports = { sendToChatGPT, };