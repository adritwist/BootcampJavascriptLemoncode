var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
  ];
  
  // Datos
  var myTeam = [
    {
      name: "María",
      availability: new Array(8).fill(true)
    },
    {
      name: "Pedro",
      availability: new Array(8).fill(true)
    },
    {
      name: "Esther",
      availability: new Array(8).fill(true)
    },
    {
      name: "Marcos",
      availability: new Array(8).fill(true)
    },
  ];

  function disponibilidad() {
    myTeam.forEach(function(employee) {
      employee.availability = employee.availability.map(function (availability) {
        return Math.random() < 0.5 ? 'Si' : 'No';
      })
    });
  }

function agenda() {
  disponibilidad();
  myTeam.forEach(function (employee) {
    console.log('Disponibilidad de ' + employee.name)
    WORK_HOURS.forEach(function(hour, index) {
      console.log(` ${hour}: ` + employee.availability[index]);
    })
  });
}

function comprobarTramo() {


  const frees = WORK_HOURS.map(function(hour, i) {
    return myTeam.every(function (employee) {
      return employee.availability[i] === 'Si';
    })
  })

  frees.forEach(function (isFree, i) {
    if(isFree){
      console.log('Hueco encontrado en el horario ' + WORK_HOURS[i]);
    }
  });

  const allBooked = frees.every(function (isFree) {
    return !isFree;
  })

  if(allBooked) {
    console.log('Lo siento. No hay hueco disponible en el equipo.');
  }
}
  


agenda()
comprobarTramo()