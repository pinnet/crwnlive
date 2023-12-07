import './form.styles.scss';

const Form = ({ children, ...otherProps }) => (
    <form className='form' {...otherProps}>
        {children}
    </form>
);

export default Form;