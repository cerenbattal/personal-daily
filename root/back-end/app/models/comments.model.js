module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("comments", {
        comment_text: {
            type: Sequelize.STRING
        },
        score: {
            type: Sequelize.INTEGER
        },
        user_id: {
            type: Sequelize.INTEGER
        },
        image_id: {
            type: Sequelize.INTEGER
        }

    }, {
        timestamps: false
    });
    return Comments;
};