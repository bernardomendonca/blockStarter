const routes = require("next-routes")();

// guaranteeing that /new will take to /new:
routes.add("/campaigns/new", "/campaigns/new");
//this method takes in: first argument: pattern we are looking for
// second argument: component we want to show
routes.add("/campaigns/:address", "/campaigns/show");

module.exports = routes;
