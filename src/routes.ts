import { Router } from 'express';
import * as Controller from './controller';

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'test' });
});

routes.route('/products').get(Controller.getProducts);
routes.route('/products/:id').get(Controller.getProduct);
routes.route('/products/:id').delete(Controller.deleteProduct)
routes.route('/products').post(Controller.createProduct);
routes.route('/products/:id').put(Controller.updateProduct);

export default routes;