const myLib = {
    getCommentsFor(url, callback) {
        console.log('get', url)
        window.$.get(url, callback);
    }
}

export default  myLib