import { Validators, createFormValidation } from '@lemoncode/fonk';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';
const validationSchema = {
  field: {
    title: [
      {
        validator: Validators.required,
        message: 'El campo título es obligatorio',
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 3 },
        message: 'El título no cumple con la longitud mínima',
      },
    ],

    notes: [
      {
        validator: Validators.required,
        message: 'El campo comentarios es obligatorio',
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 3 },
        message: 'El comentario no cumple con la longitud mínima',
      },
    ],

    email: [
      {
        validator: Validators.required,
        message: 'El campo email es obligatorio',
      },
      {
        validator: Validators.email,
        message: 'Email no válido, no cumple con el formato de un email',
      },
    ],

    phone: [
      {
        validator: Validators.required,
        message: 'El campo teléfono es obligatorio',
      },
      {
        validator: Validators.pattern,
        customArgs: {
          pattern: /^\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}&/,
        },
        message: 'El número de teléfono introducido es incorrecto, no cumple con el formato de un teléfono',
      },
    ],

    price: [
      {
        validator: positiveNumber.validator,
        message: 'La cantidad introducida no es correcta. No puede ser un valor negativo',
      },
      {
        validator: Validators.required,
        message: 'El campo precio es obligatorio',
      },
    ],

    saleTypes: [
      {
        validator: arrayRequired.validator,
        customArgs: { minLength: 1, maxLength: 4 },
        message: 'La lista debe tener al menos 1 elemento',
      },
    ],

    address: [
      {
        validator: Validators.required,
        message: 'El campo dirección postal es obligatorio',
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 3 },
        message: 'La dirección introducida no cumple con la longitud mínima',
      },
    ],

    city: [
      {
        validator: Validators.required,
        message: 'El campo localidad es obligatorio',
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 3 },
        message: 'La localidad introducida no cumple con la longitud mínima',
      },
    ],
    province: [
      {
        validator: Validators.required,
        message: 'Es necesario seleccionar una provincia',
      },
    ],

    squareMeter: [
      {
        validator: positiveNumber.validator,
        message: 'La cantidad introducida no es correcta. No puede ser un valor negativo',
      },
      {
        validator: Validators.required,
        message: 'El campo metros cuadrados es obligatorio',
      },
    ],

    rooms: [
      {
        validator: positiveNumber.validator,
        message: 'La cantidad introducida no es correcta. No puede ser un valor negativo',
      },
      {
        validator: Validators.required,
        message: 'El campo habitaciones es obligatorio',
      },
    ],

    bathrooms: [
      {
        validator: positiveNumber.validator,
        message: 'La cantidad introducida no es correcta. No puede ser un valor negativo',
      },
      {
        validator: Validators.required,
        message: 'El campo cuartos de baño es obligatorio',
      },
    ],

    locationUrl: [
        {
          validator: Validators.required,
          message: 'El campo URL ubicación es obligatorio',
        },
        {
          validator: Validators.pattern,
        customArgs: { pattern: /^(http|https)\:\/\/www\.google\.com\/maps\/embed\?/ },
        },
      ],

    mainFeatures: [
      {
        validator: arrayRequired.validator,
        customArgs: { minLength: 1, maxLength: 30 },
        message: 'Debe añadir al menos una característica',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);