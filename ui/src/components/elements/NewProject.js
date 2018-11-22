import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';

export class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: '',
      password: '',
      domain: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const project = {
      apiKey: this.state.apiKey,
      password: this.state.password,
      domain: this.state.domain,
    };

    this.props.createPost(project);
    this.props.history.replace('/profile/' + this.props.match.params.id);
  }

  render() {
    return (
      <div className="container">
        <div className="titleText ml mr  is-size-1">Add Store</div>
        <form className="ml mr mt" onSubmit={this.onSubmit}>
          <div>
            <label className="label is-size-4">Api Key: </label>
            <input className="input" name="apiKey" type="text" onChange={this.onChange} value={this.state.apiKey} />
          </div>
          <br />
          <div>
            <label className="label is-size-4">Password: </label>
            <input className="input" name="password" type="text" onChange={this.onChange} value={this.state.password} />
          </div>
          <br />
          <div>
            <label className="label is-size-4">Domain: </label>
            <input className="input" name="domain" type="text" onChange={this.onChange} value={this.state.domain} />
          </div>
          <br />
          <button className="button is-info" type="submit">
            Add Store
          </button>
        </form>
      </div>
    );
  }
}

NewProject.propTypes = {
  createPost: propTypes.func.isRequired,
};
export default connect(
  null,
  { createPost },
)(NewProject);
