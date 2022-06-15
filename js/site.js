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


/*JQuery*/
function agregarNombre(nombre){    
    $("#usuario").html(nombre);
}

function alertNombre(){
    let nombreDiv = $("#usuario").html();
    alert(nombreDiv);
}

$("#enviar").click(
    function(){
        let nombre = $("#nombre").val();
        let apellido = $("#apellido").val();
        if(nombre != "" && apellido != "")
        {
            $("#usuario").html("Nombre: "+ nombre+" Apellido: "+apellido);
        } 
});


function ajaxCallJquery(){
    $.ajax({
        url : "https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&appid=7f8bed04850e4770e28039b7fe4e424c",
        type: "GET",
        success: function(data){
            let result = JSON.stringify(data);
            console.log(result);
        },
        error : function(err){
            console.log("Error: "+ error);
        }
    })
}

function ajaxCallJs(){
    let xhr = new XMLHttpRequest();
    let url = "https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&appid=7f8bed04850e4770e28039b7fe4e424c";

    xhr.open("GET",url,true);

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
        }
        else{
            console.log("Error: "+this.status);
        }
    }
    xhr.send();
}

ajaxCallJs();
//ajaxCall();

//crear Modal
//Inicializo el modal
dialog = $("#dialog-form" ).dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
    //Aca se argega el boton en el pie del modal. Para este ejemplo no lo utlizaremos pero igual lo estoy mostrando. (Le agregué un jquery para argegar style)
    //El "addUser" es la funcion que ejecutá cuando le haga click y al cancelar ce cerrará el modal
      "Crear Usurio": addUser,
      Cancel: function() {
        dialog.dialog( "close" );
      }
    }
  });

//Boton que abre el modal
$("#crear").button().on( "click", function() {
    dialog.dialog( "open" );
  });

//Ejemplo de agregar estilo con Jquery
function addUser(){
    alert("No tienen funcion este boton");  
    $('#dialog-form').css('background', 'blue');  
    //con esta codigo $("#dialog-form").addClass("rojo"); se puede agregar una clase de css previamente hecha en lugar de un estilo
}
//* y css
//$("#dialog-form").css("display:none");
//agregarNombre("Ignacio");
//alertNombre();


//document.getElementById("usuario").innerHTML = nombreUsuario("Ignacio","Administrador");
//document.getElementById("ulejemplo").innerHTML = itensLista("Francisco");
 //alert(operacion(10,0,"/"));
// retorno(x);