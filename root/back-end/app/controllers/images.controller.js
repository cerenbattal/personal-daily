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
    console.log(req);
    return Comments.create({
        comment_text: req.body.comment_text,
        score: req.body.score,
        image_id: req.body.image_id,
        user_id: req.body.user_id
    })
    .then(() => {
        res.status(200).send({ message: "Comment was saved successfully!" });
    })
    .catch((err) => {
        res.status(500).send({ message: err.message });
    });
};

exports.findImageByDate = (req, res) => {
    return Images.findOne({
        attributes: ['source'],
        where: {
            posted_date: req.params.date
        }
    })
    .then((data) => {
        if (!data) {
            return res.status(404).send({ message: "Image not found!" });
        }
        res.status(200).send({
            imgData: data
        });
    })
    .catch((err) => {
        res.status(500).send({ message: err.message });
    });
};

exports.findCommentsByImageId = (req, res) => {
    return Comments.findAll({
        where: {
            image_id: req.params.id
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