import { useProductContext } from '../context/ProductContext';
import { Product } from './Product'



const ProductList = ({ }) => {
    const context = useProductContext();

    if (!context) {
        throw new Error("useProductContext must be used within a ProductProvider");
    }

    const { productList, loading, error } = context;

    return (



        <div className="row g-4">
            {loading && <p>Loading...</p>}
            
            {productList && productList.map((item, key) => (
                <Product
                    key={key}
                    product={item}
                />
            ))}

            {error && <p>{error}</p>}
        </div>
    )
}




export default ProductList
