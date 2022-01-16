import styled from 'styled-components'

export const Nav = styled.nav`
    // mobile 
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F8FEFE;
    height: 70px;
    width: calc(100% - 10px);
    border-radius: 20px;
    margin-top: 20px;
    font-family: 'Open Sans', sans-serif;

    img {
        height: calc(100% - 10px);
        margin-left: auto;
        padding: 10px;
    }

    // desktop
    @media(min-width: 1200px) {
        height: 50px;
        margin: 20px;
        border-radius: 20px;
    }
`

export const UnorderedList = styled.ul`
    // mobile 
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
        display: inline;
        padding: 5px;
    }
    li a {
        color: #707070;
        text-decoration: none;
        transition: transform 0.3s;
    }
    li a:hover {
        transform: scale(1.1);
        color: #8AD7DB;
    }

    //tablet and up
    @media(min-width: 768px) {
        li {
            padding-left: 15px;
        }
        li a {
            font-size: 18px;
        }
    }
`