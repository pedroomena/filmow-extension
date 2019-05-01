const MOVIES_PER_PAGE = 36
const TOTAL_MOVIES_COUNT = $('.progress_text').children('strong')[1].textContent

btn_load = $('.btn-lists-infinite-scroll');

if(btn_load.length) {
	btn_load_all = $('<button></button>', {id: 'btn_show_all', class: 'btn btn-primary list-header', text: 'Carregar todos'})
	btn_load_all.insertAfter('.lists-order-select');

	$('#btn_show_all').click(function() {
		$(this).attr('disabled', true);
		current_movies_count = get_movies().length;
		counter = parseInt(current_movies_count / MOVIES_PER_PAGE)

		btn_load_all.text(`Carregando... ${current_movies_count}/${TOTAL_MOVIES_COUNT}`)
    	btn_load.click();
    	++counter;

		let intervalId = setInterval(function() {
		    if(btn_load.is(':disabled')){
		    	if(btn_load.text() != "Carregando...") {
		    		btn_load_all.text(`Carregado ${TOTAL_MOVIES_COUNT}/${TOTAL_MOVIES_COUNT}`);
		    		clearInterval(intervalId);
		    	}
		    }
		    else {
		    	btn_load_all.text(`Carregando... ${MOVIES_PER_PAGE*counter}/${TOTAL_MOVIES_COUNT}`)
		    	btn_load.click();
		    	++counter;
		    }
		}, 1500);
	});
}