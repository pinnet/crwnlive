import './form-input.styles.scss';
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
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label ? (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>) : null
        }

    </div>
)
export default FormInput;