import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.createPost(post);
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label className="label">Title: </label>
            <input className="input" name="title" type="text" onChange={this.onChange} value={this.state.title} />
          </div>
          <div>
            <label className="label">Body: </label>
            <textarea className="textarea" name="body" type="text" onChange={this.onChange} value={this.state.body} />
          </div>
          <br />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: propTypes.func.isRequired,
};
export default connect(
  null,
  { createPost },
)(PostForm);
