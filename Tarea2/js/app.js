/*Preguntamos el usuario por el nombre, la dirección y el teléfono del hotel*/
var nameHotel = prompt("Introduce el nombre del hotel");
var hotelLocation = prompt("Introduce la ubicación del hotel");
var stars = prompt("Introduce el número de estrellas (1 a 5)");
/*Introducimos lo introducido por el usuario en su respectivo elemento*/
document.getElementById("photoHotel").src = "./img/images.jpeg";
document.getElementById("hotel-name").innerHTML = "Hotel " + nameHotel;
document.getElementById("hotel-location").innerHTML = "Dirección: " + hotelLocation;
document.getElementById("rateStars").innerHTML = stars + " estrellas";
var anonymous = confirm("¿Quiere que la reseña sea anónima?");
document.getElementById("anon").checked = anonymous;

//Creamos el objeto hotel sin inicializar sus atributos

var hotel = {
    img:"./img/pexels-amar-saleem-70441.jpg",
    name:"",
    location:"",
    phoneNumber:"",
    stars:""
}

//Preguntamos al usuario e introducimos lo insertado en su respectivo atributo y lo insertamos en su respectivo elemento
document.getElementById("photoHotel2").src = hotel.img;
hotel.name = prompt('Introduce el nombre del hotel');
document.getElementById('hotel-name2').innerHTML = "Hotel " + hotel.name;
hotel.location = prompt('Introduce la ubicacion del hotel');
document.getElementById('hotel-location2').innerHTML = "Dirección:  " + hotel.location;

var stars = {
    1:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    2:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    3:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    4:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    5:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
  };
  
  hotel.stars = prompt("Introduce una puntuación de 1 a 5");
  document.getElementById("rateStars2").innerHTML = stars[hotel.stars];
var anonymous2 = confirm("¿Quiere que la reseña sea anónima?");
document.getElementById("anon2").checked = anonymous2;