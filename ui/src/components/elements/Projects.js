/* eslint-disable*/ import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../../actions/projectActions';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Projects extends Component {
  componentWillMount() {
    this.props.getProjects(this.props.match.params.id);
  }
  render() {
    // Object.values(this.props.user.projects).map((project) => {
    //   <div className="column is-narrow">
    //     <Link to={{ pathname: this.props.user.userId + '/project/' + project }}>
    //       <div className="box has-text-centered addBox ml mt">
    //         <div className="projectTitle text is-size-3">Test Store</div>
    //       </div>
    //     </Link>
    //   </div>;
    // });

    // const projectsItems = obj.map((project) => (
    //   <div className="column is-narrow">
    //     <Link to={{ pathname: this.props.user.userId + '/project/' + project.id }}>
    //       <div className="box has-text-centered addBox ml mt">
    //         <div className="projectTitle text is-size-3">Test Store</div>
    //       </div>
    //     </Link>
    //   </div>
    // ));

    return (
      <div className="container mt">
        <div className="columns is-multiline">
          <div className="column is-narrow">
            <Link to={{ pathname: '/newProject/' + this.props.match.params.id }}>
              <div className="box has-text-centered addBox ml mt">
                <i className="fas fa-plus is-size-3 newProject" />
                <p className="mb is-size-5 has-text-weight-bold	">Add your shopify store</p>
              </div>
            </Link>
          </div>
          {/* {JSON.stringify(this.props.user.projects)} */}
          {/* {projectsItems} */}
        </div>
      </div>
    );
  }
}
Projects.propTypes = { getProjects: propTypes.func.isRequired };
const mapStateToProps = (state) => ({ projects: state.projects.projects });

export default connect(
  mapStateToProps,
  { getProjects },
)(Projects);
