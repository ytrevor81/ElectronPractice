// const { runTask } = window.electronAPI;

// import { ipcRenderer } from 'electron';
import ChatInput from './components/ChatInput.js';
import ResponseBox from './components/ResponseBox.js';

const chatInput = document.querySelector('chat-input');
const responseBox = document.querySelector('response-box');

// (async () => {
//     try {
//       const result = await runTask('../backend/openaiApi.js', ['arg1', 'arg2']);
//       console.log(result.stdout);
//     } catch (error) {
//       console.error(error);
//     }
//   })();

// chatInput.onInput = async (message) => {
//     const response = await sendToChatGPT(message);
//     responseBox.setMessage(response);
// }



