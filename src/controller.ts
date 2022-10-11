import { Request, RequestHandler, Response } from 'express';
import * as ProductModel from './services/models';
import * as ProductService from './services/repository';

export const getProducts: RequestHandler = async (req: Request, res: Response) => {
    try {
        const products = await ProductService.getProducts();
        res.status(200).json({
            products
        });

    } catch (error) {
        console.error('[controller][getProducts][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
            message: 'Error fetching products'
        });
    }
};

// @ts-ignore
export const getProduct: RequestHandler = async (req: ProductModel.GetProductRequest, res: Response) => {
    try {
        const product = await ProductService.getProductById(req.params.id);
        res.status(200).json({
            product
        });

    } catch (error) {
        console.error('[controller][getProduct][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
            message: 'Error fetching product'
        });
    }
};

export const createProduct: RequestHandler = async (req: ProductModel.CreateProductRequest, res: Response) => {
    try {
        const result = await ProductService.insertProduct(req.body);
        res.status(200).json({
            result
        });
    } catch (error) {
        console.error('[controller][createProduct][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
            message: 'Error creating product'
        });
    }
};

// @ts-ignore
export const deleteProduct: RequestHandler = async (req: ProductModel.DeleteProductRequest, res: Response) => {
    try {
        const result = await ProductService.deleteProduct(req.params.id);
        res.status(200).json({
            result
        });
    } catch (error) {
        console.error('[controller][deleteProduct][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
            message: 'Error deleting product'
        });
    }
}

// @ts-ignore
export const updateProduct: RequestHandler = async (req: ProductModel.UpdateProductRequest, res: Response) => {
    try {
        const result = await ProductService.updateProduct({...req.body, id: req.params.id});
        res.status(200).json({
            result
        });

    } catch (error) {
        console.error('[controller][updateProduct][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
            message: 'Error updating product'
        });
    }
}