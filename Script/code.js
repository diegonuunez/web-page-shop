
var botonLogin = document.getElementById('login');
botonLogin.addEventListener('click', function() {
    window.location.href = '/Html/Login.html';
});

var botonRegistro = document.getElementById('registro');
botonRegistro.addEventListener('click', function() {
    window.location.href = '/Html/Registro.html';
});


var contraseña = document.getElementById('Contrasena');
var confirmar = document.getElementById('Confirmar');
var botonRegistroForm = document.getElementById('Registrarse');
var formulario = document.getElementById('form');

botonRegistroForm.addEventListener('click', function() {
    if (contraseña.value != confirmar.value) {
        alert('Las contraseñas no coinciden');
    } else {
        alert('Registro exitoso');
        formulario.submit();  
    }
});


function toggleCarrito() {
    var carritoBanda = document.getElementById("carrito-banda");
    carritoBanda.classList.toggle("visible");
}



var carrito = [];
var total = 0;

function añadirCarrito(nombreProducto, precioProducto, imagenProducto) {
    // Añadir el producto al carrito (array)
    carrito.push({ nombre: nombreProducto, precio: precioProducto, imagen: imagenProducto });

    // Actualizar la vista del carrito
    actualizarCarrito();
}

function actualizarCarrito() {
    var carritoDiv = document.getElementById("carrito");
    carritoDiv.innerHTML = ""; // Limpiar el carrito antes de actualizar

    total = 0; // Reiniciar el total para recalcular

    // Recorrer el carrito para mostrar los productos y calcular el total
    carrito.forEach(function(producto) {
        var productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");

        var img = document.createElement("img");
        img.src = producto.imagen;
        img.alt = producto.nombre;

        var nombreDiv = document.createElement("div");
        nombreDiv.classList.add("productoNombre");
        nombreDiv.textContent = producto.nombre;

        var precioDiv = document.createElement("div");
        precioDiv.classList.add("productoPrecio");
        precioDiv.textContent = "$" + producto.precio;

        productoDiv.appendChild(img);
        productoDiv.appendChild(nombreDiv);
        productoDiv.appendChild(precioDiv);

        carritoDiv.appendChild(productoDiv);

        // Sumar el precio al total
        total += producto.precio;
    });

    // Mostrar el total en el HTML
    document.getElementById("total").textContent = total.toFixed(2);
}


