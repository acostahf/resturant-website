import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditWinePage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.wine
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateWine(this.state.formData);
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
        <h1>Edit Wine</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>Name </label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Region </label>
            <input
              className="form-control"
              name="region"
              value={this.state.formData.region}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Grape </label>
            <input
              className="form-control"
              name="grape"
              value={this.state.formData.grape}
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
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE WINE
          </button>
          &nbsp;&nbsp;
          <Link to="/AdminPage">CANCEL</Link>
        </form>
      </>
    );
  }
}

export default EditWinePage;
