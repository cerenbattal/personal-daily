const db = require("../models");
const Images = db.images;
const Comments = db.comments;

exports.saveImage = (image) => {
    return Images.create({
        source: image.source,
        posted_date: image.posted_date,
        average_score: image.average_score,
    })
        .then((image) => {
            console.log(">> Created image: " + JSON.stringify(image, null, 4));
            return image;
        })
        .catch((err) => {
            console.log(">> Error while saving image: ", err);
        });
};

exports.saveComment = (imageId, comment) => {
    return Comments.create({
        commentText: comment.commentText,
        score: comment.score,
        imageId: imageId,
    })
        .then((comment) => {
            console.log(">> Created comment: " + JSON.stringify(comment, null, 4));
            return comment;
        })
        .catch((err) => {
            console.log(">> Error while creating comment: ", err);
        });
};

exports.findImageByDate = (date) => {
    return Images.findAll({
        where: {
            posted_date: date
        }
    })
        .then((data) => {
            return data[0].dataValues.source;
        })
        .catch((err) => {
            console.log(">> Error while finding image: ", err);
        });
};

exports.findCommentsByImageId = (id) => {
    return Comments.findAll({
        where: {
            imageId: id
        }
    })
        .then((comment) => {
            return comment;
        })
        .catch((err) => {
            console.log(">> Error while finding comment: ", err);
        });
};

exports.findAll = () => {
    return Images.findAll({
      include: ["comments"],
    }).then((images) => {
      return images;
    });
};