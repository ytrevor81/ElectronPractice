class ChatInput extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      // This method is called when the component is connected to the DOM
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div class="chat-input">
          <h5>Chat Input Test</h5>
          <input id="inputText"></input>
          <button id="submitButton">Submit</button>
        </div>
      `;
      
      this.querySelector('#submitButton').addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('files-convert'));
      })
    }    
  }


  customElements.define('chat-input', ChatInput);

  export default ChatInput;