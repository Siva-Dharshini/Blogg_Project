const createBlogCard = (title, date, description,idx) => {
  return `
        <div class="card col" style="font-size: 12px; border: none;"> 
            <p class="text-sm" style="color: rgb(128, 128, 128);">${date.toString()}</p>
            <h3 style="font-size: 16px;">${title}</h3>
            <p>${description}</p>

            <button index="${idx}" id="read-more" href="./blogg.html" class="text-primary" href="" style="text-decoration: none;">Read More</button>

        </div>
    `;
};



const posts = JSON.parse(localStorage.getItem("posts"));

posts.forEach((post,i) => {
  const postHtml = createBlogCard(post.title, new Date(), post.description,i);
  const postsContainer = document.getElementById("blog-tile-container");
  const postDiv = document.createElement("div");
  postDiv.innerHTML = postHtml;

  postsContainer.appendChild(postDiv);
});

const readMorelinks=document.querySelectorAll("#read-more")
console.log(readMorelinks)
readMorelinks.forEach((link) =>
link.onclick=()=>{
  const index=link.getAttribute("index")
  localStorage.setItem("postNumber",index)

location.href="./blogg.html"
})