/*
 * custom-button.component.jsx
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import './custom-button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

/**
 * CustomButton component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.buttonType - The type of button.
 * @param {ReactNode} props.children - The content of the button.
 * @param {Object} props.otherProps - Additional props for the button element.
 * @returns {JSX.Element} The rendered CustomButton component.
 */
const CustomButton = ({ children, buttonType, ...otherProps }) => (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;