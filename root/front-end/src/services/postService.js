import axios from "axios";

const API_URL = "http://localhost:8080/api/";

class postService {
    saveImage(source, posted_date, average_score) {
        return axios
            .post(API_URL + "images", {
                source,
                posted_date,
                average_score
            })
            .then(response => {
                if (response.data.message) {
                    return response.data.message;
                }

            });
    }

    saveComment(comment_text, score, image_id, user_id) {
        return axios
            .post(API_URL + "comments", {
                comment_text,
                score,
                image_id,
                user_id
            })
            .then(response => {
                if (response.data.message) {
                    return response.data.message;
                }

            });
    }

    findAll() {
        return axios.get(API_URL + "images/all")
        .then(response => {
            if (response.data.imageArray) {
                return response.data.imageArray;
            }
        })
    }

    findCommentsByImageId(image_id) {
        const path = "comments/" + image_id;
        return axios.get(API_URL + path)
        .then(response => {
            if (response) {
                return response
            }
        })
    }

    findImageByDate(date) {
        const path = "images/" + date;
        console.log(path)
        return axios.get(API_URL + path)
        .then(response => {
            if (response) {
                return response
            }
        })
    }

}

export default new postService();