import express from 'express';
const routes = express.Router();

routes.get('/', (resquest, response) => {
    return response.json({ message: 'Olá' });
});

export default routes;