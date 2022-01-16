import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-bottom: 70px;
    a:visited {
        color: #707070;
    }

    // tablet
    @media(min-width: 768px) {
        width: 800px;
        margin: auto;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-center;
    }
    // desktop
    @media(min-width: 1200px) {
        width: 1000px;
    }
`

// container that holds heading text and link
export const HeaderDiv = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;

    a {
        text-decoration: none;
        padding: 15px;
        font-family: 'Open Sans', sans-serif;
        font-size: 15px;
        background: #8AD7DB;
        border-radius: 20px;
        text-decoration: none;
        border: none;
        display: inline;
        align-items: center;
    }

    a:hover {
        text-decoration: none;
        color: #F8FEFE;
    }

    h3 {
        margin-top: 20px;
        padding-top: 20px;
        font-size: 20px;
        text-align: center;
        font-family: 'Open Sans', sans-serif;
        text-decoration: none; 
        color: #707070;
     }


     // desktop

    @media(min-width: 1200px) {

        h3 {
            margin-top: 10px;
            margin-bottom: 10px;
            padding-top: 10px;
            font-size: 30px;
            text-align: center;
            font-family: 'Open Sans', sans-serif;
            text-decoration: none; 
            color: #707070;
         }

         a {
            text-decoration: none;
            border: solid 1px grey;
            padding: 15px;
            font-family: 'Open Sans', sans-serif;
            font-size: 15px;
            background: #8AD7DB;
            border-radius: 20px;
            text-decoration: none;
            border: none;
            margin-bottom: 15px;
            display: inline;
            align-items: center;
        }
    }
    
`

export const Card = styled.div`
    
    //mobile 
    
    width: 300px;
    height: 400px;
    margin-top: 10px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F8FEFE;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    color: #707070;
    font-family: 'Open Sans', sans-serif;

    // object-fit ensures different sized images all look the same size on the cards
    img {
        width: 250px;
        height: 250px;
        object-fit: cover;
    }

    h3 {
        color: #707070;
        font-family: 'Open Sans', sans-serif;
    }

    // tablet

    @media(min-width: 768px) {
        margin: 10px;
    }

    // desktop

    @media(min-width: 1200px) {
        margin: auto;
        margin-bottom: 10px;
    }
`

export const StyledLink = styled(Link)`
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    color: #707070;

    // desktop
    @media(min-width: 1200px) {
        h3 {
            font-size: 20px;
        }
    }
`
