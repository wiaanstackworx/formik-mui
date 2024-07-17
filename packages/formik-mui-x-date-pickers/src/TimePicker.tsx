import {
  TimePicker as MuiTimePicker,
  TimePickerProps as MuiTimePickerProps,
} from '@mui/x-date-pickers/TimePicker';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FieldProps, getIn } from 'formik';
import * as React from 'react';
import { createErrorHandler } from './errorHandler';

export interface TimePickerProps
  extends FieldProps,
    Omit<MuiTimePickerProps<Date>, 'name' | 'value' | 'error'> {
  textField?: TextFieldProps;
  children?: React.ReactNode;
}

export function fieldToTimePicker({
  field: { onChange: _onChange, onBlur: fieldOnBlur, ...field },
  form: {
    isSubmitting,
    touched,
    errors,
    setFieldValue,
    setFieldError,
    setFieldTouched,
  },
  textField: { helperText, onBlur, ...textField } = {},
  disabled,
  label,
  onChange,
  onError,
  slots,
  ...props
}: TimePickerProps): MuiTimePickerProps<Date> {
  const fieldError = getIn(errors, field.name);
  const showError = getIn(touched, field.name) && !!fieldError;

  return {
    slots: {
      textField:
        textField &&
        ((params) => (
          <TextField
            {...params}
            error={showError}
            helperText={showError ? fieldError : helperText}
            label={label}
            onBlur={
              onBlur ??
              function () {
                setFieldTouched(field.name, true, true);
              }
            }
            {...textField}
          />
        )),
    },
    disabled: disabled ?? isSubmitting,
    onChange:
      onChange ??
      function (date) {
        // Do not switch this order, otherwise you might cause a race condition
        // See https://github.com/formium/formik/issues/2083#issuecomment-884831583
        setFieldTouched(field.name, true, false);
        setFieldValue(field.name, date, true);
      },
    onError:
      onError ?? createErrorHandler(fieldError, field.name, setFieldError),
    ...props,
  };
}

export function TimePicker({ children, ...props }: TimePickerProps) {
  return (
    <MuiTimePicker {...fieldToTimePicker(props)}>{children}</MuiTimePicker>
  );
}

TimePicker.displayName = 'FormikMUITimePicker';
