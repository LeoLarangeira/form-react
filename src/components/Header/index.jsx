import React from "react";
import logo from '../../assets/logo-dio.png'
import { useNavigate  } from "react-router-dom";

import {Button} from '../Button'
import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';


const Header = ({autenticado}) => {
  const navigate = useNavigate()
  const handleRegister = () => {
    navigate('/register')
  }
  const handleLogin = () => {
    navigate('/login')
  }
    return (
      <Wrapper>
        <Container>
            <Row>
              <img src={logo} alt="Logo da dio"/>
              {autenticado ? (
                <>
                 <BuscarInputContainer>
                  <Input placeholder='Buscar...'/>
                 </BuscarInputContainer>
                  <Menu>Live Code</Menu>
                  <Menu>Global</Menu>
                </>
              ) : null}
            </Row>
            <Row>
                {autenticado ? (
                  <UserPicture src="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?q=65&auto=format&w=800&ar=2:1&fit=crop"/>
                ) : (
                <>
                  <MenuRight href="/">Home</MenuRight>
                  <Button title="Login" onClick={handleLogin} />
                  <Button title="Register" onClick={handleRegister}/>
                </>)}
            </Row>
        </Container>
      </Wrapper>
    )
  }
  
  export { Header }