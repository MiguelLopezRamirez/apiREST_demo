import ztpriceshistory from "../models/ztpriceshistory";
import boom from '@hapi/boom';

export const getZtPricesHistoryList = async () => {
    let pricesHistoryList;
    try {
        pricesHistoryList = await ztpriceshistory.find();
        return pricesHistoryList;
    } catch (error) {
        throw boom.internal(error);
    }
};

export const updateZtPricesHistory = async (id, data) => {
    let updatedItem;
    try {
        updatedItem = await ztpriceshistory.findOneAndUpdate(
            { _id: id },
            data,
            { new: true } // Devuelve el documento actualizado
        );
        return updatedItem;
    } catch (error) {
        throw boom.internal(error);
    }
};

export const deleteZtPricesHistory = async (id) => {
    try {
        const deletedItem = await ztpriceshistory.findOneAndDelete({ _id: id });
        return deletedItem;
    } catch (error) {
        throw boom.internal(error);
    }
};