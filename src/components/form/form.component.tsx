/**
 * @file form.component.tsx
 * @created Sat Dec 16 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

import './form.styles.scss';

const Form = ({ children, ...otherProps }) => (
    <form className='form' {...otherProps}>
        {children}
    </form>
);

export default Form;