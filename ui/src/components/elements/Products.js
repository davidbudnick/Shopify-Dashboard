import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/shopifyActions';
import propTypes from 'prop-types';

class Products extends Component {
  componentWillMount() {
    this.props.getProducts();
    console.log(this.props.getProducts());
  }

  render() {
    return <div>Div Render</div>;
    // const postItems = this.props.posts.map((post) => (
    //   <div key={post.id}>
    //     <h3>{post.title}</h3>
    //     <p>{post.body}</p>
    //   </div>
    // ));
    // return <div>{postItems}</div>;
  }
}

Products.propTypes = {
  getProducts: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.shopify.products,
});

export default connect(
  mapStateToProps,
  { getProducts },
)(Products);
