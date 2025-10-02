// Fetch blog posts and insert them into the page
fetch("posts.json")
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById("blog-container");

    posts.forEach(post => {
      const article = document.createElement("article");
      article.innerHTML = `
        <h3>${post.title}</h3>
        <small>${post.summary}</small>
        <p>${post.content}</p>
        <hr>
      `;
      container.appendChild(article);
    });
  })
  .catch(error => console.error("Error loading blog posts:", error));
