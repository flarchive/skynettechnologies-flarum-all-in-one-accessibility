(() => {
    var e = {
            n: t => {
                var n = t && t.__esModule ? () => t.default : () => t;
                return e.d(n, {
                    a: n
                }), n;
            },
            d: (t, n) => {
                for (var a in n) e.o(n, a) && !e.o(t, a) && Object.defineProperty(t, a, {
                    enumerable: !0,
                    get: n[a]
                });
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: e => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                });
            }
        },
        t = {};
    (() => {
        "use strict";
        e.r(t);
        const n = flarum.core.compat["admin/app"];
        var a = e.n(n);

        a().initializers.add("skynettechnologies-all-in-one-accessibility", function () {
            // function f1() {
            //     console.log("Settings saved! Function f1 executed.");
            // }
            a().extensionData.for("skynettechnologies-all-in-one-accessibility")
                .registerSetting(() =>
                    m("h2", null, a().translator.trans("skynettechnologies-all-in-one-accessibility.admin.settings.section_title"))
                )
                .registerSetting({
                    setting: "skynettechnologies-all-in-one-accessibility.aioacolor_codeHtml",
                    className: "color",
                    id: "colorcode",
                    type: "text",
                    label: a().translator.trans("skynettechnologies-all-in-one-accessibility.admin.settings.aioacolor_codeHtml")
                })

                .registerSetting({
                    setting: 'skynettechnologies-all-in-one-accessibility.aioa_iconposition',
                    label: a().translator.trans("skynettechnologies-all-in-one-accessibility.admin.settings.aioa_iconposition"),
                    id: "position",
                    name: "position",
                    type: 'select',
                    className: "widget-position",
                    options: {
                        'top_left': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa_iconposition_top_left'),
                        'top_center': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa_iconposition_top_center'),
                        'top_right': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa_iconposition_top_right'),
                        'middle_left': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa_iconposition_middle_left'),
                        'middle_right': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa_iconposition_middle_right'),
                        'bottom_left': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa_iconposition_bottom_left'),
                        'bottom_center': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa_iconposition_bottom_center'),
                        'bottom_right': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa_iconposition_bottom_right'),
                    },
                })
                .registerSetting({
                    setting: "skynettechnologies-all-in-one-accessibility.custom_position_switcher",
                    label: a().translator.trans("skynettechnologies-all-in-one-accessibility.admin.settings.aioa_custom_position_switcher"),
                    id: "custom-position-switcher",
                    type: "checkbox",
                    className: "custom-switcher",
                    value: "1",
                    checked: true
                })
                .registerSetting(() =>
                    m("div", { class: "custom-position-controls"},
                        a().translator.trans("skynettechnologies-all-in-one-accessibility.admin.settings.custom_position_title")
                    )
                )
                .registerSetting({
                    setting: 'skynettechnologies-all-in-one-accessibility.custom_position_x_value',
                    id: "custom_position_x_value",
                    className: "custom-position-controls",
                    type: 'number',
                    min: 0,
                    max: 250,
                })
                .registerSetting({
                    setting: 'skynettechnologies-all-in-one-accessibility.custom_position_x_direction',
                    id: "custom_position_x_direction",
                    className: "custom-position-controls",
                    type: 'select',
                    options: {
                        'to_the_right': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.to_the_right'),
                        'to_the_left': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.to_the_left'),
                    },
                    default: "to_the_right"
                })
                .registerSetting({
                    setting: 'skynettechnologies-all-in-one-accessibility.custom_position_y_value',
                    id: "custom_position_y_value",
                    className: "custom-position-controls",
                    type: 'number',
                    min: 0,
                    max: 250,
                })
                .registerSetting({
                    setting: 'skynettechnologies-all-in-one-accessibility.custom_position_y_direction',
                    id: "custom_position_y_direction",
                    className: "custom-position-controls",
                    type: 'select',
                    options: {
                        'to_the_bottom': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.to_the_bottom'),
                        'to_the_top': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.to_the_top'),
                    },
                    default: "to_the_bottom"
                })
                .registerSetting({
                    setting: 'skynettechnologies-all-in-one-accessibility.aioa_widget_size_title',
                    label: a().translator.trans("skynettechnologies-all-in-one-accessibility.admin.settings.aioa_widget_size_title"),
                    type: 'select',
                    id: "widget_size",
                    options: {
                        '0': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa_widget_regularsize'),
                        '1': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa_widget_oversize'),
                    },
                    default: '0',
                })
                .registerSetting(() =>
                    m("div", null, a().translator.trans("skynettechnologies-all-in-one-accessibility.admin.settings.fieldset_description"))
                )
                .registerSetting({
                    setting: 'skynettechnologies-all-in-one-accessibility.aioa_icon_type_title',
                    label: a().translator.trans("skynettechnologies-all-in-one-accessibility.admin.settings.aioa_icon_type_title"),
                    type: 'select',
                    id: "aioa_icon_type",
                    options: {
                        'aioa-icon-type-1': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-1'),
                        'aioa-icon-type-2': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-2'),
                        'aioa-icon-type-3': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-3'),
                        'aioa-icon-type-4': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-4'),
                        'aioa-icon-type-5': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-5'),
                        'aioa-icon-type-6': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-6'),
                        'aioa-icon-type-7': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-7'),
                        'aioa-icon-type-8': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-8'),
                        'aioa-icon-type-9': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-9'),
                        'aioa-icon-type-10': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-10'),
                        'aioa-icon-type-11': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-11'),
                        'aioa-icon-type-12': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-12'),
                        'aioa-icon-type-13': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-13'),
                        'aioa-icon-type-14': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-14'),
                        'aioa-icon-type-15': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-15'),
                        'aioa-icon-type-16': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-16'),
                        'aioa-icon-type-17': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-17'),
                        'aioa-icon-type-18': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-18'),
                        'aioa-icon-type-19': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-19'),
                        'aioa-icon-type-20': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-20'),
                        'aioa-icon-type-21': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-21'),
                        'aioa-icon-type-22': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-22'),
                        'aioa-icon-type-23': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-23'),
                        'aioa-icon-type-24': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-24'),
                        'aioa-icon-type-25': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-25'),
                        'aioa-icon-type-26': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-26'),
                        'aioa-icon-type-27': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-27'),
                        'aioa-icon-type-28': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-28'),
                        'aioa-icon-type-29': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-icon-type-29'),
                    },
                    default: 'aioa-icon-type-1'
                })


                .registerSetting({
                    setting: 'skynettechnologies-all-in-one-accessibility.select_icon_size',
                    label: a().translator.trans("skynettechnologies-all-in-one-accessibility.admin.settings.select_icon_size"),
                    type: 'select',
                    id: 'aioa_icon_size',
                    name: "aioa_icon_size",
                    className: "widget-icon",
                    options: {
                        'aioa-big-icon': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-big-icon'),
                        //'aioa-big-icon': '<img src="https://skynettechnologies.com/sites/default/files/python/aioa-icon-type-1.svg" width="75" height="75" style="margin: auto" class="icon-img"/>',
                        'aioa-medium-icon': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-medium-icon'),
                        'aioa-default-icon': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-default-icon'),
                        'aioa-small-icon': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-small-icon'),
                        'aioa-extra-small-icon': app.translator.trans('skynettechnologies-all-in-one-accessibility.admin.settings.aioa-extra-small-icon'),
                    },
                    default: 'aioa-default-icon',
                })
                .registerSetting({
                    setting: "skynettechnologies-all-in-one-accessibility.aioa_custom_size_switcher",
                    label: a().translator.trans("skynettechnologies-all-in-one-accessibility.admin.settings.aioa_custom_size_switcher"),
                    id:"custom-size-switcher",
                    type: "checkbox",
                    className: "custom-size-switcher",
                    value: "1",
                    checked: true
                })
                .registerSetting({
                    setting: 'skynettechnologies-all-in-one-accessibility.aioa_widget_icon_size',
                    label: a().translator.trans("skynettechnologies-all-in-one-accessibility.admin.settings.aioa_widget_icon_size"),
                    type: 'number',
                    id:"widget_icon_size_custom",
                    className: "custom-size-controls",
                    min: 20,
                    max: 150,
                })
                .registerSetting(() =>
                    m("div", { class: "custom-size-controls"},
                        a().translator.trans("skynettechnologies-all-in-one-accessibility.admin.settings.aioa_widget_icon_size_description")
                    )
                )
                .registerSetting(() =>
                    m("button", {
                        type: "submit",
                        onclick: function (e) {
                            e.preventDefault();
                            console.log("Settings Saved!");
                            f1();
                        }
                    }, "Save Settings")
                )
                .registerSetting(() =>
                    m("div", {
                            id: "loader",
                            className: "loader",
                            style: { display: "none" }, // Initially hidden
                        },
                        m("div", { className: "spinner" })  // Spinner element
                    )
                );
            // Function to toggle visibility of custom position fields
        });
    })(), module.exports = t;
})();
document.addEventListener('DOMContentLoaded', () => {
    const hiddenFields = ['user_name', 'email'];
    hiddenFields.forEach(field => {
        const input = document.querySelector(`[name="skynettechnologies-all-in-one-accessibility.${field}"]`);
        if (input) {
            input.closest('.Form-group').style.display = 'none';
        }
    });
    // Hide submit button
    const submitButton = document.querySelector('.Button.Button--primary');
    if (submitButton) {
        submitButton.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    console.log(loader);
    // Function to show loader
    function showLoader() {
        loader.style.display = 'flex';
    }
    // Function to hide loader
    function hideLoader() {
        loader.style.display = 'none';
    }


    //CALL HERE ALL thi API's
    const urlParams = new URLSearchParams(window.location.search);
    const baseUrl = "https://ada.skynettechnologies.us/api";
    const domain = window.location.hostname;
    const base64Domain = btoa(domain);
    const userName = urlParams.get('username') || domain || 'Dear Customer';
    const userEmail = urlParams.get('email') || `no-reply@${domain}`;
    console.log(userEmail);

    async function CallAPI() {
        showLoader();
        try {
            // ✅ Step 1: Add User Domain
            const arr_details = {
                name: userName,
                email: userEmail,
                company_name: "",
                website: base64Domain,
                package_type: "free-widget",
                start_date: new Date().toISOString().slice(0, 19).replace("T", " "),
                end_date: "",
                price: "",
                discount_price: "0",
                platform: "Flarum",
                api_key: "",
                is_trial_period: "",
                is_free_widget: "1",
                bill_address: "",
                country: "",
                state: "",
                city: "",
                post_code: "",
                transaction_id: "",
                subscr_id: "",
                payment_source: "",
            };

            console.log("🌐 Step 1: Calling add-user-domain...");
            const addUserDomainResponse = await fetch(`${baseUrl}/add-user-domain`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(arr_details),
            });
            const addUserDomainData = await addUserDomainResponse.json();
            if (addUserDomainData.status === 0) {
                console.log("✅ User domain added successfully.");
            } else {
                console.warn("⚠️ Failed to add user domain:", addUserDomainData);
            }

            // ✅ Step 2: Fetch Widget Settings
            const widgetSettingsResponse = await fetch(`${baseUrl}/widget-settings-platform`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ website_url: domain }),
            });

            const widgetSettingsData = await widgetSettingsResponse.json();
            console.log("Response (widget-settings-platform):", widgetSettingsData);

            const widgetData = widgetSettingsData || {};
            const d = widgetData.Data || widgetData || {};

            if (widgetSettingsData.status !== undefined) {
                console.log("✅ Widget settings fetched successfully.");
            } else {
                console.warn("⚠️ Failed to fetch widget settings.");
            }
        } catch (error) {
            console.error("❌ Error encountered:", error);
        } finally {
            hideLoader();
        }
    }

    // ✅ Run it on page load
    CallAPI();

    // Function to populate form fields dynamically from fetched settings
    function setWidgetData(
        widgetPosition,
        widgetColor,
        iconType,
        iconSize,
        widgetSize,
        widgetIconSizeCustom,
        is_widget_custom_size,
        is_widget_custom_position,
        widgetPositionTop,
        widgetPositionBottom,
        widgetPositionLeft,
        widgetPositionRight
    ) {
        // ---- COLOR ----
        const colorInput = document.getElementById("colorcode");
        if (colorInput && widgetColor) {
            colorInput.value = widgetColor;
        }

        // ---- POSITION (fixed dropdown) ----
        const positionSelect = document.getElementById("position");
        if (positionSelect && widgetPosition) {
            try { positionSelect.value = widgetPosition; } catch (e) {}
        }

        // ---- ICON TYPE (select) + preview update ----
        const iconTypeSelect = document.getElementById("aioa_icon_type");
        if (iconTypeSelect && iconType) {
            try { iconTypeSelect.value = iconType; } catch (e) {}
            // update preview images if present
            document.querySelectorAll(".iconimg").forEach(img => {
                if (img && iconType) img.src = "https://www.skynettechnologies.com/sites/default/files/" + iconType + ".svg";
            });
        }

        // ---- ICON SIZE (select) ----
        const iconSizeSelect = document.getElementById("aioa_icon_size");
        if (iconSizeSelect && iconSize) {
            try { iconSizeSelect.value = iconSize; } catch (e) {}
        }

        // ---- WIDGET SIZE (select) ----
        const widgetSizeSelect = document.getElementById("widget_size");
        if (widgetSizeSelect && (widgetSize !== undefined && widgetSize !== null)) {
            try { widgetSizeSelect.value = widgetSize; } catch (e) {}
        }

        // ---- CUSTOM ICON SIZE ----
        const widgetIconSizeInput = document.getElementById("widget_icon_size_custom");
        if (widgetIconSizeInput && (widgetIconSizeCustom !== undefined && widgetIconSizeCustom !== null)) {
            widgetIconSizeInput.value = widgetIconSizeCustom;
        }

        // ---- CUSTOM SIZE TOGGLE (checkbox) ----
        const customSizeCheckbox = document.querySelector('.custom-size-switcher input[type="checkbox"]');
        const widgetSizeWrapper = document.querySelector('.aioa-widget-size-wrapper');
        const customSizeWrapper = document.querySelector('.aioa-custom-size-wrapper');

        const sizeFlag = String(is_widget_custom_size ?? "0");
        if (customSizeCheckbox) {
            customSizeCheckbox.checked = (sizeFlag === "1");
            // toggle visual classes on wrapper label if present
            const label = customSizeCheckbox.closest('.Checkbox');
            if (label) {
                label.classList.toggle('on', customSizeCheckbox.checked);
                label.classList.toggle('off', !customSizeCheckbox.checked);
            }
        }

        // show/hide size wrappers
        if (customSizeWrapper && widgetSizeWrapper) {
            if (sizeFlag === "1") {
                customSizeWrapper.style.display = "block";
                widgetSizeWrapper.style.display = "none";
            } else {
                customSizeWrapper.style.display = "none";
                widgetSizeWrapper.style.display = "block";
            }
        }

        // ---- CUSTOM POSITION TOGGLE (checkbox) ----
        const customPosCheckbox = document.querySelector('.custom-switcher input[type="checkbox"]');
        const widgetPosWrapper = document.querySelector('.aioa-widget-position-wrapper');
        const customPosWrapper = document.querySelector('.aioa-custom-position-wrapper');

        const posFlag = String(is_widget_custom_position ?? "0");
        if (customPosCheckbox) {
            customPosCheckbox.checked = (posFlag === "1");
            const label = customPosCheckbox.closest('.Checkbox');
            if (label) {
                label.classList.toggle('on', customPosCheckbox.checked);
                label.classList.toggle('off', !customPosCheckbox.checked);
            }
        }

        // show/hide position wrappers
        if (customPosWrapper && widgetPosWrapper) {
            if (posFlag === "1") {
                customPosWrapper.style.display = (customPosWrapper.style.display === 'flex' || customPosWrapper.style.display === '') ? 'flex' : customPosWrapper.style.display;
                customPosWrapper.style.display = "flex";
                widgetPosWrapper.style.display = "none";
            } else {
                customPosWrapper.style.display = "none";
                widgetPosWrapper.style.display = "block";
            }
        }

        // ---- CUSTOM POSITION FIELDS (X/Y direction & value) ----
        const posXValue = document.getElementById("custom_position_x_value");
        const posXDirection = document.getElementById("custom_position_x_direction"); // 'to_the_right' / 'to_the_left'
        const posYValue = document.getElementById("custom_position_y_value");
        const posYDirection = document.getElementById("custom_position_y_direction"); // 'to_the_bottom' / 'to_the_top'

        // Horizontal: prefer explicit left or right value from API
        if (typeof widgetPositionLeft !== "undefined" && widgetPositionLeft !== null && widgetPositionLeft !== "") {
            if (posXValue) posXValue.value = widgetPositionLeft;
            if (posXDirection) posXDirection.value = "to_the_left";
        } else if (typeof widgetPositionRight !== "undefined" && widgetPositionRight !== null && widgetPositionRight !== "") {
            if (posXValue) posXValue.value = widgetPositionRight;
            if (posXDirection) posXDirection.value = "to_the_right";
        } else {
            // If API doesn't give explicit left/right but widgetPosition is a fixed value (e.g. 'bottom_right'), don't override custom fields
            // keep existing value
        }

        // Vertical: prefer explicit top or bottom value from API
        if (typeof widgetPositionTop !== "undefined" && widgetPositionTop !== null && widgetPositionTop !== "") {
            if (posYValue) posYValue.value = widgetPositionTop;
            if (posYDirection) posYDirection.value = "to_the_top";
        } else if (typeof widgetPositionBottom !== "undefined" && widgetPositionBottom !== null && widgetPositionBottom !== "") {
            if (posYValue) posYValue.value = widgetPositionBottom;
            if (posYDirection) posYDirection.value = "to_the_bottom";
        }

        // ---- FIXED POSITION RADIO/SELECT (when not custom) ----
        if (posFlag === "0" && widgetPosition) {
            // `position` select exists and was set above; for safety also handle radio-style versions.
            const fixedRadio = document.querySelector(`.aioa-position[value="${widgetPosition}"]`);
            if (fixedRadio) fixedRadio.checked = true;
        }

        // Done
        console.log("setWidgetData applied:", {
            widgetPosition, widgetColor, iconType, iconSize, widgetSize,
            widgetIconSizeCustom, is_widget_custom_size, is_widget_custom_position,
            widgetPositionTop, widgetPositionBottom, widgetPositionLeft, widgetPositionRight
        });
    }

    const defaultValues = {
        widgetPosition: 'bottom_right',
        widgetColor: '#420083',
        iconType: 'aioa-icon-type-1',
        iconSize: 'aioa-default-icon',
        widgetSize: '0',
        widgetIconSizeCustom: '20',
        is_widget_custom_size: '0',
        is_widget_custom_position: '0',

    };
    showLoader();
    const domain_name = window.location.host; //window.location.host;
    if (domain_name && domain_name !== '') {
        // Show loader before fetching data
        // If domain_name is present, fetch from the external API
        const apiUrl = "https://ada.skynettechnologies.us/api/widget-settings";   // Fetch Widget Data from the Dashboard
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                website_url: domain_name
            })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json(); // Parse JSON response
            })
            .then((data) => {
                // Extract widget position and other settings from the API response
                const widgetPosition = data.Data?.widget_position || defaultValues.widgetPosition;
                const widgetColor = data.Data?.widget_color_code || defaultValues.widgetColor;
                const iconType = data.Data?.widget_icon_type || defaultValues.iconType;
                const iconSize = data.Data?.widget_icon_size || defaultValues.iconSize;
                const widgetSize = data.Data?.widget_size || defaultValues.widgetSize;
                const widgetIconSizeCustom = data.Data?.widget_icon_size_custom || defaultValues.widgetIconSizeCustom;
                const is_widget_custom_size = data.Data?.is_widget_custom_size || defaultValues.is_widget_custom_size;
                const is_widget_custom_position = data.Data?.is_widget_custom_position || defaultValues.is_widget_custom_position;
                const widgetPositionTop = data.Data?.widget_position_top ?? defaultValues.widgetPositionTop;
                const widgetPositionBottom = data.Data?.widget_position_bottom ?? defaultValues.widgetPositionBottom;
                const widgetPositionLeft = data.Data?.widget_position_left ?? defaultValues.widgetPositionLeft;
                const widgetPositionRight = data.Data?.widget_position_right ?? defaultValues.widgetPositionRight;
                setWidgetData(
                    widgetPosition,
                    widgetColor,
                    iconType,
                    iconSize,
                    widgetSize,
                    widgetIconSizeCustom,
                    is_widget_custom_size,
                    is_widget_custom_position,
                    widgetPositionTop,
                    widgetPositionBottom,
                    widgetPositionLeft,
                    widgetPositionRight
                );
                console.log(data.Data);
            })
            .catch((error) => {
                console.error("Error fetching widget position:", error);
            })
            .finally(() => {
                // Hide loader after fetching data is complete (success or error)
                hideLoader();
            });
    }
    else {
        // If domain_name is not valid, set default values
        setWidgetData(
            defaultValues.widgetPosition,
            defaultValues.widgetColor,
            defaultValues.iconType,
            defaultValues.iconSize
        );
    }
    $(".icon_type").change(function () {
        var icon_type = $(this).val(); // Get the selected icon type value
        var iconImg = "https://www.skynettechnologies.com/sites/default/files/" + icon_type + ".svg";
        $(".iconimg").attr("src", iconImg); // Update the icon image source
    });

    const sizeOptions = document.querySelectorAll('input[name="icon_size"]');
    const sizeOptionsImg = document.querySelectorAll('input[name="icon_size"] + label img');
    const typeOptions = document.querySelectorAll('input[name="icon_type"]');

    sizeOptionsImg.forEach(option2 => {
        var ico_type = document.querySelector('input[name="icon_type"]:checked').value;
        option2.setAttribute("src", "https://www.skynettechnologies.com/sites/default/files/" + ico_type + ".svg");
    });

    typeOptions.forEach(option => {
        option.addEventListener("click", (event) => {
            sizeOptionsImg.forEach(option2 => {
                var ico_type = document.querySelector('input[name="icon_type"]:checked').value;
                option2.setAttribute("src", "https://www.skynettechnologies.com/sites/default/files/" + ico_type + ".svg");
            });
        });
    });
    // Select the 7th, 8th, 9th, and 10th child elements
    const elementsToWrap = document.querySelectorAll(
        '.skynettechnologies-all-in-one-accessibility-Page .Form > *:nth-child(5), ' +
        '.skynettechnologies-all-in-one-accessibility-Page .Form > *:nth-child(6), ' +
        '.skynettechnologies-all-in-one-accessibility-Page .Form > *:nth-child(7), ' +
        '.skynettechnologies-all-in-one-accessibility-Page .Form > *:nth-child(8), ' +
        '.skynettechnologies-all-in-one-accessibility-Page .Form > *:nth-child(9)'
    );

    // Select the 3rd child element
    const thirdElement = document.querySelector('.skynettechnologies-all-in-one-accessibility-Page .Form > *:nth-child(3)');
    const thirteenthElement = document.querySelector('.skynettechnologies-all-in-one-accessibility-Page .Form > *:nth-child(13)');
    const fifteenthElement = document.querySelector('.skynettechnologies-all-in-one-accessibility-Page .Form > *:nth-child(15)');

    // If there are elements to wrap (7th, 8th, 9th, 10th)
    if (elementsToWrap.length > 0) {
        // Create the wrapper div for the 7th, 8th, 9th, 10th elements
        const wrapper = document.createElement('div');
        wrapper.classList.add('aioa-custom-position-wrapper');

        // Insert the wrapper before the parent of the first selected element
        const parent = elementsToWrap[0].parentNode;
        parent.insertBefore(wrapper, elementsToWrap[0]);

        // Move each of the selected elements into the wrapper
        elementsToWrap.forEach(function(element) {
            wrapper.appendChild(element);
        });
    }

    // If the 3rd element exists, wrap it
    if (thirdElement) {
        // Create a new wrapper div for the 3rd element
        const thirdWrapper = document.createElement('div');
        thirdWrapper.classList.add('aioa-widget-position-wrapper');

        // Insert the wrapper before the 3rd element's parent
        const thirdParent = thirdElement.parentNode;
        thirdParent.insertBefore(thirdWrapper, thirdElement);

        // Move the 3rd element into its wrapper
        thirdWrapper.appendChild(thirdElement);
    }
    if (thirteenthElement) {
        // Create a new wrapper div for the 3rd element
        const thirteenthWrapper = document.createElement('div');
        thirteenthWrapper.classList.add('aioa-widget-size-wrapper');

        // Insert the wrapper before the 3rd element's parent
        const thirteenthParent = thirteenthElement.parentNode;
        thirteenthParent.insertBefore(thirteenthWrapper, thirteenthElement);

        // Move the 3rd element into its wrapper
        thirteenthWrapper.appendChild(thirteenthElement);
    }
    if (fifteenthElement) {
        // Create a new wrapper div for the 3rd element
        const fifteenthWrapper = document.createElement('div');
        fifteenthWrapper.classList.add('aioa-custom-size-wrapper');

        // Insert the wrapper before the 3rd element's parent
        const fifteenthParent = fifteenthElement.parentNode;
        fifteenthParent.insertBefore(fifteenthWrapper, fifteenthElement);

        // Move the 11th element into its wrapper
        fifteenthWrapper.appendChild(fifteenthElement);
    }

    // Get the custom switcher checkbox and the two wrapper elements
    const customSwitcher = document.querySelector('.custom-switcher input[type="checkbox"]');
    const widgetWrapper = document.querySelector('.aioa-widget-position-wrapper');
    const customPositionWrapper = document.querySelector('.aioa-custom-position-wrapper');

    // Function to toggle visibility
    function toggleVisibility() {
        if (customSwitcher.checked) {
            // If checkbox is checked, show the custom position wrapper
            customPositionWrapper.style.display = 'flex';
            widgetWrapper.style.display = 'none'; // Optionally hide the widget position wrapper
        } else {
            // If checkbox is unchecked, hide the custom position wrapper
            customPositionWrapper.style.display = 'none';
            widgetWrapper.style.display = 'block'; // Optionally show the widget position wrapper
        }
    }

    // Initial check to set the right visibility based on checkbox state
    toggleVisibility();

    // Add event listener to toggle visibility when checkbox state changes
    customSwitcher.addEventListener('change', toggleVisibility);

    // Get the custom switcher checkbox and the two wrapper elements
    const customSwitcher2 = document.querySelector('.custom-size-switcher input[type="checkbox"]');
    const widgetWrapper2 = document.querySelector('.aioa-widget-size-wrapper');
    const customPositionWrapper2 = document.querySelector('.aioa-custom-size-wrapper');

    // Function to toggle visibility
    function toggleVisibility2() {
        if (customSwitcher2.checked) {
            // If checkbox is checked, show the custom position wrapper
            customPositionWrapper2.style.display = 'block';
            widgetWrapper2.style.display = 'none'; // Optionally hide the widget position wrapper
        } else {
            // If checkbox is unchecked, hide the custom position wrapper
            customPositionWrapper2.style.display = 'none';
            widgetWrapper2.style.display = 'block'; // Optionally show the widget position wrapper
        }
    }

    // Initial check to set the right visibility based on checkbox state
    toggleVisibility2();

    // Add event listener to toggle visibility when checkbox state changes
    customSwitcher2.addEventListener('change', toggleVisibility2);
});

function f1() {
    var loaderDiv = document.getElementById('loader');
    if (loaderDiv) {
        loaderDiv.style.display = 'flex'; // Display the loader
    }
    var server_name = window.location.host;
    var is_widget_custom_position = $('.custom-switcher input').is(':checked') ? 1 : 0;
    var is_widget_custom_size = $('.custom-size-switcher input').is(':checked') ? 1 : 0;

    console.log(is_widget_custom_position, is_widget_custom_size);

    // Other values
    var colorcode = $("#colorcode").val();
    var icon_position = $("#position").val();
    var icon_type = $("#aioa_icon_type").val();
    var icon_size = $("#aioa_icon_size").val();
    var custom_position_x = $("#custom_position_x_value").val() || 0;
    var custom_position_y = $("#custom_position_y_value").val() || 0;
    var x_position_direction = $("#custom_position_x_direction").val() || "to_the_right" || "to_the_left";
    var y_position_direction = $("#custom_position_y_direction").val() || "to_the_bottom" || "to_the_top";
    var widget_position_left = (x_position_direction === "to_the_left") ? custom_position_x : "";
    var widget_position_right = (x_position_direction === "to_the_right") ? custom_position_x : "";
    var widget_position_top = (y_position_direction === "to_the_top") ? custom_position_y : "";
    var widget_position_bottom = (y_position_direction === "to_the_bottom") ? custom_position_y : "";
    var widget_size = $("#widget_size").val();
    var widget_icon_size_custom = $("#widget_icon_size_custom").val() || '';

    // --- ✅ Custom position validation (always runs, between 0–250px) ---
    var xValue = parseInt(custom_position_x, 10);
    var yValue = parseInt(custom_position_y, 10);

    console.log("Custom Position Enabled:", is_widget_custom_position);
    console.log("X Value:", xValue);
    console.log("Y Value:", yValue);
    if (isNaN(xValue) || xValue < 0 || xValue > 250) {
        alert("⚠️ Invalid X position value. Please enter a number between 0 and 250px.");
        $("#custom_position_x_value").focus();
        if (loaderDiv) loaderDiv.style.display = 'none';
        return;
    }

    if (isNaN(yValue) || yValue < 0 || yValue > 250) {
        alert("⚠️ Invalid Y position value. Please enter a number between 0 and 250px.");
        $("#custom_position_y_value").focus();
        if (loaderDiv) loaderDiv.style.display = 'none';
        return;
    }

    // --- ✅ Validation: Custom size between 20 and 150px ---
    if (is_widget_custom_size === 1) {
        if (isNaN(widget_icon_size_custom) || widget_icon_size_custom < 20 || widget_icon_size_custom > 150) {
            alert("⚠️ Invalid Size: The icon size must be between 20 and 150px.");
            $("#widget_icon_size_custom").focus();
            if (loaderDiv) loaderDiv.style.display = 'none';
            return; // Stop execution
        }
    }
    // Send data via API
    var url = 'https://ada.skynettechnologies.us/api/widget-setting-update-platform';
    var params = `u=${server_name}&widget_position=${icon_position}&is_widget_custom_size=${is_widget_custom_size}&is_widget_custom_position=${is_widget_custom_position}&widget_color_code=${colorcode}&widget_icon_type=${icon_type}&widget_icon_size=${icon_size}&widget_size=${widget_size}&widget_icon_size_custom=${widget_icon_size_custom}&widget_position_right=${widget_position_right}&widget_position_left=${widget_position_left}&widget_position_top=${widget_position_top}&widget_position_bottom=${widget_position_bottom}`;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
        if (xhr.status === 200) {
            alert('Settings updated successfully!');
        } else {
            alert('Error: Unable to update settings. Please try again.');
            console.error('Error:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        alert('Request failed. Please check your network connection.');
    };

    // Send the request
    xhr.send(params);

    // Hide the loader when the request is finished
    xhr.onloadend = function () {
        if (loaderDiv) {
            loaderDiv.style.display = 'none';  // Hide loader
        }
    };
}
