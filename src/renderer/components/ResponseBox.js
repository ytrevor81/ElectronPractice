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
          <h6>Box here</h6>
        </div>
      `;
    }

    setMessage(message){
      this.querySelector('h6').textContent = message;
    }
  }

  customElements.define('response-box', ResponseBox);

  export default ResponseBox;