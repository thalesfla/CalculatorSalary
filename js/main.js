jQuery(document).ready(function() {
	$("header fieldset #botao").click(function(){
		var salario = $("#salariobruto").val();
		var salarioINSS = $("#discountINSS").val(salario+"")
		alert(salarioINSS);
	});
});
