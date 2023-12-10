/*
 * form-input.component.jsx
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import { FormInputLabel, Input, Group} from  './form-input.styles';
/**
 * A reusable form input component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.handleChange - The function to handle input change.
 * @param {string} props.label - The label for the input.
 * @param {Object} props.otherProps - Additional props for the input element.
 * @returns {JSX.Element} The rendered FormInput component.
 */
const FormInput = ({ handleChange, label, ...otherProps }) => (
    <Group>
        <Input onChange={handleChange} {...otherProps} />
        {
            label ? (<FormInputLabel srink={otherProps.value.length}>{label}</FormInputLabel>) : null
        }
    </Group>
)
export default FormInput;