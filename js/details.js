const id = new URLSearchParams(window.location.search).get('id')

async function renderDetails() {
    const container = document.querySelector('.details')
    const response = await fetch('http://localhost:3000/posts/' + id);
    const post = await response.json();

    const template = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        <button>Delete Post</button>
        <button>Edit Post</button>
    `

    container.innerHTML = template
}

window.addEventListener('DOMContentLoaded', renderDetails)