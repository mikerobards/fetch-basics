async function getPosts() {
    const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await postsPromise.json()
    // console.log(posts)
    let html = ""
    for (let i = 0; i < 5; i++) {
        // posts.slice(0,5).forEach( post => {
        const title = posts[i].title
        const body = posts[i].body
        html += `
            <div class='post'>
                <h3>${title}</h3>
                <p>${body}</p>
            </div>
        `
        document.body.innerHTML = html
    }
}

getPosts()