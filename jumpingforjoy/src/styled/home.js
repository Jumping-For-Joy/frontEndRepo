import styled from 'styled-components'
import {Link} from 'react-router-dom' 

export const Section = styled.section`
    
    // mobile + tablet 

    img {
        display: block;
        margin-top: 90px;
        justify-content: center;
        width: 100%;
    }
    button {
        position: absolute;
        top: 70%;
        right: 4%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        background-color: #8AD7DB;
        color: #707070;
        font-size: 16px;
        padding: 10px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }

    button:hover {
        color: #F8FEFE;
    }

    @media(min-width: 768px) {
        img {
            height: 700px;
        }

        button {
            top: 78%;
        }
    }

    // desktop

    @media(min-width: 1200px) {


    div {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        margin: auto;
        display: block; 
        width: 200%; 
        height: 800px;
    }

    

    
`

export const StyledLink = styled(Link)`
    
        position: absolute;
        top: 70%;
        right: 4%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        background-color: #8AD7DB;
        color: #707070;
        font-size: 16px;
        padding: 10px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        text-decoration: none;
        


    a:hover {
        color: #F8FEFE;
    }

    // desktop

    @media(min-width: 1200px) {
        
        position: absolute;
        top: 78%;
        left: 65%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        background-color: #8AD7DB;
        color: #707070;
        font-size: 16px;
        padding: 10px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        width: 10%;

        a:hover {
            color: #F8FEFE;
        }
    }

`