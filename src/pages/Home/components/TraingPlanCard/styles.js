import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 400px;
  max-height: 500px;
  margin: 25px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  text-align: center;
`;
export const HeadImage = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${(props) => props.customImage});
  background-size: cover;
`;

export const Title = styled.div`
  padding: 25px 10px 10px;
  font-size: 24px;
`;

export const Description = styled.div`
  padding: 0px 25px;
  text-align: left;
  letter-spacing: 1.5px;
`;

export const ButtonContainer = styled.form`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
`;

export const Button = styled.button`
  margin: 25px 0px;
  color: white;
  height: 40px;
  border: none;
  outline: none;
  width: 50%;
  background-color: rgb(34, 140, 219);
  cursor: pointer;
`;
