import { Router } from 'express';
import * as Controller from './controller';

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'test' });
});

routes.route('/categories').get(Controller.getCategories);
routes.route('/categories/:id').get(Controller.getCategory);
routes.route('/categories/:id').delete(Controller.deleteCategory);
routes.route('/categories').post(Controller.createCategory);
routes.route('/categories/:id').put(Controller.updateCategory);
routes.route('/products').get(Controller.getProducts);
routes.route('/products/:id').get(Controller.getProduct);
routes.route('/products/:id').delete(Controller.deleteProduct);
routes.route('/products').post(Controller.createProduct);
routes.route('/products/:id').put(Controller.updateProduct);

export default routes;