(function( $ ) {
	'use strict';

	
	//Document is ready for some JS magic!
	$(document).ready(function(){
		$('.beautiful-taxonomy-filters-select').select2({
			allowClear: true,
			minimumResultsForSearch: -1,
			formatSelection: function(object, container) {

				// reset
				container.parent().removeClass();
				
				//re-add default classes for this element
				container.parent().addClass("select2-choice");

				// make the closed box take the selected option color
				container.parent().addClass(object.css);

				return object.text;

			}
		});

		$('.beautiful-taxonomy-filters-select').on('select2-clearing', function(e) { 
			
			var $selected = $(this).parent().find('.select2-choice')
			$selected.removeClass();
				
			//re-add default classes for this element
			$selected.addClass("select2-choice");

		});

	});


})( jQuery );