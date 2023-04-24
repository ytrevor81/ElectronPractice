class ResponseBox extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      // This method is called when the component is connected to the DOM
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div class= "response-box">
          <h5>Response Box Test</h5>
          <h6 class="response-content">Response here</h6>
        </div>
      `;
    }

    displayResponse(message){
      this.querySelector('.response-content').innerText = message;
    }
  }

  customElements.define('response-box', ResponseBox);

  export default ResponseBox;