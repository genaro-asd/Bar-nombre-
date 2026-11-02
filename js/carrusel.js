        const fotos = [
            "img/cafe.jpg",
            "img/cerveza.png",
            "img/pizza.png",
            "img/burger.png",
            "img/tablaFiambres.png",
            "img/papasconcheddar.png",    
        ];

        // 2. Variables de control
        let indiceActual = 0;
        const tiempoCambio = 3000; // Tiempo en milisegundos (3 segundos)
        let intervalo;

        // 3. Referencias a los elementos del DOM
        const imagenDisplay = document.getElementById("imagen-display");
        const btnAnterior = document.getElementById("btn-anterior");
        const btnSiguiente = document.getElementById("btn-siguiente");

        // 4. Función para actualizar la imagen en pantalla
        function mostrarImagen() {
            imagenDisplay.src = fotos[indiceActual];
        }

        // 5. Función para avanzar (Circular)
        function siguienteFoto() {
            // Si llega al final del arreglo, vuelve a 0 (Inicio)
            indiceActual = (indiceActual + 1) % fotos.length;
            mostrarImagen();
            reiniciarTemporizador();
        }

        // 6. Función para retroceder (Circular)
        function anteriorFoto() {
            // Si está en 0 y retrocede, va al último elemento del arreglo
            indiceActual = (indiceActual - 1 + fotos.length) % fotos.length;
            mostrarImagen();
            reiniciarTemporizador();
        }

        // 7. Funciones del Temporizador (Tiempo automático)
        function iniciarTemporizador() {
            intervalo = setInterval(siguienteFoto, tiempoCambio);
        }

        function reiniciarTemporizador() {
            clearInterval(intervalo); // Detiene el tiempo actual
            iniciarTemporizador();     // Lo vuelve a iniciar para que no cambie de golpe tras un clic
        }

        // 8. Event Listeners para los botones
        btnSiguiente.addEventListener("click", siguienteFoto);
        btnAnterior.addEventListener("click", anteriorFoto);

        // 9. Inicializar el carrusel al cargar la página
        mostrarImagen();
        iniciarTemporizador();