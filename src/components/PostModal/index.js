import React, { Component } from "react";
import "./index.css";

class PostModal extends Component {
  state = {
    imageUrl: null,
    formData: null,
    caption: ""
  };

  handleAddImg = event => {
    const file = event.target.files[0];

    const fileReader = new FileReader();
    const formData = new FormData();

    formData.append("media", file);

    fileReader.onloadend = () => {
      this.setState({ formData, imageUrl: fileReader.result });
    };

    fileReader.readAsDataURL(file);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { formData, caption } = this.state;
    this.props.submitPost(formData, caption).then(() => {
      console.log(this.props);
    });
  };

  onChange = e => this.setState({ caption: e.target.value });

  render() {
    const { imageUrl } = this.state;

    return (
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create post</h5>
            <button
              type="button"
              className="close"
              onClick={this.props.handleCloseModal}
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label>Caption:</label>
                <input
                  className="form-control"
                  type="text"
                  onChange={this.onChange}
                />
              </div>
              <input type="file" onChange={this.handleAddImg} />
            </form>
            {imageUrl ? (
              <div className="previewImage">
                <img src={imageUrl} alt="" />
              </div>
            ) : null}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.props.handleCloseModal}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostModal;
