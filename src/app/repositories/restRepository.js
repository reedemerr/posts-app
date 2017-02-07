import axios from 'axios';
import sessionStorageRepository from '../repositories/sessionStorageRepository';

function getPosts(start, limit) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`)
        .then(transformPostResponse)
        .catch(() => []);
}

function getComments(postId, start, limit) {
    return sessionStorageRepository.getComments(postId, start, limit)
        .catch(() => (getCommentsFromApi(postId, start, limit)))
        .then(comments => transformCommentsResponse(postId, comments));
}

function getUser(userId) {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.data)
        .catch(() => {});
}

function getCommentsFromApi(postId, start, limit) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_start=${start}&_limit=${limit}`)
        .then((response) => {
            sessionStorageRepository.saveComments(postId, response.data);
            return response.data;
        })
        .catch(() => ({ comments: [] }));
}

function transformPostResponse(response) {
    return response.data.map(post => ({ ...post,
        comments: []
    }));
}

function transformCommentsResponse(postId, comments) {
    return {
        postId,
        comments
    };
}

export default {
    getPosts,
    getComments,
    getUser
};
