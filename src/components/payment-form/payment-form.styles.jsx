import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
    width: 100%;
    height: 600px
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FormContainer = styled.form`
   height 300px;
   minimum-width: 500px;
`;

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 50px;
`