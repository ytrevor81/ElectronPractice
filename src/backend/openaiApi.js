import dotenv from 'dotenv';
import openAI from 'openai';

dotenv.config();
openAI.apiKey = process.env.OPEN_AI_API_KEY;

async function sendToChatGPT(prompt) {
    try {
        const result = await openAI.ChatCompletionRequestMessageRoleEnum.create({
            engine: 'gpt-4',
            prompt: prompt,
            max_tokens: 300,
            n: 1,
            stop: null,
            temperature: 1,
        });

        return result.choices[0].text.trim();
    }
    catch (error) {
        console.log(error);
        return "Error with chat GPT";
    }
}

module.exports = { sendToChatGPT, };