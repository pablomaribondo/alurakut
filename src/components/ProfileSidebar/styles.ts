import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.colorPrimary};
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;

    img {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }
  }
`;
