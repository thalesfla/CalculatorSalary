jQuery(document).ready(function() {
	$("header fieldset #botao").click(function(){
		var salario = $("#salariobruto").val();
		var salarioINSS = $("#discountINSS").val(salario+"");
		if (salario=="") {
			salario=0;
		if (salarioINSS=="") {
			salarioINSS=0;
		};
		};
	});
});
