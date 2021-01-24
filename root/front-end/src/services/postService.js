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
                    console.log(response.message);
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

    register(username, email, password) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new postService();