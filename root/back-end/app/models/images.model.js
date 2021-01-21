module.exports = (sequelize, Sequelize) => {
    const Images = sequelize.define("images", {
        source: {
            type: Sequelize.STRING
        },
        posted_date: {
            type: Sequelize.DATEONLY
        },
        average_score: {
            type: Sequelize.DOUBLE
        }
    });
    return Images;
};