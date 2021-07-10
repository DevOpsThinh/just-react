/**
 * Topic: Learning React
 * Student name: Nguyen Truong Thinh
 * Created At: 10/ 7 / 2021
 * Section: Web client with React
 * Part: Button component
 */
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
  background-color: #0077cc;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active {
    background-color: #005fa3;
  }
`;

export default Button;
