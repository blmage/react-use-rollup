"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
var util_1 = require("./util");
var noop = function () { };
var usePermission = function (permissionDesc) {
    var mounted = true;
    var permissionStatus = null;
    var _a = hooks_1.useState(''), state = _a[0], setState = _a[1];
    var onChange = function () {
        if (mounted && permissionStatus) {
            setState(permissionStatus.state);
        }
    };
    var changeState = function () {
        onChange();
        util_1.on(permissionStatus, 'change', onChange);
    };
    hooks_1.useEffect(function () {
        navigator.permissions
            .query(permissionDesc)
            .then(function (status) {
            permissionStatus = status;
            changeState();
        })
            .catch(noop);
        return function () {
            mounted = false;
            permissionStatus && util_1.off(permissionStatus, 'change', onChange);
        };
    }, []);
    return state;
};
exports.default = usePermission;
