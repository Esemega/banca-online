import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { isNumber } from '@lemoncode/fonk-is-number-validator';
import { laterDate } from '@lemoncode/fonk-later-date-validator';
import {
  dayValidator,
  monthValidator,
  yearValidator,
  dateValidator,
} from './transfer.custom.validation';

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
      {
        validator: dayValidator,
      },
    ],
    month: [
      {
        validator: isNumber.validator,
        message: 'Por favor, introduzca un número.',
      },
      {
        validator: monthValidator,
      },
    ],
    year: [
      {
        validator: isNumber.validator,
        message: 'Por favor, introduzca un número.',
      },
      {
        validator: yearValidator,
      },
    ],
    date: [
      {
        validator: dateValidator,
      },
      {
        validator: laterDate.validator,
        message: 'Por favor, introduzca una fecha posterior.',
        customArgs: {
          date: new Date(),
          parseStringToDateFn: (value) => new Date(value),
        },
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
