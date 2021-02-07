const controller = require("../controllers/images.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    
    app.post("/api/images", controller.saveImage);
    app.post("/api/comments", controller.saveComment);
    app.get("/api/images/all", controller.findAll);
    app.get("/api/images/:date", controller.findImageByDate);
    app.get("/api/comments/:id", controller.findCommentsByImageId);
};