import db from '../models'

// GET ALL AREA
export const getAreasSerivce = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Area.findAll({
            raw: true,
            attributes: ['code', 'value', 'order']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get areas.',
            response
        })
    } catch (error) {
        reject(error)
    }
})