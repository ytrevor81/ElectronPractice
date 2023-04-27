
import ChatInput from './components/ChatInput.js';
import ResponseBox from './components/ResponseBox.js';
import UploadFiles from './components/UploadFiles.js';

const chatInput = document.querySelector('chat-input');
const responseBox = document.querySelector('response-box');
const uploadFiles = document.querySelector('upload-files');



uploadFiles.addEventListener('files-to-convert', async (event) => {
    const files = event.detail;
    // Add your file conversion logic here
    const convertedText = await convertFilesToText(files);
    responseBox.setResponse(convertedText);
  });

  async function convertFilesToText(files) {
    // Your file conversion logic goes here
    let result = '';
  
    for (const file of files) {
      const text = await readFileAsText(file);
      result += text + '\n';
    }
  
    return result;
  }
  
  function readFileAsText(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        resolve(event.target.result);
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      reader.readAsText(file);
    });
  }

