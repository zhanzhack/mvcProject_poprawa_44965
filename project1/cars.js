

const cars = [
    { id: 1, make: "Toyota", model: "Yaris", year: 2001, color: "white" },
    { id: 2, make: "Honda", model: "Civic", year: 2010, color: "black" },
    { id: 3, make: "Ford", model: "Focus", year: 2015, color: "blue" },
    { id: 4, make: "Chevrolet", model: "Camaro", year: 2020, color: "red" },
    { id: 5, make: "BMW", model: "X5", year: 2018, color: "silver" }
  ];


  const getCars = () => {
    return cars
  };

  
  const getCarInformation = (id) => {
    const car = cars.find((car) => car.id === id);
    if (car) {
        return `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}`;
    } 
    else {
      return "Car doesn't exist";
    }
  }


  const getCarAge = (id) => {
    const car = cars.find((car) => car.id === id);
    if (car) {
        const currentYear = new Date().getFullYear();
        const carAge = currentYear - car.year;
        return `Car is ${carAge} years old.`
    } else {
        return "Car doesnt exist"
    }
  };


  module.exports = { getCars, getCarInformation, getCarAge
  };