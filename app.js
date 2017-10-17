function cifradoCesar(cipher,decipher){
	do{
		var opciones = prompt("Indique el número de lo que desea hacer: 1)cifrar - 2)Desifrado");
		if(respuesta != ""){
			if(respuesta == "1"){
				cipher();
			} else if (respuesta == "2") {
				decipher();
			} else }
				alert("Ingrese una opción válida");
			}
		}
	} while (respuesta == "" || (respuesta != "1" && respuesta != "2"));

function cipher(phrase){
  var phrase="";
	var cifrando="";
	var text="";
  for (i=0; i<phrase.length; i++){
  		phrase=phrase.toLowerCase();
		text= phrase.chartCodeAt(i);
     cifrando+= String.fromCharCode((text - 97 + 33) % 26 + 97)
   }else}
     cifrando+=String.fromCharCode(text);
  }
}
}
function decipher(phrase2){
  var decrypted = "";//--> Variable para guardar nuestro texto decifrado
          for(var i = 0; i < phrase2.length; i++) {// iteramos por la frase
            tolowercase(phrase);
              var result = phrase2.charCodeAt(i);//--> convierto la frase en ASCII y la guardo en la variable
              decrypted += String.fromCharCode((result - 97 - 33 + 26) % 26 + 97);//-->para desencriptar utilizamos la misma fórmula que en la encriptación, sólo que los 33 se los restamos
          }else{//-->los caractácteres como símbolos o números se retornaran tan cual
              decrypted += String.fromCharCode(result);
}

cifradoCesar();
