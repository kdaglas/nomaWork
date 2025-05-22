import { useProductContext } from '../context/ProductContext';
import { Product } from './Product'



const ProductList = () => {
    const context = useProductContext();

    if (!context) {
        throw new Error("useProductContext must be used within a ProductProvider");
    }

    const { productList, loading, error } = context;

    return (
        <>
            <div className="container py-5">
                <h1 className="display-6 fw-bold mb-4">Products</h1>
                <div className="row g-4">
                    {loading && <p>Loading...</p>}
                    {productList && productList.map((item, key) => (
                        <Product
                            key={key}
                            product={item}
                        />
                    ))}

                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    
                    {error && <p>{error}</p>}
                </div>
            </div>
        </>
    )
}




export default ProductList
