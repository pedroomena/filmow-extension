btn_order = $('<button></button>', {id: 'btn_order', class: 'btn btn-primary list-header', text: 'Ordenar por nota'})
btn_order.insertAfter('.lists-order-select');


function get_average_rating(el) {
	return parseFloat($('.movie-rating-average', $(el.children[0])).text());
}


function get_comments_quantity(el) {
	el = $('.badge.badge-num-comments.tip', $(el.children[0]));
	title = el.attr('data-original-title');
	title = title ? title : el.attr('title');
	return parseInt(title.split(' ')[0]);
}


$('#btn_order').click(function() {
	$(this).attr('disabled', true);
	lista = $('ol.list_movies_list');
	filmes = lista.children('li');

	filmes.sort(function(a, b) {
	    var an = get_average_rating(a);
	        bn = get_average_rating(b);

	    if(an == bn) {
	    	an = get_comments_quantity(a);
	    	bn = get_comments_quantity(b);
	    }

	    if(an > bn) {
	        return -1;
	    }
	    else if(an < bn) {
	        return 1;
	    }
	    return 0;
	});

	filmes.detach().appendTo(lista);
	$(this).removeAttr('disabled');
});