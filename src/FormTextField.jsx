import React from "react";
import {Field} from "redux-form";
import TextField from '@material-ui/core/TextField';
import {isPresent} from "./utitlities/global_utitlities";


const FormTextField = (props) => {
    return (
        <Field component={renderField} {...props}/>
    )
};

const renderField = ({input, fullWidth, meta: {error, touched}, helperText, ...custom}) => {
    return (<TextField
        fullWidth={isPresent(fullWidth) ? fullWidth : false}
        helperText={(touched && (typeof error === "string" && error.length > 0)) ? error : (helperText || '')}
        {...input}
        {...custom}
    />)
};

export default FormTextField