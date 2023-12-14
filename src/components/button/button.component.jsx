/*
 * button.component.jsx
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import { BaseButton, ButtonSpinner, GoogleSignInButton, InvertedButton } from './button.styles.jsx';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,

    }[buttonType]);

/**
 * Button component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.buttonType - The type of button.
 * @param {ReactNode} props.children - The content of the button.
 * @param {Object} props.otherProps - Additional props for the button element.
 * @returns {JSX.Element} The rendered Button component.
 */
const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton disabled={isLoading} {...otherProps}>
        {isLoading ? <ButtonSpinner /> : children}
        </CustomButton>
    )
};

export default Button;