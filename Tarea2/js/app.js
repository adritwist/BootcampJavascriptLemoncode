/*Preguntamos el usuario por el nombre, la dirección y el teléfono del hotel*/
var nameHotel = prompt("Introduce el nombre del hotel");
var hotelLocation = prompt("Introduce la ubicación del hotel");
var phoneHotel = prompt("Introduce un número de teléfono");
/*Introducimos lo introducido por el usuario en su respectivo elemento*/
document.getElementById("hotel-name").innerHTML = "Hotel " + nameHotel;
document.getElementById("hotel-location").innerHTML = "Dirección: " + hotelLocation;
document.getElementById("phoneNumber").innerHTML = "Teléfono: +34 " + phoneHotel;

//Creamos el objeto hotel sin inicializar sus atributos

var hotel = {
    name:"",
    location:"",
    phoneNumber:""
}

//Preguntamos al usuario e introducimos lo insertado en su respectivo atributo y lo insertamos en su respectivo elemento
hotel.name = prompt('Introduce el nombre del hotel');
document.getElementById('hotel-name2').innerHTML = "Hotel " + hotel.name;
hotel.location = prompt('Introduce la ubicacion del hotel');
document.getElementById('hotel-location2').innerHTML = "Dirección:  " + hotel.location;
hotel.phoneNumber = prompt('Introduce el teléfono del hotel');
document.getElementById('phoneNumber2').innerHTML = "Teléfono: +34 " + hotel.phoneNumber;