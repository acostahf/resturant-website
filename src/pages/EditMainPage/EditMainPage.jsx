import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditMainPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.main
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateMain(this.state.formData);
  };

  handleChange = e => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1>Edit Main</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              className="form-control"
              name="price"
              value={this.state.formData.price}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              name="description"
              value={this.state.formData.description}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE main
          </button>
          &nbsp;&nbsp;
          <Link to="/">CANCEL</Link>
        </form>
      </>
    );
  }
}

export default EditMainPage;
