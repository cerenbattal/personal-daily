module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("comments", {
        commentText: {
            type: Sequelize.STRING
        },
        score: {
            type: Sequelize.INTEGER
        }
    });
    return Comments;
};