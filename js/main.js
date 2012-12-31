jQuery(document).ready(function() {
	$("header form button ").click(function(){
		var salario =parseFloat($("#salariobruto").val());
		
		if (salario<=1174.86) {
		var salarioINSS = parseFloat($("#discountINSS").val(salario-=salario*0.08+""))
	}
		else if(salario>1174.86 & salario<=1958.10){
		var salarioINSS = parseFloat($("#discountINSS").val(salario-=salario*0.09+""))
	}
		else{
		var salarioINSS = parseFloat($("#discountINSS").val(salario-=salario*0.11+""))	
	}
		if (salarioINSS<=1697.11) {
		var salarioIR = parseFloat($("#discountIR").val(salarioINSS+""));
	}

    });
});