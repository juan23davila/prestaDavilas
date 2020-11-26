var lodash = require('lodash');

//Invierte arreglo
var arregloCualquiera = ["quiero", "comer", "hamburguesa"];
console.log(lodash.reverse(arregloCualquiera));

//Convertir letras en mayuscula
var minusculas = "prestadavilas";
console.log(lodash.toUpper(minusculas));

//menor valor de array
var valores = [10,22,56];
console.log(lodash.min(valores));
//mayor valor
console.log(lodash.max(valores));

//Reemplazar palabra frutas por pizza
var oracion = "Me encanta comer frutas";
console.log(lodash.replace(oracion, "frutas", "pizza"));



/**
 * Actividad
 */
app.get('/palabras', function(req, res){
    var palabra = req.query.palabra;
    var numero = req.query.numero;
    var respuesta = [];
    for (let index = 0; index < numero; index++) {
        respuesta.push(palabra);
    }
    res.send(respuesta);
});

var comidas = ["Carne", "Pollo", "Fideos", "Pizza", "Haburguesa", "Helado", "Pescado", "Ensalada"];

app.get('/comidas/:numero', function(req, res){
    var numero = req.params.numero;
    if(!comidas[numero]){
        res.send("No existe comida");
    }else{
        res.send(comidas[numero]);
    }
});

/**
 * Fin de actividad
 */ 