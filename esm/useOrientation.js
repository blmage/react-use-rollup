import { useEffect, useState } from 'preact/hooks';
import { off, on } from './util';
var defaultState = {
    angle: 0,
    type: 'landscape-primary',
};
var useOrientation = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var screen = window.screen;
    var _a = useState(initialState), state = _a[0], setState = _a[1];
    useEffect(function () {
        var mounted = true;
        var onChange = function () {
            if (mounted) {
                var orientation_1 = screen.orientation;
                if (orientation_1) {
                    var angle = orientation_1.angle, type = orientation_1.type;
                    setState({ angle: angle, type: type });
                }
                else if (window.orientation) {
                    setState({
                        angle: typeof window.orientation === 'number' ? window.orientation : 0,
                        type: '',
                    });
                }
                else {
                    setState(initialState);
                }
            }
        };
        on(window, 'orientationchange', onChange);
        onChange();
        return function () {
            mounted = false;
            off(window, 'orientationchange', onChange);
        };
    }, []);
    return state;
};
export default useOrientation;
