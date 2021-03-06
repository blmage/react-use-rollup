import { useEffect, useState } from 'preact/hooks';
export default (function () {
    var _a = useState(0), mouseWheelScrolled = _a[0], setMouseWheelScrolled = _a[1];
    useEffect(function () {
        var updateScroll = function (e) {
            setMouseWheelScrolled(e.deltaY + mouseWheelScrolled);
        };
        window.addEventListener('wheel', updateScroll, false);
        return function () { return window.removeEventListener('wheel', updateScroll); };
    });
    return mouseWheelScrolled;
});
