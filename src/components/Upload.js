import React, { Component } from 'react';
import '../CSS/Upload.css';
import API from '../api';

class Upload extends Component {
  state = {
    successfulUpload: false,
    showErrorMessages: false,
    errorMessages: []
  }

  // select the file, remove the last error and display the submit button
  onFilesAdded(files) {
    this.setState({
      'file': files[0],
      'showErrorMessages': false,
      'activateUploadButton': true
    })
  }

  uploadFile() {
    let data = new FormData();
    data.append('file', this.state.file);
    data.append('name', 'json');
    API.post('player', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        // display success message
        this.setState({
          'successfulUpload': true,
          'activateUploadButton': false
        });
        // redirect to players page after 2s timeout
        setTimeout(() => {
          this.setState({'successfulUpload': false});
          this.props.history.push('/players')
        }, 2000);
      })
      // display error messages
      .catch((error) => {
        this.setState({
          'showErrorMessages': true,
          'errorMessages': Object.values(error.response.data),
          'activateUploadButton': false
        })
      })
  }
  render() {
    return (
      <div className='uploadContainer'>
        {/* show only on successful upload */}
        {this.state.successfulUpload
          ? <div style={{width: '100%'}}>
              <h1 className='successBanner'>File successfully uploaded !!!</h1>
            </div>
          : <p>Upload a .json file of your player to add it to the players list</p>
        }
        {/* show only on failed upload - dispaly messages */}
        {this.state.showErrorMessages
          ? this.state.errorMessages.map((message, index) =>
              <div style={{width: '100%'}} key={index}>
                <h1 className='errorBanner'>{message}</h1>
              </div>
            )
          : []
        }
        <input
          ref={this.fileInputRef}
          className="fileInput"
          type="file"
          onChange={e => this.onFilesAdded(e.target.files)}
        />
        {this.state.activateUploadButton
          ? <button className='uploadButton' onClick={this.uploadFile.bind(this)}>Upload Files</button>
          : []
        }
      </div>
    )
  }
};

export default Upload;
