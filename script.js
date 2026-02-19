// Toggle between showing the Filter menu and Add New form
function showFilter() {
    document.getElementById('filterContent').style.display = 'block';
    document.getElementById('newContent').style.display = 'none';
}

function showAddNew() {
    document.getElementById('newContent').style.display = 'flex';
    document.getElementById('filterContent').style.display = 'none';
}

// Filter articles based on checkbox status
function filterArticles() {
    const showOpinion = document.getElementById('opinionCheckbox').checked;
    const showRecipe = document.getElementById('recipeCheckbox').checked;
    const showUpdate = document.getElementById('updateCheckbox').checked;

    const articles = document.querySelectorAll('#articleList article');

    articles.forEach(article => {
        if (article.classList.contains('opinion')) {
            article.style.display = showOpinion ? 'block' : 'none';
        } else if (article.classList.contains('recipe')) {
            article.style.display = showRecipe ? 'block' : 'none';
        } else if (article.classList.contains('update')) {
            article.style.display = showUpdate ? 'block' : 'none';
        }
    });
}

// Add a new article dynamically to the list
function addNewArticle() {
    const title = document.getElementById('inputHeader').value;
    const text = document.getElementById('inputArticle').value;
    const articleList = document.getElementById('articleList');
    
    // Determine which radio button is selected
    let type = '';
    let className = '';
    
    if (document.getElementById('opinionRadio').checked) {
        type = 'Opinion';
        className = 'opinion';
    } else if (document.getElementById('recipeRadio').checked) {
        type = 'Recipe';
        className = 'recipe';
    } else if (document.getElementById('lifeRadio').checked) {
        type = 'Update';
        className = 'update';
    }

    if (title && text && type) {
        // Create the new article element
        const newArticle = document.createElement('article');
        newArticle.className = className;
        
        newArticle.innerHTML = `
            <span class="marker">${type}</span>
            <h2>${title}</h2>
            <p>${text}</p>
            <p><a href="moreDetails.html">Read more...</a></p>
        `;

        articleList.appendChild(newArticle);
        
        // Clear the form after adding
        document.getElementById('newContent').reset();
        // Trigger filter to ensure it respects current visibility settings
        filterArticles();
    } else {
        alert("Please fill out all fields and select a type.");
    }
}
