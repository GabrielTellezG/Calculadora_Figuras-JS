function calcularTriangulo(){
	var base = document.getElementById("base").value;
	var altura = document.getElementById("altura").value;
	var area = (base * altura)/2;

	alert("El area es: " + area);
	alert("El perimetro es: " + base*3);

}

function calcularRectangulo(){
	var baseR = document.getElementById("baseR").value;
	var alturaR = document.getElementById("alturaR").value;
	var area = baseR * alturaR;
	var perimetro = 2*(Number(baseR) + Number(alturaR));

	alert("El area es: " + area);
	alert("El perimetro es: " + perimetro);

}

function calcularCuadrado(){
	var lado = document.getElementById("lado").value;
	var area = lado*lado;
	var perimetro = lado * 4;


	alert("El area es: " + area);
	alert("El perimetro es: " + perimetro);
}

function calcularCirculo(){
	var radio = document.getElementById("radio").value;
	var area = (3.1416) * (radio*radio);
	var perimetro = 2 * (3.1416) * radio;


	alert("El area es: " + area);
	alert("El perimetro es: " + perimetro);
}

function calcularPentagono(){
	var ladoP = document.getElementById("ladoP").value;
	var apotema = document.getElementById("apotema").value;
	var perimetro = 5 * ladoP;
	var area = (perimetro * apotema)/2;


	alert("El area es: " + area);
	alert("El perimetro es: " + perimetro);
}

function calcularCono(){
	var radioC = document.getElementById("radioC").value;
	var generatriz = document.getElementById("generatriz").value;
	var volumenC = (3.1416 * radioC * radioC * generatriz)/3;

	alert("El volumen del cono es: " + volumenC);
}

function calcularCubo(){
	var ladoCubo = document.getElementById("ladoCubo").value;
	var volumenCubo = (ladoCubo * ladoCubo * ladoCubo);

	alert("El volumen del Cubo es: " + volumenCubo);
}

function calcularCilindro(){
	var radioCilindro = document.getElementById("radioCilindro").value;
	var alturaCilindro = document.getElementById("alturaCilindro").value;
	var volumenCilindro = 3.1416 * alturaCilindro * (radioCilindro * radioCilindro);

	alert("El volumen del Cubo es: " + volumenCilindro);
}