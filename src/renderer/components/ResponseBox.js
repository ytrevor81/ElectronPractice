class ResponseBox extends HTMLElement {
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
        <div class= "response-box">
          <h5>Response Box Test</h5>
          <h6>Box here</h6>
        </div>
      `;
    }
  }

  customElements.define('response-box', ResponseBox);

  export default ResponseBox;