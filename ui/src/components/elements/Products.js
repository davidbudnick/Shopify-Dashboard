/* eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/shopifyActions';
import propTypes from 'prop-types';

class Products extends Component {
  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    const productItems = this.props.products.map((product) => (
      <div key={product.id} className="col">
        <div className="card mt">
          <img className="card-img-top" alt={product.created_at} src={product.image.src} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text" />
            <button type="button" className="btn btn-primary">
              View
            </button>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="container-fluid">
        <div className="row ">{productItems}</div>
      </div>
    );
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
