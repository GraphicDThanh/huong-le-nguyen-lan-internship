import React from 'react';

// The file input Tag
class FileInput extends React.Component {
  fileInput = React.createRef<HTMLInputElement>();

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(`Selected file - ${(this.fileInput.current as HTMLInputElement).files![0].name}`);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>Upload File: </label>
        <input type='file' ref={this.fileInput} />
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default FileInput;
