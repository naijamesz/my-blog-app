import { getPosts } from './services/api.js';

async function renderPosts() {
    const posts = await getPosts();
    const app = document.getElementById('app');
    app.innerHTML = `
        <h1>Blog Posts</h1>
        <ul>
            ${posts.map(post => `<li>${post.title}</li>`).join('')}
        </ul>
    `;
}



// Simulated routing system
function router(){
  const routes = {
    '/': '<h1>Home Page</h1>',
    '/posts': '<h1>Posts Page</h1>'
  };

  const path = window.location.pathname;
  const app = document.getElementById('app');
  app.innerHTML = routes[path] || '<h1>404 - Not Found</h1>';
}

window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', ()=>{
  document.body.addEventListener('click' , (e) => {
    
    if(e.target.matches('a')){
      e.preventDefault();
      const url = e.target.getAttribute('href');
      window.history.pushState({}, '', url);
      router();
    }
  });
  router();
});


renderPosts();