import * as ztpriceshistory from '../services/priceshistory.services'
import boom from '@hapi/boom';

export const getZtPricesHistoryList = async (req, res, next) => {
    try {
        const pricesHistoryList = await ztpriceshistory.getZtPricesHistoryList();
        
        if (!pricesHistoryList || pricesHistoryList.length === 0) {
            throw boom.notFound('No se encontraron registros de precios históricos.');
        }
        
        res.status(200).json(pricesHistoryList);
    } catch (error) {
        next(error);
    }
};

export const updateZtPricesHistory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedItem = await ztpriceshistory.updateZtPricesHistory(id, req.body);
        
        if (!updatedItem) {
            throw boom.notFound('Registro no encontrado para actualizar.');
        }
        
        res.status(200).json(updatedItem);
    } catch (error) {
        next(error);
    }
};

export const deleteZtPricesHistory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedItem = await ztpriceshistory.deleteZtPricesHistory(id);
        
        if (!deletedItem) {
            throw boom.notFound('Registro no encontrado para eliminar.');
        }
        
        res.status(200).json({ message: 'Registro eliminado correctamente', deletedItem });
    } catch (error) {
        next(error);
    }
};