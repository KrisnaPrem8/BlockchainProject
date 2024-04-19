'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _DeployContracts = require('./build/DeployContracts.json');

var _DeployContracts2 = _interopRequireDefault(_DeployContracts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(_DeployContracts2.default.abi, '0x902600948f85d508656396a80a2106b28e86d709');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxjb250cmFjdHMuanMiXSwibmFtZXMiOlsid2ViMyIsIkRlcGxveUNvbnRyYWN0cyIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJhYmkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUE0QixBQUE1Qjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNmLDBCQUFnQixBQURELEtBRWYsQUFGZSxBQUFqQixBQUtBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImNvbnRyYWN0cy5qcyIsInNvdXJjZVJvb3QiOiJFOi9NaWRTZW0gUmV2aWV3L1Byb2plY3QifQ==