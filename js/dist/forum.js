(() => {
    var t = {
            n: e => {
                var o = e && e.__esModule ? () => e.default : () => e;
                return t.d(o, {
                    a: o
                }), o;
            },
            d: (e, o) => {
                for (var r in o) t.o(o, r) && !t.o(e, r) && Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: o[r]
                });
            },
            o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
            r: t => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                });
            }
        },
        e = {};
    (() => {
        "use strict";
        t.r(e);
        const o = flarum.core.compat["forum/app"];
        var r = t.n(o);

        const n = flarum.core.compat["common/extend"],
            a = flarum.core.compat["forum/components/IndexPage"];
        var c = t.n(a);
        const i = flarum.core.compat["common/Application"];
        var u = t.n(i);

        r().initializers.add("skynettechnologies-all-in-one-accessibility", function () {
            (0, n.extend)(u().prototype, "mount", function () {
                const colorCode = r().forum.attribute("skynettechnologies-all-in-one-accessibility.aioacolor_codeHtml") || "#000000";
                document.documentElement.style.setProperty("--aioa-color", colorCode);
                const positionSwitcher = r().forum.attribute("skynettechnologies-all-in-one-accessibility.aioa_custom_position_switcher");
                const iconPosition = r().forum.attribute("skynettechnologies-all-in-one-accessibility.aioa_iconposition") || "bottom-right";
                document.documentElement.style.setProperty("--aioa-icon-position", iconPosition);
                if (positionSwitcher) {
                    document.body.classList.add("aioa-custom-position-enabled");
                } else {
                    document.body.classList.remove("aioa-custom-position-enabled");
                }
                // Handle new custom position values
                var customXValue = r().forum.attribute("skynettechnologies-all-in-one-accessibility.custom_position_x_value");
                var customXDirection = r().forum.attribute("skynettechnologies-all-in-one-accessibility.custom_position_x_direction");
                var customYValue = r().forum.attribute("skynettechnologies-all-in-one-accessibility.custom_position_y_value");
                var customYDirection = r().forum.attribute("skynettechnologies-all-in-one-accessibility.custom_position_y_direction");
                var widgetSizeTitle = r().forum.attribute("skynettechnologies-all-in-one-accessibility.aioa_widget_size_title");

                if (customXValue) {
                    document.documentElement.style.setProperty("--aioa-custom-x-value", `${customXValue}px`);
                }
                if (customXDirection) {
                    document.documentElement.style.setProperty("--aioa-custom-x-direction", customXDirection);
                }
                if (customYValue) {
                    document.documentElement.style.setProperty("--aioa-custom-y-value", `${customYValue}px`);
                }
                if (customYDirection) {
                    document.documentElement.style.setProperty("--aioa-custom-y-direction", customYDirection);
                }
                if (widgetSizeTitle) {
                    document.documentElement.style.setProperty("--aioa-widget-size-title", widgetSizeTitle);
                }
                function load_aioa_script() {
                    let scriptEle = document.createElement("script");
                    scriptEle.setAttribute("src", "https://www.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js?colorcode=&token=&position=bottom_right");
                    scriptEle.setAttribute("type", "text/javascript");
                    scriptEle.setAttribute("async", "");
                    scriptEle.setAttribute("id", "aioa-adawidget");
                    document.head.appendChild(scriptEle);
                };
                load_aioa_script();
            });
        });
    })(), module.exports = e;
})();


