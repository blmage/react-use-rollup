"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
var useScrolling = function (ref) {
    var _a = hooks_1.useState(false), scrolling = _a[0], setScrolling = _a[1];
    hooks_1.useEffect(function () {
        if (ref.current) {
            var scrollingTimeout_1;
            var handleScrollEnd_1 = function () {
                setScrolling(false);
            };
            var handleScroll_1 = function () {
                setScrolling(true);
                clearTimeout(scrollingTimeout_1);
                scrollingTimeout_1 = setTimeout(function () { return handleScrollEnd_1(); }, 150);
            };
            ref.current.addEventListener('scroll', handleScroll_1, false);
            return function () {
                if (ref.current) {
                    ref.current.removeEventListener('scroll', handleScroll_1, false);
                }
            };
        }
        return function () { };
    }, [ref]);
    return scrolling;
};
exports.default = useScrolling;
