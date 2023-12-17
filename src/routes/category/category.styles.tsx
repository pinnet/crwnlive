import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 35px;
  text-align: center;
  margin-top: 0px;
  
`;

export const BackLink = styled(Link)`
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 14px;
`;
