const movPag = document.querySelector(".movPag");
const btn_adelante2 = document.querySelector(".sigPag")

const btn_atras1 = document.querySelector(".vol-pag1")
const btn_adelante3 = document.querySelector(".adelante-pag3")
const btn_atras2 = document.querySelector(".volve-pag2")
const btn_adelante4= document.querySelector(".adelante-pag4")
const btn_atras3 = document.querySelector(".volve-pag3")
const btn_final = document.querySelector(".fin")

const progressText=document.querySelectorAll(".paso p")
const progressCheck=document.querySelectorAll(".paso .check")
const num=document.querySelectorAll(".paso .num")



/////////////////////////////
/////////////////////////////

btn_adelante2.addEventListener("click" , function(e){
    e.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;

    if( nombre =="" && apellido == ""){
        document.getElementById("nombre-error").innerHTML = "*El campo no puede quedar vacio"
        document.getElementById("nombre").style.borderColor="#DB2A31"
        document.getElementById("apellido-error").innerHTML = "*El campo no puede quedar vacio"
        document.getElementById("apellido").style.borderColor="#DB2A31"
    }else if(( nombre == "" || apellido == "") ||  (!verificarNombre(nombre) || !verificarNombre(apellido))){

        if(apellido == ""){
            document.getElementById("apellido-error").innerHTML = "*El campo no puede quedar vacio"
            document.getElementById("apellido").style.borderColor="#DB2A31"
        }else if(!verificarNombre(apellido)){
            document.getElementById("apellido-error").innerHTML = "*Dato no valido"
            document.getElementById("apellido").style.borderColor="#DB2A31"
        }else{
            document.getElementById("nombre-error").innerHTML = ""
            document.getElementById("nombre").style.borderColor="lightgray"
        }

        if(nombre == ""){
            document.getElementById("nombre-error").innerHTML = "*El campo no puede quedar vacio"
            document.getElementById("nombre").style.borderColor="#DB2A31"
        }else if(!verificarNombre(nombre)){
            document.getElementById("nombre-error").innerHTML = "*Dato no valido"
            document.getElementById("nombre").style.borderColor="#DB2A31"
        }else{
            document.getElementById("nombre-error").innerHTML = ""
            document.getElementById("nombre").style.borderColor="lightgray"
        }     
    }else{
        document.getElementById("nombre-error").innerHTML = ""
        document.getElementById("nombre").style.borderColor="lightgray"
        document.getElementById("apellido-error").innerHTML = ""
        document.getElementById("apellido").style.borderColor="lightgray"

        movPag.style.marginLeft = "-25%";
        num[cont - 1 ].classList.add("active")
        progressText[cont - 1 ].classList.add("active")
        progressCheck[cont -1 ].classList.add("active")
        cont=+1  

        var aux = nombre + " , " + apellido;
        newUser = aux.toLowerCase();
    }

    function verificarNombre($n){
        var ExpREgular_Nombre =/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+((?:[\{1}][a-zA-ZñÑáéíóúÁÉÍÓÚ]+)+)?$/;
        return ExpREgular_Nombre.test($n)
    }
    
   /////////////////////////
   /////////////////////////

});
btn_adelante3.addEventListener("click" , function(e){
    e.preventDefault();

    var fechaNacimiento = document.querySelector('input[type="date"]').value;
    var sexo = document.getElementById("sexo").value;

    if( sexo == -1 && fechaNacimiento ==""){
        document.getElementById("fechaNacimiento-error").innerHTML = "* seleccione una fecha"
        document.getElementById("fechaNacimiento").style.borderColor="#DB2A31"
        document.getElementById("sexo-error").innerHTML = "*Seleccione un opcion"
        document.getElementById("sexo").style.borderColor="#DB2A31"

    }else if( sexo == -1 || fechaNacimiento ==""){

        if( sexo == -1 ){
            document.getElementById("sexo-error").innerHTML = "*Seleccione un opcion"
            document.getElementById("sexo").style.borderColor="#DB2A31"
        }else{
            document.getElementById("sexo-error").innerHTML = ""
            document.getElementById("sexo").style.borderColor="lightgray" 
        }

        if(fechaNacimiento =="" ){
            document.getElementById("fechaNacimiento-error").innerHTML = "* seleccione una fecha"
            document.getElementById("fechaNacimiento").style.borderColor="#DB2A31"
        }else{
            document.getElementById("fechaNacimiento-error").innerHTML = ""
            document.getElementById("fechaNacimiento").style.borderColor="lightgray" 
        }

        
        document.getElementById("fechaNacimiento-error").innerHTML = ""
        document.getElementById("fechaNacimiento").style.borderColor="lightgray"
        document.getElementById("fechaNacimiento-error").innerHTML = ""
        document.getElementById("fechaNacimiento").style.borderColor="lightgray" 

        movPag.style.marginLeft = "-50%";
        num[cont - 1 ].classList.add("active")
        progressText[cont -1 ].classList.add("active")
        progressCheck[cont -1 ].classList.add("active")
        cont=+1

    }

});





btn_adelante4.addEventListener("click" , function(e){
    e.preventDefault();

    var correo = document.getElementById("correo").value;
    var numCel = document.getElementById("numCel").value;

    if(correo =="" && numCel == ""){
        document.getElementById("mail-error").innerHTML = "*El campo no puede quedar vacio";
        document.getElementById("correo").style.borderColor="#DB2A31"
        document.getElementById("numCel-error").innerHTML = "*El campo no puede quedar vacio";
        document.getElementById("numCel").style.borderColor="#DB2A31"
    }else if(correo == "" || numCel == "" || !verificarCorreo(correo) || !verificarNumCel(numCel)){
        if(correo == ""){
            document.getElementById("mail-error").innerHTML = "*El campo no puede quedar vacio";
            document.getElementById("correo").style.borderColor="#DB2A31" 
        }else if(!verificarCorreo(correo)){
            document.getElementById("mail-error").innerHTML = "*El correo no es valido";
            document.getElementById("correo").style.borderColor="#DB2A31"
        }else{
            document.getElementById("mail-error").innerHTML = "";
            document.getElementById("correo").style.borderColor="lightgray"
        }


        if(numCel == ""){
            document.getElementById("numCel-error").innerHTML = "*El campo no puede quedar vacio";
            document.getElementById("numCel").style.borderColor="#DB2A31"
        }else if( numCel.length!=9 ){
            document.getElementById("numCel-error").innerHTML = "*deve tener 9 digitos";
            document.getElementById("numCel").style.borderColor="#DB2A31"
        }else if(!verificarNumCel(numCel)){
            document.getElementById("numCel-error").innerHTML = "*El campo no puede quedar vacio";
            document.getElementById("numCel").style.borderColor="#DB2A31"
        }else{
            document.getElementById("numCel-error").innerHTML = "";
            document.getElementById("numCel").style.borderColor="lightgray"
        }



        
    }else{
        document.getElementById("mail-error").innerHTML = "";
        document.getElementById("correo").style.borderColor="lightgray"
        document.getElementById("numCel-error").innerHTML = "";
        document.getElementById("numCel").style.borderColor="lightgray"

        movPag.style.marginLeft = "-75%";
        num[cont -1].classList.add("active");
        progressText[cont -1].classList.add("active");
        progressChek[cont -1].classList.add("active");
        cont +=1;
    }

    function verificarCorreo($n){
        var ExpREgular_Correo = /^[^]+@[^ ]+\.[a-z]{2,3}$/;
        return ExpREgular_Correo.test($n);
    }

    function verificarNumCel($n){
        var ExpREgular_Num = /^[\d]+$/;
        return ExpREgular_Num.test($n);
    }

    
});
btn_final.addEventListener("click" , function(e){
    e.preventDefault();

    var usuario= document.getElementById("usuario").value;
    var contra = document.getElementById("contra").value;

if(usuario=="" && contra==""){
    document.getElementById("usuario-error").innerHTML = "*El campo no puede quedar vacio"
    document.getElementById("usuario").innerHTML = "#DB2A31"
    document.getElementById("contra-error").innerHTML = "*El campo no puede quedar vacio"
    document.getElementById("contra").innerHTML = "#DB2A31"
}else if(usuario=="" || contra=="" ||usuario.length<2 ||contra.length<5|| !verificarUsuario(usuario) || !verificarContra(contra)){
    if(usuario == ""){
        document.getElementById("usuario-error").innerHTML = "*El campo no puede quedar vacio"
        document.getElementById("usuario").innerHTML = "#DB2A31"
    }else if(usuario.length<2){
        document.getElementById("usuario-error").innerHTML = "* Deve tener 3 o mas caracteres"
        document.getElementById("usuario").innerHTML = "#DB2A31"
    }else if(!verificarUsuario(usuario)){
        document.getElementById("usuario-error").innerHTML = "* Ingraso de datos invalido"
        document.getElementById("usuario").innerHTML = "#DB2A31"
    }else{
        document.getElementById("usuario-error").innerHTML = ""
        document.getElementById("usuario").innerHTML = "lightgray"
    }


    if(contra = ""){
        document.getElementById("contra-error").innerHTML = "*El campo no puede quedar vacio"
        document.getElementById("contra").innerHTML = "#DB2A31"
    }else if(contra.length<5){
        document.getElementById("contra-error").innerHTML = "*MDeve tener 6 o mas caracteres"
        document.getElementById("contra").innerHTML = "#DB2A31"  
    }else if(!verificarContra){
        document.getElementById("contra-error").innerHTML = "*Contraseña invalidas"
        document.getElementById("contra").innerHTML = "#DB2A31" 
    }else{
        document.getElementById("contra-error").innerHTML = ""
        document.getElementById("contra").innerHTML = "lightgray"
    }

    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;
    


}


});


btn_atras1.addEventListener("click" , function(e){
    e.preventDefault();
    movPag.style.marginLeft = "0%";
});
btn_atras2.addEventListener("click" , function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-25%";
});
btn_atras3.addEventListener("click" , function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-50%";
});