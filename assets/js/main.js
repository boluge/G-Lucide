jQuery(document).ready(function () {


//	SlidePanel du haut
	jQuery('nav#top-left').mmenu({
		position: 'left',
		counters: true
	});
	jQuery('nav#top-right').mmenu({
		position: 'right',
		counters: true
	});

	jQuery.getJSON( "assets/json/aliments.json", function(data) {
		categorie ="<select>";
		for (var i in data.Categories) {
            categorie+="<option value='" + data.Categories[i].id + "'>" + data.Categories[i].categorie + "</option>";
        }
        categorie +="</select>";
       	jQuery('nav#top-left form.custom').html(categorie);
	});


	jQuery(document).foundation();
});