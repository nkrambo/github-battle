
import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => props.primary ? '#00B5AD' : '#E0E1E2'};
  color: ${(props) => props.primary ? 'white' : 'rgba(0, 0, 0, 0.6)'};
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  margin: 0 0.25em 0 0;
  padding: 0.75em 1.5em;
  text-transform: none;
  text-shadow: none;
  font-weight: 700;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 2px;
  user-select: none;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;

  &:hover {
    background: ${(props) => props.primary ? '#009C95' : '#CACBCD'};
    color: ${(props) => props.primary ? 'white' : 'rgba(0, 0, 0, 0.8)'};
    background-image: none;
    box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, 0.15) inset;
  }
`;

export default Button;
