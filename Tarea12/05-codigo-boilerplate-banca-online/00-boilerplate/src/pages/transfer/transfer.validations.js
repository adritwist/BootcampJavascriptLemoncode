import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { laterDate } from '@lemoncode/fonk-later-date-validator';

const validationSchema = {
  field: {
    iban: [
      {
        validator: Validators.required,
        message: 'El campo iban es obligatorio',
      },
      {
        validator: iban.validator,
        message: 'IBAN incorrecto',
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: 'El campo beneficiario es obligatorio',
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 3 },
        message: 'El valor introducido no cumple con la longitud mínima',
      },
    ],
    amount: [
     
      {
        validator: Validators.required,
        message: 'El campo importe es obligatorio',
      },
      {
        validator: positiveNumber.validator,
        message: 'La cantidad introducida no puede ser negativa',
      },
    ],
    concept: [
      {
        validator: Validators.required,
        message: 'El campo concepto es obligatorio',
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 3 },
        message: 'El valor introducido no cumple con la longitud mínima',
      },
    ],
    day: [
      
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^([1-9]|[1-2]\d|3[01])$/ },
      },
    ],
    month: [
      
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^([1-9]|1[012])$/ },
      },
    ],

    year: [
      
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^2[0-9][2-9](\d{1})$/ },
      },
    ],

    date: [
      {
        validator: laterDate.validator,
        customArgs: {
          parseStringToDateFn: (value) => new Date(value),
          date: new Date(),
        },
        message: 'La fecha introducida no es correcta',
      },
     
    ],

    email: [
      {
        validator: Validators.email,
        message: 'EL email introducido no es válido',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);