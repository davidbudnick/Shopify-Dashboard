import React, { Component } from 'react';
import SideBar from '../elements/SideBar';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProject } from '../../actions/projectActions';

export class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: '',
      password: '',
      domain: '',
      name: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const projectData = {
      apiKey: this.state.apiKey,
      password: this.state.password,
      domain: this.state.domain,
      name: this.state.name,
    };

    this.props.createProject(this.props.match.params.id, projectData);
    this.props.history.replace('/profile/' + this.props.match.params.id);
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-narrow">
          <SideBar projectId={this.props.match.params.projectId} history={this.props.match} />
        </div>
        <div className="column is-two-fifths">
          <form className="ml mr mt" onSubmit={this.onSubmit}>
            <div className="titleText mr is-size-1">Edit Store</div>
            <div>
              <label className="label is-size-4">Shopify Store Name: </label>
              <input
                className="input"
                name="name"
                type="text"
                placeholder="Test Store"
                onChange={this.onChange}
                value={this.state.name}
              />
            </div>
            <br />
            <div>
              <label className="label is-size-4">Shopify Domain: </label>
              <input
                className="input"
                name="domain"
                type="text"
                placeholder="https://test.myshopify.com"
                onChange={this.onChange}
                value={this.state.domain}
              />
            </div>
            <br />
            <div>
              <label className="label is-size-4">Shopify Api Key: </label>
              <input
                className="input"
                name="apiKey"
                type="text"
                placeholder="a956c6a8bea9af1c64838bdb90fdd555"
                onChange={this.onChange}
                value={this.state.apiKey}
              />
            </div>
            <br />
            <div>
              <label className="label is-size-4">Shopify Password: </label>
              <input
                className="input"
                name="password"
                type="text"
                placeholder="f7fd2c7c65147f58e3ebebe9d563777"
                onChange={this.onChange}
                value={this.state.password}
              />
            </div>
            <br />
            <button className="button is-info" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  createProject: propTypes.func.isRequired,
};
export default connect(
  null,
  { createProject },
)(Settings);
