'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _contracts = require('../ethereum/contracts');

var _contracts2 = _interopRequireDefault(_contracts);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\MidSem Review\\Project\\pages\\index.js?entry';


var VehicleIndex = function (_Component) {
  (0, _inherits3.default)(VehicleIndex, _Component);

  function VehicleIndex() {
    (0, _classCallCheck3.default)(this, VehicleIndex);

    return (0, _possibleConstructorReturn3.default)(this, (VehicleIndex.__proto__ || (0, _getPrototypeOf2.default)(VehicleIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(VehicleIndex, [{
    key: 'renderVehicles',
    value: function renderVehicles() {
      var items = this.props.vehicles.map(function (address) {
        return {
          header: address,
          description: "Krisna Prem",
          meta: "AP31T3124",
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'Open Vehicles'), _react2.default.createElement(_routes.Link, { route: '/Vehicles/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Register EV',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }))), this.renderVehicles()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var vehicles;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _contracts2.default.methods.getDeployedInsurances().call();

              case 2:
                vehicles = _context.sent;
                return _context.abrupt('return', { vehicles: vehicles });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return VehicleIndex;
}(_react.Component);

exports.default = VehicleIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJjb250cmFjdHMiLCJMYXlvdXQiLCJMaW5rIiwiVmVoaWNsZUluZGV4IiwiaXRlbXMiLCJwcm9wcyIsInZlaGljbGVzIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwibWV0YSIsImZsdWlkIiwicmVuZGVyVmVoaWNsZXMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRJbnN1cmFuY2VzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7OztxQ0FPYSxBQUNmO1VBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksbUJBQVcsQUFDL0M7O2tCQUFPLEFBQ0csQUFDUjt1QkFGSyxBQUdILEFBRUY7Z0JBTEssQUFNSCxBQUVGO2lCQVJGLEFBQU8sQUFRRSxBQUVWO0FBVlEsQUFDTDtBQUZKLEFBQWMsQUFhZCxPQWJjOzsyQ0FhUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBRUEsa0NBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDVSxBQUNSO2lCQUZGLEFBRVUsQUFDUjtjQUhGLEFBR08sQUFDTDtpQkFKRjs7b0JBQUE7c0JBTE4sQUFHRSxBQUNFLEFBQ0UsQUFTSDtBQVRHO0FBQ0UsaUJBUlosQUFDRSxBQUNFLEFBY0csQUFBSyxBQUliOzs7Ozs7Ozs7Ozs7dUJBM0N3QixvQkFBQSxBQUFVLFFBQVYsQUFBa0Isd0IsQUFBbEIsQUFBMEM7O21CQUEzRDtBO2lEQUVDLEVBQUUsVSxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENYLEEsQUFoRDJCOztrQkFnRDNCLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovTWlkU2VtIFJldmlldy9Qcm9qZWN0In0=