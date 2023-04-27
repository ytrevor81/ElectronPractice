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
      <button id="convertButton">Convert Files</button>
    `;

    this.querySelector('#fileInput').addEventListener('change', this.handleFileUpload.bind(this));
    this.querySelector('#convertButton').addEventListener('click', this.handleFileConversion.bind(this));
  };

  handleFileUpload(event) {
    this.files = event.target.files;
  }

  async handleFileConversion() {
    if (!this.files) {
      alert('No files selected');
      return;
    }
    // Emit an event to the parent with the selected files
    this.dispatchEvent(new CustomEvent('files-to-convert', { detail: this.files }));
  }

}

customElements.define('upload-files', UploadFiles);
export default UploadFiles;
