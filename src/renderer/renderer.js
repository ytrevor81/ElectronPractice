import { requireTaskPool } from 'electron-remote';
import ChatInput from './components/ChatInput.js';
import ResponseBox from './components/ResponseBox.js';

const sendToChatGPT = requireTaskPool(require.resolve('../backend/openaiApi.js')).sendToChatGPT;

const chatInput = document.querySelector('chat-input');
const responseBox = document.querySelector('response-box');

chatInput.onInput = async (message) => {
    const response = await sendToChatGPT(message);
    responseBox.setMessage(response);
}