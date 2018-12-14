
(function ($) {

	var men_input = $('.validate-input .men-input');
	var women_input = $('.validate-input .women-input');

	var weight_unit_array = {
		'µg':4535927370,
		'mg':453592.37,
		'g':453.59237,
		'dag':45.359237,
		'kg':0.45359237,
		't':0.0004535924,
		'gr':7000,
		'dr':256,
		'oz':16,
		'lb':1,
		'stone':0.0714286,
		'US ton':0.0005,
		'Long ton':0.000446429,
		'Earths':7.590233768E-26,
		'me':497939698128157422761985444381,
		'u':273159675507180000000000000,
		'oz t':14.58333
	};

	var height_unit_array = {
		'mm':25.4,
		'cm':2.54,
		'm':0.0254,
		'km':0.0000254,
		'in':1,
		'ft':0.0833333,
		'yd':0.0277778,
		'mi':0.00001578283,
		'nmi':0.0000137149
	};


	function men_body_fat(weight, weight_unit, waist, height_unit) {
		var calc_wei = weight/weight_unit;
		var calc_wai = waist/height_unit;
		// console.log(calc_wei);
		// console.log(calc_wai);
		// console.log(waist);
		// console.log(height_unit);
		var result = 0;
		result = 100*(calc_wei-((calc_wei*1.082)+94.42-calc_wai*4.15))/calc_wei;
		// console.log(result);
		return result;
	}

	function women_body_fat(weight, weight_unit, waist, forearm, wrist, hip, height_unit, for_unit, wri_unit, hip_unit) {
	 	var calc_wei = weight/weight_unit;
		var calc_wai = waist/height_unit;
		var calc_wri = wrist/wri_unit;
		var calc_hip = hip/hip_unit;
		var calc_for = forearm/for_unit;
		var result = 0;
		result = 100*(calc_wei-((calc_wei*0.732)+8.987+calc_wri/3.140-calc_wai*0.157- calc_hip*0.249+calc_for*0.434))/calc_wei;
		return result;
	}

	function is_filled_men() {
		if($('#weight').val() == '') return false;
		if($('#waist').val() == '') return false;
		return true;
	}

	function is_filled_women() {
		if($('#forearm').val() == '') return false;
		if($('#wrist').val() == '') return false;
		if($('#hip').val() == '') return false;
		return true;
	}

	$(men_input).keyup(function() {

			var result = men_body_fat(parseFloat($('#weight').val()), weight_unit_array[$('#weight-unit-id option:selected').text()], parseFloat($('#waist').val()), height_unit_array[$('#waist-unit-id option:selected').text()]);
			
			if(is_filled_men()) {
				$('#body-fat-men').val(result.toFixed(2));
			}
	});

	$(women_input).keyup(function() {

			if(is_filled_men() && is_filled_women()) {

				var result = women_body_fat(parseFloat($('#weight').val()), weight_unit_array[$('#weight-unit-id option:selected').text()], parseFloat($('#waist').val()), parseFloat($('#forearm').val()),parseFloat($('#wrist').val()),parseFloat($('#hip').val()), height_unit_array[$('#waist-unit-id option:selected').text()], height_unit_array[$('#forearm-unit-id option:selected').text()], height_unit_array[$('#wrist-unit-id option:selected').text()], height_unit_array[$('#hip-unit-id option:selected').text()]);
				$('#body-fat-women').val(result.toFixed(2));
			}
	});

	// $(men_input).change(function (e) {
	// 	console.log('here');
	// 	var is_filled = true;
	// 	$(men_input).each(function () {
	// 		if($(this).val() == '') {
	// 			is_filled = false;
	// 			return;
	// 		}
	// 	});
	// 	if(is_filled) {
	// 		var result = men_body_fat(parseFloat($('#weight').val()), weight_unit_array[$('#weight-unit-id').text()], parseFloat($('#waist').val()), height_unit_array[$('#waist-unit-id').text()]);
	// 		$('#result-men').val(result);
	// 	}
	// });
})(jQuery);

