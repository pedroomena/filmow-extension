SEARCH_URL = 'https://letterboxd.com/search/'
original_title = $('h2.movie-original-title').text();

function get_search_url(title) {
	return `${SEARCH_URL}${title}/`;
}

if(original_title) {
	a_tag = $('<a></a>', {href: get_search_url(original_title), target: '_blank', class: 'btn btn-primary', html: 'Procurar no Letterboxd'});
	div = $('<div></div>', {class: 'row movie-user-actions', style: 'margin-left: 0'});
	div.insertAfter('.row.movie-user-actions');
	div.append(a_tag);
}