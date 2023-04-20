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
          <input></input>
        </div>
      `;

      this.querySelector('input').addEventListener('input', (event) =>  {
        if (this.onInput) {
          this.onInput(event.target.value);
        }
      });
    }

    set onInput(callback) {
      this._onInput = callback;
    }

    get onInput(){
      return this._onInput;
    }
  }


  customElements.define('chat-input', ChatInput);

  export default ChatInput;