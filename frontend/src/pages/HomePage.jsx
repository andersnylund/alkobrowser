/* eslint-disable import/no-named-as-default */
import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

import ProductList from '../components/ProductList';
import Filters from '../components/Filters';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .filters {
    margin-top: -4rem;
    box-shadow: var(--box-shadow-md);
    border-radius: var(--size-5);
  }
`;

const ProductContainer = styled(Container)`
  padding: var(--size-8) 0;
`;
const Index = () => (
  <>
    <Content>
      <div className="filters">
        <Filters />
      </div>
      <ProductContainer>
        <ProductList />
      </ProductContainer>
    </Content>
  </>
);

export default Index;