
import $ from "jquery";

export function isBlank(object) {
    'use strict';

    return $.isPlainObject(object) && $.isEmptyObject(object) || $.isArray(object) && object.length === 0 || typeof object === 'string' && $.trim(object) === '' || !object && object !== 0;
}

export function isPresent(object) {
    return !isBlank(object);
}