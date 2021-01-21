const db = require("../models");
const Images = db.images;
const Comments = db.comments;

exports.saveImage = (req, res) => {
    return Images.create({
        source: req.body.source,
        posted_date: req.body.posted_date,
        average_score: req.body.average_score,
    })
        .then(() => {
            res.send({ message: "Image was saved successfully!" });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};

exports.saveComment = (req, res) => {
    return Comments.create({
        commentText: req.body.commentText,
        score: req.body.score,
        imageId: req.body.imageId,
    })
        .then(() => {
            res.send({ message: "Comment was saved successfully!" });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};

exports.findImageByDate = (req, res) => {
    return Images.findAll({
        where: {
            posted_date: req.params.date
        }
    })
        .then((data) => {
            if (!data) {
                return res.status(404).send({ message: "Comments not found!" });
            }
            res.status(200).send({
                imgData: data[0].dataValues.source
            });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};

exports.findCommentsByImageId = (req, res) => {
    return Comments.findAll({
        where: {
            imageId: req.params.id
        }
    })
        .then((comment) => {
            if (!comment) {
                return res.status(404).send({ message: "Comments not found!" });
            }
            res.status(200).send({
                commentArray: comment
            });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};

exports.findAll = (req, res) => {
    return Images.findAll({
      include: ["comments"],
    }).then((images) => {
        if (!images) {
            return res.status(404).send({ message: "Images not found!" });
        }
        console.log("MADAFAKA", images)
        res.status(200).send({
            imageArray: images
        });
    }).catch((err) => {
        res.status(500).send({ message: err.message });
    });
  };