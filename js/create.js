const form = document.querySelector('form')

const createPost = async (event) => {
    event.preventDefault();

    const newPost = {
        title: form.title.value,
        body: form.body.value,
        likes: 0
    }

    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {'Content-type': 'application/json'}
    })

    window.location.replace('/index.html')
}

form.addEventListener('submit',createPost)