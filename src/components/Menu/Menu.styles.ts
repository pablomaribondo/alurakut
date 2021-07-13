import styled from 'styled-components';

export const Wrapper = styled.header<{ isMenuOpen: boolean }>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.elementTertiary};

  .alurakutMenuProfileSidebar {
    background: ${({ theme }) => theme.colors.backgroundTertiary};
    position: fixed;
    z-index: 100;
    padding: 46px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 48px;
    transition: 0.3s;
    pointer-events: ${({ isMenuOpen }) => (isMenuOpen ? 'all' : 'none')};
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? '1' : '0')};
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'translateY(0)' : 'translateY(calc(-100% - 48px))'};
    @media (min-width: 860px) {
      display: none;
    }
    > div {
      max-width: 400px;
      margin: auto;
    }
    a {
      font-size: 18px;
    }
    .boxLink {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.colorPrimary};
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 800;
    }

    hr {
      margin-top: 12px;
      margin-bottom: 8px;
      border-color: transparent;
      border-bottom-color: ${({ theme }) => theme.colors.divider};
    }
  }

  .container {
    background-color: ${({ theme }) => theme.colors.elementTertiary};
    padding: 7px 16px;
    max-width: 1110px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 101;
    @media (min-width: 860px) {
      justify-content: flex-start;
    }

    button {
      border: 0;
      background: transparent;
      align-self: center;
      display: inline-block;
      @media (min-width: 860px) {
        display: none;
      }
    }

    nav {
      display: none;
      @media (min-width: 860px) {
        display: flex;
      }
      a {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.textSecondaryColor};
        padding: 10px 16px;
        position: relative;
        text-decoration: none;
        &:after {
          content: ' ';
          background-color: ${({ theme }) => theme.colors.elementQuarternary};
          display: block;
          position: absolute;
          width: 1px;
          height: 12px;
          margin: auto;
          left: 0;
          top: 0;
          bottom: 0;
        }
      }
    }
    input {
      color: ${({ theme }) => theme.colors.textSecondaryColor};
      background: ${({ theme }) => theme.colors.elementSecondary};
      padding: 10px 42px;
      border: 0;
      background-image: url(${`${process.env.NEXT_PUBLIC_BASE_URL}/icons/search.svg`});
      background-position: 15px center;
      background-repeat: no-repeat;
      border-radius: 1000px;
      font-size: 12px;
      ::placeholder {
        color: ${({ theme }) => theme.colors.textSecondaryColor};
        opacity: 1;
      }
    }
  }
`;
export const Logo = styled.img`
  background-color: ${({ theme }) => theme.colors.backgroundTertiary};
  padding: 9px 14px;
  border-radius: 1000px;
  height: 34px;
`;
