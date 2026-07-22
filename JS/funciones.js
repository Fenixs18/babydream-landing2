const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(enlace => {

    enlace.addEventListener("click", function(evento) {

        evento.preventDefault();

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        destino.scrollIntoView({
            behavior: "smooth"
        });

    });

});


const botonesPedido = document.querySelectorAll(".pedido-btn");

botonesPedido.forEach(function(boton){

    boton.addEventListener("click", function(evento){

        evento.preventDefault();

        window.open(
            "https://wa.me/51921991653?text=Hola,%20estoy%20interesada%20en%20las%20almohadas%20BabyDream.",
            "_blank"
        );

    });

});


const tarjetas = document.querySelectorAll(".card");

function mostrarTarjetas() {

    tarjetas.forEach(function(tarjeta, indice) {

        const posicion = tarjeta.getBoundingClientRect().top;

        if(posicion < window.innerHeight - 100){

            setTimeout(() => {
                tarjeta.classList.add("visible");
            }, indice * 200);

        }

    });

}

window.addEventListener("scroll", mostrarTarjetas);

mostrarTarjetas();

const testimonios = [
    {
        texto: "Desde que uso BabyDream puedo dormir mucho mejor.",
        autor: "Jehidi"
    },
    {
        texto: "El dolor de espalda disminuyó muchísimo. La recomiendo.",
        autor: "Andrea"
    },
    {
        texto: "Fue una de las mejores compras durante mi embarazo.",
        autor: "Mori"
    }
];

let indiceTestimonio = 0;

const texto = document.getElementById("texto-testimonio");
const autor = document.getElementById("autor-testimonio");

const contenedor = document.querySelector(".testimonio-contenedor");

setInterval(function(){

    contenedor.classList.add("oculto");

    setTimeout(function(){

        indiceTestimonio++;

        if(indiceTestimonio >= testimonios.length){
            indiceTestimonio = 0;
        }

        texto.textContent = testimonios[indiceTestimonio].texto;
        autor.textContent = "– " + testimonios[indiceTestimonio].autor;

        contenedor.classList.remove("oculto");

    }, 600);

}, 4000);


const numeros = document.querySelectorAll(".numero");
const seccionEstadisticas = document.querySelector(".estadisticas");

let estadisticasIniciadas = false;

function animarEstadisticas() {

    if (estadisticasIniciadas) {
        return;
    }

    const posicion = seccionEstadisticas.getBoundingClientRect().top;

    if (posicion < window.innerHeight - 100) {

        estadisticasIniciadas = true;

        numeros.forEach(numero => {

            const valorFinal = parseInt(numero.dataset.valor);
            const tipo = numero.dataset.tipo;

            let valorActual = 0;
            let incremento;
            let velocidad;

            if (tipo === "normal") {
                incremento = 1;
                velocidad = 350;
            } else {
                incremento = Math.max(1, Math.ceil(valorFinal / 50));
                velocidad = 30;
            }

            const intervalo = setInterval(function() {

            valorActual += incremento;

            if (valorActual >= valorFinal) {
                valorActual = valorFinal;
                clearInterval(intervalo);
            }

            if (tipo === "plus") {
                numero.textContent = "+" + valorActual;
            }
            else if (tipo === "porcentaje") {
                numero.textContent = valorActual + "%";
            }
            else {
                numero.textContent = valorActual;
            }

        }, velocidad);

    });



    }

}

window.addEventListener("scroll", animarEstadisticas);

animarEstadisticas();

const botonWhatsapp = document.querySelector(".whatsapp-flotante");

botonWhatsapp.addEventListener("click", function(evento){

    evento.preventDefault();

    window.open(
        "https://wa.me/51921991653?text=Hola,%20estoy%20interesada%20en%20las%20almohadas%20BabyDream.",
        "_blank"
    );

});

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){
        botonWhatsapp.classList.add("mostrar");
    }else{
        botonWhatsapp.classList.remove("mostrar");
    }

});

const imagenPrincipal = document.getElementById("imagen-principal");

const miniaturas = document.querySelectorAll(".miniatura");

miniaturas.forEach(function(miniatura){

    miniatura.addEventListener("click", function(){

        imagenPrincipal.style.opacity = "0";

        setTimeout(function(){

            imagenPrincipal.src = miniatura.src;

            imagenPrincipal.style.opacity = "1";

        }, 300);

        miniaturas.forEach(function(img){
            img.classList.remove("activa");
        });

        miniatura.classList.add("activa");

    });

});

var botonTema = document.getElementById("tema-btn");

botonTema.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        botonTema.textContent = "☀️";
    }
    else{
        botonTema.textContent = "🌙";
    }

});

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");     
    menuBtn.classList.toggle("open");        
  });


  const links = navLinks.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuBtn.classList.remove("open");
    });
  });
});