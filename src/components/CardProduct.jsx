import "../styles/CardProduct.css";
import { Link } from "react-router-dom";

function CardProduct({ id, nombre, codigo, stock, precio }) {

  return (
    <Link to={`/product/${id}`} className="product-card-link">

      <div className="product-card">

        <div className="product-card-header">
          <span>Producto #{id}</span>

          <span className="product-stock">
            Stock: {stock}
          </span>
        </div>

        <div className="product-card-body">

          <h2>{nombre}</h2>

          <p>
            Código: {codigo}
          </p>

          <h3>
            ${precio.toLocaleString("es-AR")}
          </h3>

        </div>

        <span className="product-detail-link">
          Ver detalles →
        </span>

      </div>

    </Link>
  );
}

export default CardProduct;