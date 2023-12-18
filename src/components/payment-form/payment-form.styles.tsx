import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 800px) {
        h2{ 
            margin-top: 30px;
            font-size: 18px;
        }
    
    }

`;

export const FormContainer = styled.form`
    height: 300px;
    min-width: 80%;
`;

export const PaymentButton = styled(Button)`
    margin: auto;
    margin-top: 50px;
`