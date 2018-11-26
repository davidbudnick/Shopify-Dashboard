/* eslint-disable*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/shopifyActions';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import temp from '../img/temp.jpg';
class Products extends Component {
  componentWillMount() {
    this.props.getProducts(this.props.projectId);
  }
  render() {
    const productItems = this.props.products.map((product) => (
      <div key={product.id} className="column is-narrow">
        <div className="card ">
          <div className="card-image">
            <figure className="image is-3by2">
              <img alt={product.created_at} src={product.image ? product.image.src : temp} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <div className="title is-5">{product.title}</div>
                <div className="subtitle is-6">{product.vendor}</div>
              </div>
            </div>
            {/* <div className="content">{product.body_html}</div> */}
          </div>
          <footer className="card-footer">
            <Link to={{ pathname: '/product/view/' + product.id }} className="card-footer-item">
              View
            </Link>
            <Link to={{ pathname: '/product/edit/' + product.id }} className="card-footer-item">
              Edit
            </Link>
            <Link to={{ pathname: '/product/delete/' + product.id }} className="card-footer-item">
              Delete
            </Link>
          </footer>
        </div>
      </div>
    ));
    return (
      <div className="mt mr">
        <div className="columns is-multiline">{productItems}</div>
      </div>
    );
  }
}
Products.propTypes = { getProducts: propTypes.func.isRequired };
const mapStateToProps = (state) => ({ products: state.shopify.products });

export default connect(
  mapStateToProps,
  { getProducts },
)(Products);
