// Function to show the Filter form and hide the Add New form
function showFilter() {
    document.getElementById('filterContent').style.display = 'block';
    document.getElementById('newContent').style.display = 'none';
}

// Function to show the Add New form and hide the Filter form
function showAddNew() {
    document.getElementById('newContent').style.display = 'flex';
    document.getElementById('filterContent').style.display = 'none';
}

// Function to filter articles based on checkbox status
function filterArticles() {
    // Get checkbox states
    const showOpinion = document.getElementById('opinionCheckbox').checked;
    const showRecipe = document.getElementById('recipeCheckbox').checked;
    const showUpdate = document.getElementById('updateCheckbox').checked;

    // Select all articles within the list
    const articles = document.querySelectorAll('#articleList article');

    articles.forEach(article => {
        // Toggle visibility based on the class assigned to the article
        if (article.classList.contains('opinion')) {
            article.style.display = showOpinion ? 'block' : 'none';
        } else if (article.classList.contains('recipe')) {
            article.style.display = showRecipe ? 'block' : 'none';
        } else if (article.classList.contains('update')) {
            article.style.display = showUpdate ? 'block' : 'none';
        }
    });
}

// Function to add a new article from the form input
function addNewArticle() {
    const title = document.getElementById('inputHeader').value;
    const text = document.getElementById('inputArticle').value;
    const articleList = document.getElementById('articleList');
    
    // Check which radio button is selected
    let typeLabel = '';
    let className = '';

    if (document.getElementById('opinionRadio').checked) {
        typeLabel = 'Opinion';
        className = 'opinion';
    } else if (document.getElementById('recipeRadio').checked) {
        typeLabel = 'Recipe';
        className = 'recipe';
    } else if (document.getElementById('lifeRadio').checked) {
        typeLabel = 'Update';
        className = 'update';
    }

    // Basic validation to ensure fields aren't empty
    if (title && text && className) {
        const newArticle = document.createElement('article');
        newArticle.className = className;
        
        // Structure matches the existing articles in the HTML
        newArticle.innerHTML = `
            <span class="marker">${typeLabel}</span>
            <h2>${title}</h2>
            <p>${text}</p>
            <p><a href="moreDetails.html">Read more...</a></p>
        `;

        articleList.appendChild(newArticle);
        
        // Reset the form fields
        document.getElementById('newContent').reset();
        
        // Re-run filter to make sure the new article obeys current checkbox settings
        filterArticles();
    }
}
