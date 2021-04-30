import styled, { css } from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 4rem;

  top: 0;
  z-index: 10;
  position: sticky;
  position: -webkit-sticky;

  padding: 0 0.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-bottom: 1px solid rgb(243, 244, 244);
  background-color: #eee;
`;

export const Button = styled.button`
  height: 3rem;
  width: 3rem;
  margin-right: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #333;

  border-radius: 0.25rem;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid transparent;

  transition: all 0.15s ease;

  ${props => props.isActive && css`
    background-color: rgba(0, 0, 0, .08);
    border: 1px solid rgba(0, 0, 0, .24);
  `}

  :hover {
    background-color: rgba(0, 0, 0, 0.12);
  }
`;

export const Separator = styled.div`
  width: 1px;
  height: 3rem;

  background-color: rgba(0, 0, 0, .24);
  margin: 0 1rem;
`