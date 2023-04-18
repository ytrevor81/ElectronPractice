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
        <div>
          <h1>Response Box Test</h1>
        </div>
      `;
    }
  }

  customElements.define('response-box', ResponseBox);

  export default ResponseBox;