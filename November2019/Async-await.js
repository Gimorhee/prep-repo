// Way of handling responses + cleaner way of dealing with promises.
// Async, await is pretty much syntactical sugar wrapped around making promises easier to work with

function makeRequest(name) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${name}`);

        if(name === 'Google') {
            resolve('Google says Hi!');
        } else {
            reject('We can only talk to Google');
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');

        resolve(`Extra Information + ${response}`);
    });
}

// Using Promises
makeRequest('Google').then(response => {
    console.log('Response Received');

    return processRequest(response);
}).then(processedResponse => {
    console.log(processedResponse);
}).catch(error => {
    console.log(error);
});

// Using Async + Await
async function init() {
    try {
        const response = await makeRequest('Google');
        console.log('Response Received');
        const processedReponse = await processRequest(response);
        console.log(processedReponse);
    } catch (err) {
        console.log(err);
    }
}
init();