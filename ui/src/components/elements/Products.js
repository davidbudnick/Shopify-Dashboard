import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/shopifyActions';
import propTypes from 'prop-types';

class Products extends Component {
  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    const productItems = this.props.posts.map((product) => (
      <div key={product.id}>
        <p>{product.title}</p>
      </div>
    ));
    return <div>{productItems}</div>;
  }
}

Products.propTypes = {
  getProducts: propTypes.func.isRequired,
  products: propTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products.items,
});

export default connect(
  mapStateToProps,
  { getProducts },
)(Products);
