/* eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/shopifyActions';
import propTypes from 'prop-types';
import temp from '../img/temp.jpg';

class Products extends Component {
  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    const productItems = this.props.products.map((product) => (
      <div key={product.id} className="column is-2">
        <div className="card ">
          <div className="card-image">
            <figure className="image is-3by2">
              <img alt={product.created_at} src={product.image ? product.image.src : temp} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{product.title}</p>
                <p className="subtitle is-6">{product.vendor}</p>
              </div>
            </div>

            <div className="content">{product.body_html}</div>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="mt mr ml">
        <div className="columns is-multiline">{productItems}</div>
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
