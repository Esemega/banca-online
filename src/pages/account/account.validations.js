import {Validators, createFormValidation} from '@lemoncode/fonk';

const validationSchema = {
    field: {
        type: [
            {
                validator: Validators.required,
                message: 'Por favor, rellene este campo obligatorio.'
            }
        ],
        alias: [
            {
            validator: Validators.required,
            message: 'Por favor, rellene este campo obligatorio.'
            }
        ]
    },
};

export const formValidation = createFormValidation(validationSchema);