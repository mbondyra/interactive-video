import styled from 'styled-components'

export const Description = styled.div`

	opacity: ${props => (props.visible ? '1' : '0')};
	transition: 0.2s all ease-in;
  font-weight: 100;
  font-size: 13px;
  position: fixed;
  left: 74px;
  top: 50%;
  transform: translateY(-50%);
  width: 245px;
  color: white;
  z-index: 300;
  
  h1 {
    font-weight: 600;
    margin: 0;
    font-size: 13px;
    line-height: 19px;
    margin-bottom: 20px;
  }
  a {    
    display: block;
    margin-top: 30px;
    font-weight: 500;
    font-size: 11px;
    text-decoration: none;
    cursor: pointer;
    letter-spacing: 1px;
  }
  a.link { 
    font-weight: 500;
    font-size: 13px;
    border: 1px solid;
    display: inline-block;
    padding: 6px 20px;
    margin-top: 28px;
  }
  
`

