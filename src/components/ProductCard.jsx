import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ product, onAddToCart }) => {
  if (!product) return null;

  const { id, image, title, description, price, rating } = product;

  const available = rating?.count > 0;

  return (
    <div id={id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
      <div className="card text-center h-100">
        <img
          className="card-img-top p-3"
          src={image}
          alt={title}
          height={300}
        />
        <div className="card-body">
          <h5 className="card-title">
            {title?.length > 12 ? `${title.substring(0, 12)}...` : title}
          </h5>
          <p className="card-text">
            {description?.length > 90
              ? `${description.substring(0, 90)}...`
              : description}
          </p>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item lead">$ {price}</li>
        </ul>

        <div className="card-body d-flex justify-content-center flex-wrap">
          {available ? (
            <>
              <Link to={`/product/${id}`} className="btn btn-dark m-1">
                Buy Now
              </Link>
              <button
                className="btn btn-dark m-1"
                onClick={() => onAddToCart?.(product)}
              >
                Add to Cart
              </button>
            </>
          ) : (
            <button
              className="btn btn-outline-secondary m-1"
              disabled
              aria-disabled="true"
            >
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func,
};

export default ProductCard;
