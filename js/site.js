var x = [
    {
        periodo: "Enero",
        ingresos: 1500,
        egresos: 1500
    },
    {
        periodo: "Febrero",
        ingresos: 2500,
        egresos: 2500
    },
    {
        periodo: "Marzo",
        ingresos: 84683,
        egresos: 1155
    },
    {
        periodo: "Abril",
        ingresos: 135353,
        egresos: 1533
    },
    {
        periodo: "Mayo",
        ingresos: 1535,
        egresos: 5434
    },
    {
        periodo: "Junio",
        ingresos: 4343354,
        egresos: 5434534
    },
    {
        periodo: "Julio",
        ingresos: 435453,
        egresos: 4543
    },
    {
        periodo: "Agosto",
        ingresos: 78351,
        egresos: 7816
    },
    {
        periodo: "Septiembre",
        ingresos: 1878,
        egresos: 95634
    },
    {
        periodo: "Octubre",
        ingresos: 48483,
        egresos: 9433
    },
    {
        periodo: "Noviembre",
        ingresos: 35483,
        egresos: 53133
    },
    {
        periodo: "Diciembre",
        ingresos: 3843,
        egresos: 348133
    },
];


 function retorno(FlujoDeCaja){
    var resultado = 0;    
    for (let i = 0; i < FlujoDeCaja.length; i++) {    

       resultado = FlujoDeCaja[i].ingresos - FlujoDeCaja[i].egresos;

        if(resultado > 0){
            document.writeln("Para el mes "+ FlujoDeCaja[i].periodo + " 1");
        }
        else if(resultado < 0){
            document.writeln("Para el mes "+ FlujoDeCaja[i].periodo + " -1");
        }
        else{
            document.writeln("Para el mes "+ FlujoDeCaja[i].periodo + " 0");
        }
        
    }
 }

 const suma = (a,b) =>{
    return a+b;
 }

 const operacion = (n1,n2,operacion) => {
    let resultado = 0;
    switch (operacion) {
        case "*":
            resultado = n1 * n2;
            break;
        case "+":
            resultado = n1 + n2;    
            break;
        case "-":
            resultado = n1 -n2;
            break;
        case "/":
            if(n2 != 0){
                resultado = n1 / n2;
            }                
            break;
        default:
            resultado = 0;
            break;
    }
    return resultado;
    
 }

function itensLista(nombre){
    return "<li>" + nombre +"</li>";
}

const itensListaFlecha = (nombre) => '<li>' + nombre +'</li>';

const nombreUsuario = (nombre,tipo) => nombre + " es: "+tipo;

document.getElementById("usuario").innerHTML = nombreUsuario("Ignacio","Administrador");

//document.getElementById("ulejemplo").innerHTML = itensLista("Francisco");
 //alert(operacion(10,0,"/"));
// retorno(x);