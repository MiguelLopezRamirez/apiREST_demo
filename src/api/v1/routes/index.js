import { Router } from 'express';
import config from '../../../config/config'
import pricesHistory from './pricessHistoty.routes'



const routerAPI = (app) => {
    const router = Router();
    const api = config.API_URL;

    app.use(api, router);

    app.use('/pricesHistory',pricesHistory)

    return router;
};

module.exports = routerAPI;
