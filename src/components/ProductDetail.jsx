import { Link, useParams } from "react-router-dom";
import productos from "../datos/products"
import Navbar from "./Navbar";

import "../styles/DetailsProduct.css"
function ProductDetail() {
    const { id } = useParams();
    const producto = productos.find((producto) => producto.id === parseInt(id));
    if (!producto) {
        return <div>
            <Navbar></Navbar>

            Producto no encontrado
        </div>
    }
    return (
        <>
            <Navbar></Navbar>

            <div className="details-container">

                <div className="details-card">
                    <span className="details-id">
                        Producto #{producto.id}
                    </span>
                    <h1>{producto.nombre}</h1>
                    <div className="details-info">
                        <p><strong>Codigo:</strong> {producto.codigo}</p>
                        <p><strong>Stock:</strong> {producto.stock}</p>
                        <p><strong>Precio:</strong> ${producto.precio.toLocaleString("es-AR")}</p>
                    </div>
                <Link to="/products" className="back-button"> Volver a la lista</Link>
                </div>
            </div>
        </>
    )
}

export default ProductDetail