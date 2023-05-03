import ChatInput from './components/ChatInput.js';
import ResponseBox from './components/ResponseBox.js';
import UploadFiles from './components/UploadFiles.js';

const chatInput = document.querySelector('chat-input');
const responseBox = document.querySelector('response-box');
const uploadFiles = document.querySelector('upload-files');

chatInput.addEventListener('files-convert', async () => {
  const files = await uploadFiles.getFiles();

  if (!files) {
    alert('No files selected');
    return;
  }

  const convertedText = await convertFilesToText(files);
  responseBox.displayResponse(convertedText);
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

