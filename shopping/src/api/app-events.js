const ShoppinService = require('../services/shopping-service');

module.exports =  (app) => {

    const service = new ShoppinService();

    app.use('/app-event', async (req, res, next) => {

        const { payload } = req.body;
        await service.SubscribeEvents(payload);

        console.log("======== Shopping receive an event =========")
        return res.status(200).json(payload);
    })

}