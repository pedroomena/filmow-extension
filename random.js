const HIGHLIGHT_CLASS = 'movie-highlight'
const HIGHLIGHT_CLASS_SELECTOR = '.' + HIGHLIGHT_CLASS

btn_random = $('<button></button>', {id: 'btn_random', class: 'btn btn-primary list-header', text: 'Filme aleatório'});
btn_random.insertAfter('.lists-order-select');

btn_new_random = $('<button></button>', {id: 'btn_new_random', class: 'btn btn-info btn-new-random', text: 'Outro', onclick: '$("#btn_random").click();'});

chosen_list = [];

rngGenerator = Random(Random.engines.mt19937().autoSeed());

function getRandomInt(min, max) {
	return rngGenerator.integer(min, max);
}

function goToByScroll(element) {
    $('html,body').animate({
        scrollTop: element.offset().top - 100
    }, 'slow');
}

$('#btn_random').click(function() {
	filmes = get_movies();

	if(chosen_list.length == filmes.length) {
		chosen_list = [];
	}

	filmes.filter(HIGHLIGHT_CLASS_SELECTOR).removeClass(HIGHLIGHT_CLASS);
	$('.btn-new-random').remove();

	do {
		rnd = getRandomInt(0, filmes.length - 1);
	} while(chosen_list.indexOf(rnd) != -1);

	$(filmes[rnd]).addClass(HIGHLIGHT_CLASS);
	$(filmes[rnd]).append(btn_new_random);
	goToByScroll($(filmes[rnd]));
	chosen_list.push(rnd);
});