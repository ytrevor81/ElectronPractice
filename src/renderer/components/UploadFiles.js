class UploadFiles extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
      // This method is called when the component is connected to the DOM
      this.render();
    }

render() {
    this.innerHTML = `
      <input type="file" id="fileInput" multiple />
    `;

    this.querySelector('#fileInput').addEventListener('change', this.handleFileUpload.bind(this));
  };

  handleFileUpload(event) {
    this.files = event.target.files;
  }

  async getFiles() { 
    const storedFiles = this.files;
    this.files = null; //clears files. rework later. eventually clear all text of files
    return storedFiles; 
  }
}

customElements.define('upload-files', UploadFiles);
export default UploadFiles;
