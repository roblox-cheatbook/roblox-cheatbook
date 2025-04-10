var nagbar = document.createElement('div');
nagbar.id = 'nagbar';
nagbar.className = 'nagbar content';
var p1 = document.createElement('p');
p1.appendChild(document.createTextNode(' If you like this book, please donate to support me!'));
p1.insertAdjacentHTML('afterbegin', '<a href="https://github.com/sponsors/grilme99"><button class="ghsponsors-button-small">GitHub Sponsors</button></a>');
nagbar.appendChild(p1);
document.getElementById('page-wrapper').appendChild(nagbar);
