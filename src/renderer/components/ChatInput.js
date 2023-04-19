class ChatInput extends HTMLElement {
    constructor() {
      super();
      // Your component initialization code here
    }
  
    connectedCallback() {
      // This method is called when the component is connected to the DOM
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div class="chat-input">
          <h5>Chat Input Test</h5>
          <input></input>
        </div>
      `;
    }
  }

  customElements.define('chat-input', ChatInput);

  export default ChatInput;