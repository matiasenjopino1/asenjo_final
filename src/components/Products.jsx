import productos from "../datos/products"
import CardProduct from "./CardProduct";
import '../styles/Products.css'
import Navbar from "./Navbar";
function Products() {
    return (
        <div className="products-container">
            <Navbar></Navbar>
            <h1>Listado de Productos</h1>
            <div className="products-grid">
                {productos.map((productos) => {
                    return (
                        <CardProduct
                            key={productos.id}
                            id={productos.id}
                            nombre={productos.nombre}
                            codigo={productos.codigo}
                            stock={productos.stock}
                            precio={productos.precio}
                        ></CardProduct>
                    )
                })}
            </div>
        </div>
    )
}

export default Products;