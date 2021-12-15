import styled from 'styled-components'


export const Nav = styled.nav`
    display: flex;
    justify-content: left;
    width: 100%; 
    flex-direction: space-between;
    background: #F8FEFE;
    height: 50px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    border-radius: 20px;

    img {
        float: right;
    }
    
`

export const UnorderedList = styled.ul`
    list-style-type: none;
    margin: 4px;
    padding: 4px;
    li {
        float: left;
        padding: 7px;
        
    }

    li a {
        display: block;
        text-decoration: none;
        color: #707070;
    }
    
    font-size: 20px;
    justify-content: center;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
    
    
`