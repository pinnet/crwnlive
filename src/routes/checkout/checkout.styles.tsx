import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 0;
  @media screen and (max-width: 800px) {
    width:80%;
    h1{
      font-size: 22px;
    }
  }
  @media screen and (max-width: 400px) {
    width:98%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  @media screen and (max-width: 800px) {
    font-size: 11px;
  }
  @media screen and (max-width: 400px) {
    width:95%;
    font-size: 8px;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 22px;
  @media screen and (max-width: 800px) {
    margin-top: 20px;
    font-size: 22px;
  }
  @media screen and (max-width: 400px) {
    margin-top: 10px;
    font-size: 18px;
  }
`;
