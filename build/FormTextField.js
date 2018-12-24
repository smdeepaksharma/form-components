var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import { Field } from "redux-form";
import TextField from '@material-ui/core/TextField';
import { isPresent } from "./utitlities/global_utitlities";

var FormTextField = function FormTextField(props) {
    return React.createElement(Field, _extends({ component: renderField }, props));
};

var renderField = function renderField(_ref) {
    var input = _ref.input,
        fullWidth = _ref.fullWidth,
        _ref$meta = _ref.meta,
        error = _ref$meta.error,
        touched = _ref$meta.touched,
        helperText = _ref.helperText,
        custom = _objectWithoutProperties(_ref, ["input", "fullWidth", "meta", "helperText"]);

    return React.createElement(TextField, _extends({
        fullWidth: isPresent(fullWidth) ? fullWidth : false,
        helperText: touched && typeof error === "string" && error.length > 0 ? error : helperText || ''
    }, input, custom));
};

export default FormTextField;