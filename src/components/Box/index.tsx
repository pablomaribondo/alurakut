import styled from 'styled-components';

const Box = styled.div`
  background: ${({ theme }) => theme.colors.backgroundTertiary};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 10px;

  .boxLink {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.colorPrimary};
    text-decoration: none;
    font-weight: 800;
  }

  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimaryColor};
    margin-bottom: 20px;
  }

  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: ${({ theme }) => theme.colors.divider};
  }

  input {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.textPrimaryColor};
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;

    ::placeholder {
      color: ${({ theme }) => theme.colors.textPrimaryColor};
      opacity: 1;
    }
  }

  button {
    border: 0;
    padding: 8px 12px;
    color: ${({ theme }) => theme.colors.textSecondaryColor};
    border-radius: 10000px;
    background-color: ${({ theme }) => theme.colors.elementPrimary};
  }
`;

export default Box;
