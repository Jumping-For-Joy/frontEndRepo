import styled from 'styled-components'


export const Nav = styled.nav`
    // mobile 

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%; 
    background: #F8FEFE;
    height: 70px;
    border-radius: 20px;

    img {
        height: calc(100% - 10px);
        margin-left: auto;
        padding: 10px;
    }

    // desktop

    @media(min-width: 1200px) {
        display: flex;
        justify-content: left;
        width: 98%; 
        flex-direction: space-between;
        background: #F8FEFE;
        height: 50px;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 20px;
        border-radius: 20px;
    }
`

export const UnorderedList = styled.ul`
    // mobile 

    list-style-type: none;
    margin: 3px;

    li a {
        display: flex; 
        flex-direction: inline-block;
        padding-top: 6px;
        font-size: 10px;
        color: #707070;
        font-family: 'Open Sans', sans-serif;
        text-decoration: none;

    }

    li a:hover {
        transform: scale(1.1);
        color: #8AD7DB;
    }

    // desktop

    @media(min-width: 1200px) {
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
            font-size: 20px;
            justify-content: center;
            font-family: 'Open Sans', sans-serif;
            text-decoration: none;
        }

        li a:hover {
            transform: scale(1.1);
            color: #8AD7DB;
        }
    }
`