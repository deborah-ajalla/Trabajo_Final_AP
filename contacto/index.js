

   $(document).ready(function() {
  $("#mi-formulario").validate();
});

$().ready(function() {
    

    $("#mi-formulario").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3
            },
            telefono: {
                required: true,
                minlength: 14
            },
            email: {
                required: true,
                email: true
            },

            asunto: {
                required: true,
                maxlength: 200
            }
        },
        messages: {
            nombre: {
                required: "Debes completar tu Nombre",
                minlength: "Tu nombre debe tener al menos 3 caracteres"
            },
            telefono: {
                required: "El campo telefono es obligatorio",
                minlength: "El campo telefono solo puede contener numero y un maximo de 14 digitos"
            },
            asunto: {
                required: "El campo asunto es obligatorio",
                maxlength: "El campo asunto debe tener menos de 200 caracteres"
            },
            email: "Debes ingresar un email valido"
        }

    });
})