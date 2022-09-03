import * as services from '../services/province'

export const getProvinces = async (req, res) => {
    try {
        const response = await services.getProvincesSerivce()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at category controller: ' + error
        })
    }
}