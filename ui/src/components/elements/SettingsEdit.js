import React, { Component } from 'react';
import SideBar from '../elements/SideBar';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateProject } from '../../actions/projectActions';

export class SettingsEdit extends Component {
  componentWillMount() {
    console.log(this.props);
    console.log(this.state);
  }

  constructor(props) {
    super(props);

    if (this.props.location.query === undefined) {
      this.props.history.replace(`/project/${this.props.match.params.projectId}/settings/`);
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    this.state = {
      name: '',
      domain: '',
      apiKey: '',
      password: '',
    };

    this.state = {
      apiKey: this.props.location.query.apiKey,
      password: this.props.location.query.password,
      domain: this.props.location.query.domain,
      name: this.props.location.query.name,
    };
  }

  onChange(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(this.state);

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

    this.props.updateProject(this.props.match.params.id, projectData);
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
                onChange={this.onChange.bind(this)}
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
                onChange={this.onChange.bind(this)}
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
                onChange={this.onChange.bind(this)}
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
                onChange={this.onChange.bind(this)}
                value={this.state.password}
              />
            </div>
            <br />
            <button className="button is-info" type="submit">
              Update information
            </button>
          </form>
        </div>
      </div>
    );
  }
}

SettingsEdit.propTypes = {
  updateProject: propTypes.func.isRequired,
};
export default connect(
  null,
  { updateProject },
)(SettingsEdit);
