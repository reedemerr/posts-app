const sessionStorage = window.sessionStorage;
const allComments = retrieveCommentsFromSS();

function saveComments(postId, newComments) {
    allComments[postId] = [...allComments[postId] || [], ...newComments];

    sessionStorage.setItem('comments', JSON.stringify(allComments));
}

function getComments(postId, start, limit) {
    return new Promise((resolve, reject) => {
        if (!allComments[postId]) {
            reject();
        }

        const filteredComments = filterComments(allComments[postId], start, limit);

        if (filteredComments.length === 0) {
            reject();
        }

        resolve(filteredComments);
    });
}

function filterComments(comments, start, limit) {
    return comments.filter((comment, index) => start <= index && index < limit);
}

function retrieveCommentsFromSS() {
    if (!sessionStorage || !sessionStorage.comments) {
        return {};
    }

    try {
        return JSON.parse(sessionStorage.comments);
    } catch (e) {
        return {};
    }
}

export default {
    saveComments,
    getComments
};
