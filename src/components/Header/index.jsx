import styled from "styled-components";
import DarkModeSwitch from "./components/DarkModeSwitch";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1};
  border: 1px solid ${({ theme }) => theme.borderBase};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  .logo {
    display: flex;
    width: 100%;
    img {
      max-width: 45px;
      filter: ${(theme) => theme.theme.filterLogo};
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <DarkModeSwitch />
    </StyledHeader>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img src="/logo.svg" alt="Logo da shild" />
    </div>
  );
}
