import styled from 'styled-components';

//   body.dark{
//     background-color: #333;
// }

  export const Label = styled.label`
    width: 60px;
    height: 26px;
    background-color: #111;
    display:flex;
    border-radius: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
  `;


  export const Ball = styled.div`
    width: 20px;
    height: 20px;
    background-color: white;
    position: absolute;
    top:2px;
    left: 2px;
    border-radius: 50%;
    transition: transform 0.4s linear;
  `;
  export const Checkbox = styled.input`
  opacity: 0;
  position: absolute;
  &:checked + ${Label} ${Ball}{
    transform: translateX(36px);
  }
`;

  
  