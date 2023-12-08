/*
 * form.component.jsx
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import './form.styles.scss';

const Form = ({ children, ...otherProps }) => (
    <form className='form' {...otherProps}>
        {children}
    </form>
);

export default Form;