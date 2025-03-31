import express from 'express';
import {
    getZtPricesHistoryList,
    updateZtPricesHistory,
    deleteZtPricesHistory
} from '../controllers/pricesHistory.controller'

const router = express.Router();
//Crud de categories
router.get('/', getZtPricesHistoryList);
router.put('/:id', updateZtPricesHistory);
router.delete('/:id', deleteZtPricesHistory);

export default router;