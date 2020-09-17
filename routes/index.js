const express = require("express"),
    router = express.Router(),
    TopicModel = require("../models/langModel");

const renderPage = async res => {
    const topicData = await TopicModel.getAll();
    const statusData = await TopicModel.getAllStatuses();

    return res.render("template", {
        locals: {
            title: "Home Page",
            data: topicData, 
            statusData: statusData,
        },
        partials: {
            partial: "partial-index"
        },
    });
}

router.get ("/", async function (req, res, next) {
    renderPage(res);
});

router.post("/", async function (req, res) {
    for (let key in req.body) {
        await TopicModel.updateStatus(req.body[key], key);
    }
    renderPage(res);
});

module.exports = router;
