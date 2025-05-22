import placeholder from '../assets/images/placeholder_img3.png'
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
                            <span>⭐ 4.5</span>{" "}
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
                <div className="card h-100">
                    <div className="favorite">
                        <i className="bi bi-heart"></i>
                    </div>
                    <div className='card-image-box'>
                        <img src={placeholder} className="card-image img-fluid" alt="Product" />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <h6 className="card-product-title mb-3"><a href="">Apple AirPods Pro 2nd Gen</a></h6>
                        <p className="text-muted small">Apple AirPods Pro (2nd Gen) with MagSafe Charging Case</p>
                        <div className="mb-2">
                            <span>
                                <i className="bi bi-star-fill"></i> 4.5
                            </span>
                        </div>
                        <div className='d-flex justify-content-between text-muted mb-2'>
                            <small>Electronics</small>
                            <small>Mon 27 June 2025</small>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h5 className="fw-bold mb-0 pb-0">$399.99</h5>
                            <button className="btn btn-outline-primary btn-sm mt-2">View Product</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-md-6 text-center">
                    <div className='product-image-box'>
                        <img src={placeholder} className="product-image img-fluid" alt="AirPods Pro" />
                    </div>
                </div>

                <div className="col-md-6">
                    <h3>Apple AirPods Pro 2nd gen</h3>
                    <div className="mb-3">
                        <i className="bi bi-star-fill"></i> 4.5
                    </div>

                    <p>Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C) provide excellent sound, active noise cancellation, and a comfortable fit. The USB-C case ensures quick charging, and they pair seamlessly with Apple devices for an effortless audio experience.</p>

                    <h4 className="text-primary mb-3">$399.99</h4>

                    <ul className="list-unstyled">
                        <li><strong>Category:</strong> Earphone</li>
                        <li><strong>Date Added:</strong> Earphone</li>
                    </ul>

                    <button className="btn btn-outline-primary btn-sm">Add Review</button>

                </div>
            </div>



            <div className="mt-4">
                <h4 className='mb-4'>Product Reviews</h4>

                <div className="review">
                    <div className="d-flex justify-content-between">
                        <strong>Jane Doe</strong>
                        <span>
                            <i className="bi bi-star-fill"></i> 4.5
                        </span>
                    </div>
                    <p>Absolutely love these AirPods. The noise cancellation is top-notch and they fit perfectly!</p>
                </div>

                <div className="review">
                    <div className="d-flex justify-content-between">
                        <strong>John Smith</strong>
                        <span>
                            <i className="bi bi-star-fill"></i> 4.5
                        </span>
                    </div>
                    <p>Great product, but I wish the battery lasted a bit longer. Still worth the price!</p>
                </div>

                <div className="review">
                    <div className="d-flex justify-content-between">
                        <strong>Emily Rose</strong>
                        <span>
                            <i className="bi bi-star-fill"></i> 4.5
                        </span>
                    </div>
                    <p>Seamless connection with my iPhone and the sound quality is excellent.</p>
                </div>
            </div>


            <div className="mt-5">
                <h4>Leave a Review</h4>
                <form>
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Name: </label>
                        <input type="text" className="form-control" id="author" placeholder="Enter your name" />
                    </div>

                    {/* author
                    productid
                    Rating
                    comment */}

                    <div className="mb-3">
                        <label htmlFor="reviewRating" className="form-label">Rating</label>
                        <select className="form-select" id="reviewRating">
                            <option value="5"><i className="bi bi-star-fill"></i> 5.0</option>
                            <option value="4"><i className="bi bi-star-fill"></i> 4.0</option>
                            <option value="3"><i className="bi bi-star-fill"></i> 3.0</option>
                            <option value="2"><i className="bi bi-star-fill"></i> 2.0</option>
                            <option value="1"><i className="bi bi-star-fill"></i> 1.0</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="reviewComment" className="form-label">Review</label>
                        <textarea className="form-control" id="reviewComment" rows={4} placeholder="Write your experience..."></textarea>
                    </div>

                    <button type="submit" className="btn btn-outline-primary btn-sm">Submit Review</button>
                </form>
            </div>




        </>
    )
}

