/**
 * @file form-input.component.tsx
 * @created Sat Dec 16 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/
import { FC,InputHTMLAttributes } from 'react';
import { FormInputLabel, Input, Group} from  './form-input.styles';

export type FormInputProps = {
    label?: string,
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput : FC<FormInputProps> = ({ label, ...otherProps }) :JSX.Element => (
    <Group>
        <Input {...otherProps as React.InputHTMLAttributes<HTMLInputElement>} />
        {
            label && (
            <FormInputLabel $shrink={Boolean(otherProps.value && typeof otherProps.value === 'string' &&  otherProps.value.length)}>
                {label}
                </FormInputLabel>)
        }
    </Group>
)
export default FormInput;