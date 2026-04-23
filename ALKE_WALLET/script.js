$(document).ready(function() {
    
    $('#formLogin').on('submit', function(event) {
        event.preventDefault();

        let email = $('#email').val();
        let password = $('#password').val();

        if (email === "admin@gmail.com" && password === "0000") {
            alert("Inicio de sesión exitoso");
            window.location.href = "menu.html";

        } else {
            alert("Credenciales incorrectas. Intente de nuevo.");
        }
    });

    $('#depositForm').on('submit', function(event) {
        event.preventDefault();

        let monto = $('#monto').val();
        
        if (monto >= 1000) {
            alert("¡Éxito! Has depositado $" + monto + " correctamente.");
            window.location.href = "menu.html";

        } else {
            alert("Por favor, ingrese un monto válido (mínimo $1000).");
        }
    });

    $('#transferForm').on('submit', function(event) {
        event.preventDefault();

        let destinatario = $('#buscarContacto').val();
        let monto = $('#montoEnviar').val();

        if (destinatario !== "" && monto > 0) {
            alert("¡Transferencia Exitosa! Has enviado $" + monto + " a " + destinatario + ".");
            
            setTimeout(function() {
                window.location.href = 'menu.html';
            }, 1000);
        } else {
            alert("Error: Verifique el destinatario y el monto.");
        }
    });

});
