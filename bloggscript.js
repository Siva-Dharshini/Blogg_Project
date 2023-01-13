const posts =JSON.parse(localStorage.getItem("posts"))
const postNumber =localStorage.getItem("postNumber")
const post=posts[Number(postNumber)]
console.log(post)

const container=document.getElementById("container-post")
const postHtml=`
    <h1> ${post.title}</h1>
    <p>${post.description}</p>
    <img src="${post.imageLink}">
    `
const div=document.createElement("div")
div.innerHTML=postHtml
container.appendChild(div)