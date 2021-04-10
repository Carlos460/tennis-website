import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  z-index: 10;

  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.12);
  width: 100%;
  height: 75px;
  background-color: #2998ff;
  color: white;
`;

export const BrandName = styled.div`
  margin: auto 75px;

  font-size: 34px;
`;

export const LinkList = styled.ul`
  margin: auto 125px;
  display: flex;
  justify-content: space-around;
  width: 360px;
  text-decoration: none;
  list-style: none;

  font-size: 24px;
`;

export const Link = styled.li`
  cursor: pointer;
`;
