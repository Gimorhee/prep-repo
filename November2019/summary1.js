// Async programming improves application performance and responsiveness.

const posts = [
    {title: 'Post One', body: 'Body One'},
    {title: 'Post Two', body: 'Body Two'}
];

const newPost = {title: 'Post Three', body: 'Body Three'};


// printPosts() takes 2 seconds to load posts
function printPosts() {
    // Used setTimeout to mimic
    setTimeout(() => {
        console.log(posts);
    }, 2000);
}
// printPosts();


// addPost() takes 3 seconds to add new post into posts array
function addPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 3000);
}
// addPost(newPost);

// Since it takes 3s to add post into posts array, newPost will never be printed,
// To make above functions async we could approach with 3 different ways


// 1. Callback
function addPostCallBack(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 3000);
}
// addPostCallBack(newPost, printPosts);


// 2. Promises
function addPostPromises(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(post) {
                posts.push(post);
                resolve();
            } else {
                reject('Error!');
            }
        }, 3000);
    });
}
// addPostPromises(newPost)
// .then(printPosts)
// .catch(console.log)


// 3. Async + Await
async function addAndPrintPosts() {
    try {
        await addPostPromises(newPost);

        printPosts();
    } catch (err) {
        console.error(err);
    }
}
// addAndPrintPosts();
