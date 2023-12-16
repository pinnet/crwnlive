/**
 * @file spinner.component.jsx
 * @created Tue Dec 12 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/
import { SpinnerOverlay, SpinnerContainer, } from './spinner.styles'

const Spinner = () => {
    return (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    )
}
  
export default Spinner;