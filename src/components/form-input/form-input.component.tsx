/**
 * @file form-input.component.tsx
 * @created Sat Dec 16 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

import { FormInputLabel, Input, Group} from  './form-input.styles';

export type FormInputProps = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label?: string,
    value: string,
    name: string,
    type: string,
    required?: boolean
};
const FormInput = ({ handleChange, label, ...otherProps }: FormInputProps) :JSX.Element => (
    <Group>
        <Input onChange={handleChange} {...otherProps} />
        {
            label ? (<FormInputLabel $srink={otherProps.value.length}>{label}</FormInputLabel>) : null
        }
    </Group>
)
export default FormInput;