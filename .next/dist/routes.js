'use strict';

var routes = require('next-routes')();

routes.add('/Vehicles/new', '/Vehicles/new').add('/Vehicles/:address', '/Vehicles/show').add('/Vehicles/:address/requests', '/Vehicles/requests/index').add('/Vehicles/:address/requests/new', '/Vehicles/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLGlCQUN3QixBQUR4QixpQkFFRyxBQUZILElBRU8sQUFGUCxzQkFFNkIsQUFGN0Isa0JBR0csQUFISCxJQUdPLEFBSFAsK0JBR3NDLEFBSHRDLDRCQUlHLEFBSkgsSUFJTyxBQUpQLG1DQUkwQyxBQUoxQzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkU6L01pZFNlbSBSZXZpZXcvUHJvamVjdCJ9