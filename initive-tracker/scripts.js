// Skip to main content
const mainContent = document.querySelector('#main-content');
mainContent.innerHTML = articles.map(renderArticles).join('');