import React from "react";
import {css} from '@emotion/css'
import styled from '@emotion/styled'


const Header = () => {
    return (
        <Container>
            <div>
                <i className="fa-solid fa-face-smile"></i>
                <Title href=''>알고나라</Title>
            </div>
            <Center>
                <CenterList><Title href="">Home</Title></CenterList> 
                <CenterList><Title href="">Gallery</Title></CenterList> 
                <CenterList><Title href="">Wedding</Title></CenterList> 
                <CenterList><Title href="">FAQ</Title></CenterList> 
                <CenterList><Title href="">BOOKING</Title></CenterList> 
            </Center>
            <ul>
                <Logo className="fa-brands fa-twitter"></Logo>
                <Logo className="fa-brands fa-facebook"></Logo>
            </ul>
        </Container>   
   )
}
const Container = styled.nav({
   
    backgroundColor: '#263343',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
   padding:'20px'
   
})
const Title = styled.a({
    color: 'white',
    textDecoration:'none'
})

const Logo = styled.i({
    fontSize: '24px',
    color:'white'
})

const Center = styled.ul({
    display: "flex",
    listStyle: 'none',
    padding: 0
})
const CenterList = styled.li({
    padding: '8px 12px'
})

export default Header;