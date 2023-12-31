/**
 * @file form.component.tsx
 * @created Sat Dec 16 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/
import { FormHTMLAttributes } from 'react';
import './form.styles.scss'
export type FormProps = {
} & FormHTMLAttributes<HTMLFormElement>;


const Form = ({ children, ...otherProps }: FormProps) => (
    <form className='form' {...otherProps}>
        {children}
    </form>
);

export default Form;