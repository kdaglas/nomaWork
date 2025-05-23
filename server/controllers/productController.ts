import express from 'express';
import type { Request, Response } from 'express';
import { Product } from '../models/product';
import { Review } from '../models/reviews';


export const getProducts = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const category = req.query.category as string | undefined;

    try {
        const result = await Product.fetchFilteredAndPaginated(page, category);
        res.status(200).json({
            products: result.products,
            pagination: {
                totalItems: result.totalItems,
                totalPages: result.totalPages,
                currentPage: result.currentPage
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
}


export const getProductById = async (req: Request, res: Response) => {
    const product = await Product.getProductById(Number(req.params.productId))
    res.status(200).json(product);
}

export const searchProducts = async (req: Request, res: Response) => {
    const query = req.query.q as string;
    if (typeof query !== 'string' || query.trim() === '') {
        return res.status(400).json({ error: 'Missing or invalid query parameter' });
    }
    const product = await Product.searchProductsByName(query);
    res.status(200).json(product);
}

/** reviews */

export const getProductReviews = async (req: Request, res: Response) => {
    const reviews = await Review.fetchProductReviews(Number(req.params.productId));
    res.status(200).json(reviews);
}

export const deleteProductReview = async (req: Request, res: Response) => {
    const { productId, reviewId } = req.params;

    const success = await Review.deleteProductReview(Number(productId), Number(reviewId));

    if (!success) {
        return res.status(404).json({ message: 'Product or review not found.' });
    }

    return res.status(200).json({ message: 'Review deleted successfully.' });
}

// export const save = async (req: Request, res: Response) => {
//     const prodReview = req.body;
//     const savedProd = new Review(null, prodReview.productId, prodReview.author, prodReview.rating, prodReview.comment, prodReview.date).save();
//     res.status(201).json(savedProd);
// }






