const routes = require('next-routes')();

routes
  .add('/Vehicles/new', '/Vehicles/new')
  .add('/Vehicles/:address', '/Vehicles/show')
  .add('/Vehicles/:address/requests', '/Vehicles/requests/index')
  .add('/Vehicles/:address/requests/new', '/Vehicles/requests/new');

module.exports = routes;
