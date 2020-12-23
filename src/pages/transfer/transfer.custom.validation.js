export const dayValidator = (fieldValidatorArgs) => {
  const { value } = fieldValidatorArgs;

  const validationResult = {
    succeeded: false,
    type: 'MY_DAY_VALIDATOR',
    message: 'Por favor, introduzca un día válido.',
  };

  if (value === '' || (value > 0 && value < 32)) {
    validationResult.succeeded = true;
    validationResult.message = '';
  }
  return validationResult;
};

export const monthValidator = (fieldValidatorArgs) => {
  const { value } = fieldValidatorArgs;

  const validationResult = {
    succeeded: false,
    type: 'MY_MONTH_VALIDATOR',
    message: 'Por favor, introduzca un mes válido.',
  };

  if (value === '' || (value > 0 && value < 13)) {
    validationResult.succeeded = true;
    validationResult.message = '';
  }
  return validationResult;
};

export const yearValidator = (fieldValidatorArgs) => {
  const { value } = fieldValidatorArgs;

  const validationResult = {
    succeeded: false,
    type: 'MY_YEAR_VALIDATOR',
    message: 'Por favor, introduzca un año válido.',
  };

  const now = new Date();

  if (
    value === '' ||
    (value >= now.getFullYear() && value < now.getFullYear() + 2)
  ) {
    validationResult.succeeded = true;
    validationResult.message = '';
  }
  return validationResult;
};

const isLeapYear = (year) => {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

export const dateValidator = (fieldValidatorArgs) => {
  const { value } = fieldValidatorArgs;

  const validationResult = {
    succeeded: false,
    type: 'MY_DATE_VALIDATOR',
    message: 'Por favor, introduzca una fecha válida.',
  };

  const arrayDate = value.split('-');
  const [year, month, day] = arrayDate.map((element) => Number(element));

  const lastDayByMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (isLeapYear(year)) {
    lastDayByMonth[1] = 29;
  }

  if (value === '' || (day > 0 && day <= lastDayByMonth[month - 1])) {
    validationResult.succeeded = true;
    validationResult.message = '';
  }

  // const newDate = new Date(year, month, day);

  // if (value === '' || (
  //   newDate.getFullYear() === Number(year) &&
  //   newDate.getMonth() === Number(month) &&
  //   newDate.getDate() === Number(day))
  // ) {

  //   validationResult.succeeded = true;
  //   validationResult.message = '';
  // }

  //   if (value && value[0] === 'E' && value[1] === 'S') {
  //     validationResult.succeeded = true;
  //     validationResult.message = '';
  //   }
  return validationResult;
};

/**
 * function isValidDate(year, month, day) {
    var d = new Date(year, month, day);
    if (d.getFullYear() == year && d.getMonth() == month && d.getDate() == day) {
        return true;
    }
    return false;
}
 */
