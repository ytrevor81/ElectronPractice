import ChatInput from './components/ChatInput.js';
import ResponseBox from './components/ResponseBox.js';

const chatInput = document.querySelector('chat-input');
const responseBox = document.querySelector('response-box');

chatInput.onInput = (message) => {
    responseBox.setMessage(message);
}