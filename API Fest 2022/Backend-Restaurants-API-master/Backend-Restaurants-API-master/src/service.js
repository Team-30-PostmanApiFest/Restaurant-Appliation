var { nanoid } = require("nanoid");
let restaurants = [
  {
    id: "4765",
    name: "Chilys",
    cuisine: "Continental",
    hasTakeout: "true",
    COD: "false",
    onlineDelivery: "Between 8 AM to 9 PM",
  },
  {
    id: "4768",
    name: "Big Brewsky",
    cuisine: "Japanese",
    hasTakeout: "true",
    COD: "true",
    onlineDelivery: "Between 11 AM to 8 PM",
  },
];
class Service {
  constructor() {}
  listRestaurants = async (request, reply) => {
    reply.send(restaurants);
  };
  addRestaurant = async (request, reply) => {
    const newRestaurant = request.body; // a new restaurant with the parameters provided in schema

    //specifies a random id for security from hackers using the nanoid module
    newRestaurant.id = nanoid();
    //obtain restaurant properties
    //add the restaurant to our db
    restaurants.push(newRestaurant);
    //send  back the new restaurant obtained from GET as a 201 response to the client
    reply.code(201).send(newRestaurant);
  };
  getRestaurant = async (request, reply) => {
    const id = request.params.id;
    const restaurant = restaurants.find((r) => r.id === id);
    if (restaurant) {
      reply.send(restaurant);
    } else {
      respond.code(404).send(`No restaurnt with such an id `);
    }
    // console.log(request.params);
    // reply.send("foo");
  };
  updateRestaurant = async (request, reply) => {
    // Updates restaurant by id
    //  if id not found , it returns a 404 error to the client
    const id = request.params.id;
    const foundIndex = restaurants.findIndex((r) => r.id === id); //matches the id provided by the user to the ids in the database first

    // -1 in an array indicates it doesnt exizst
    if (foundIndex > -1) {
      //updates the  restaurant
      const oldData = restaurants[foundIndex]; //if array exists get the found index id
      restaurants[foundIndex] = { ...oldData, ...request.body };
      reply.code(204).send();
    } else {
      reply.code(404).send(`No restaurant with such an id exists `);
    }
  };
  deleteRestaurant = async (request, reply) => {
    // Deletes restaurant by id
    //  if id not found , it returns a 404 error to the client
    const id = request.params.id;
    //finds restaurant by id
    const foundIndex = restaurants.findIndex((r) => r.id === id); //matches the id provided by the user to the ids in the database first

    // -1 in an array indicates it doesnt exist
    if (foundIndex > -1) {
      //deletes the item in the found index
      restaurants.splice(foundIndex, 1);
      reply.code(204).send();
    } else {
      //no restaurant with provided id found
      reply.code(404).send(`No restaurant with such an id exists`);
    }
    // console.log(request.params);
    // reply.send("foo");
  };
}
module.exports = Service;
