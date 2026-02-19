// Shows the filter checkboxes, hides the add form
function showFilter() {
    document.getElementById('filterContent').style.display = 'block';
    document.getElementById('newContent').style.display = 'none';
}

// Shows the add form, hides the filter checkboxes
function showAddNew() {
    document.getElementById('newContent').style.display = 'flex';
    document.getElementById('filterContent').style.display = 'none';
}

// Hides or shows articles based on checkboxes
function filterArticles() {
    const isOpinionChecked = document.getElementById('opinionCheckbox').checked;
    const isRecipeChecked = document.getElementById('recipeCheckbox').checked;
    const isUpdateChecked = document.getElementById('updateCheckbox').checked;

    const articles = document.querySelectorAll('#articleList article');

    articles.forEach(article => {
        if (article.classList.contains('opinion')) {
            article.style.display = isOpinionChecked ? 'block' : 'none';
        } else if (article.classList.contains('recipe')) {
            article.style.display = isRecipeChecked ? 'block' : 'none';
        } else if (article.classList.contains('update')) {
            article.style.display = isUpdateChecked ? 'block' : 'none';
        }
    });
}

// Grabs input and creates a new article element
function addNewArticle() {
    const title = document.getElementById('inputHeader').value;
    const text = document.getElementById('inputArticle').value;
    const list = document.getElementById('articleList');
    
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

    if (title && text && className) {
        const art = document.createElement('article');
        art.className = className;
        art.innerHTML = `
            <span class="marker">${type}</span>
            <h2>${title}</h2>
            <p>${text}</p>
            <p><a href="moreDetails.html">Read more...</a></p>`;
        list.appendChild(art);
        document.getElementById('newContent').reset();
    }
}
