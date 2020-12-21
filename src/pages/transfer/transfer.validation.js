import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { isNumber } from '@lemoncode/fonk-is-number-validator';

const messageRequired = 'Por favor, rellene este campo obligatorio.';

const validationSchema = {
  field: {
    accountId: [
      {
        validator: Validators.required,
        message: messageRequired,
      },
    ],
    iban: [
      {
        validator: Validators.required,
        message: messageRequired,
      },
      {
        validator: iban.validator,
        message: 'Por favor, introduzca un iban válido.',
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: messageRequired,
      },
    ],
    amount: [
      {
        validator: Validators.required,
        message: messageRequired,
      },
      {
        validator: isNumber.validator,
        message: 'Por favor, introduzca un número.',
      },
    ],
    concept: [
      {
        validator: Validators.required,
        message: messageRequired,
      },
    ],
    day: [
      {
        validator: isNumber.validator,
        message: 'Por favor, introduzca un número.',
      },
    ],
    month: [
      {
        validator: isNumber.validator,
        message: 'Por favor, introduzca un número.',
      },
    ],
    year: [
      {
        validator: isNumber.validator,
        message: 'Por favor, introduzca un número.',
      },
    ],
    email: [
      {
        validator: Validators.email,
        message: 'Por favor, introduzca un email válido.',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
