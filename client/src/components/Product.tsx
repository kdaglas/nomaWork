import placeholder from '../assets/images/placeholder_img.png'
import type { ProductInterface } from '../types/ProductInterface';
interface ProductProps {
    product: ProductInterface;
}

export function Product({ product }: ProductProps) {
    // export function Product() {
    return (
        <>
            {/* <div>
                <img src={iphone} alt="product" className='product-img' />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <p>{product.price}</p>
                <p>{new Date(product.dateAdded).toLocaleDateString()}</p>
                <p>{product.averageRating}</p>
                <button className='btn btn-primary'>Review</button>
            </div> */}




            {/* <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100 shadow-md">
                    <div className="favorite">
                        <i className="bi bi-heart"></i>
                    </div>
                    <div className='image-box'>
                        <img src={placeholder} className="card-img-top" alt="Product" />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <h6 className="product-title mb-1">{product.name}</h6>
                        <p className="text-muted small">{product.description}</p>
                        <div className="mb-2">
                            <span className="rating-value">⭐ 4.5</span>{" "}
                            <span className="rating-star">★ ★ ★ ★ ☆</span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h5 className="fw-bold">${product.price}</h5>
                            <button className="btn btn-outline-dark btn-sm mt-2">Review</button>
                        </div>
                    </div>
                </div>
            </div> */}



            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card product-card h-100 shadow-sm">
                    <div className="favorite">
                        <i className="bi bi-heart"></i>
                    </div>
                    <img src={placeholder} className="card-img-top" alt="Product" />
                    <div className="card-body d-flex flex-column justify-content-between">
                        <h6 className="product-title mb-1">Apple AirPods Pro 2nd Gen</h6>
                        <p className="text-muted small">Apple AirPods Pro (2nd Gen) with MagSafe Charging Case</p>
                        <div className="mb-2">
                            <span className="rating-value">⭐ 4.5</span>{" "}
                            <span className="rating-star">★ ★ ★ ★ ☆</span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h5 className="fw-bold">$399.99</h5>
                            <button className="btn btn-outline-dark btn-sm mt-2">View Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

