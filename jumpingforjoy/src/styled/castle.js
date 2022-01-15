import styled from 'styled-components'

export const Div = styled.div`
    

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 20px;
    width: 300px;
    align-items: center;
    background: #F8FEFE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 80px;
    margin-top: 20px;

    h3 {
        margin-top; 20px;
        padding-top: 20px;
        font-size: 20px;
        text-align: center;
        font-family: 'Open Sans', sans-serif;
        text-decoration: none; 
        color: #707070;
        }

    p {
        font-size: 15px;
        text-align: center;
        font-family: 'Open Sans', sans-serif;
        text-decoration: none; 
        color: #707070;
        margin-bottom: 10px;
        }

    img {
        display: block;
        margin: 0;
        max-width: 90%;
        object-fit: cover;
      }


    button {
        color: #707070;
        background: #8AD7DB;
        border-radius: 20px;
        text-decoration: none;
        border: none;
        padding: 10px;
        margin-bottom: 20px;
        display: inline;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: #707070;
        border: none;
        padding: 10px;
    }

    a:hover {
    text-decoration: none;
    color: #F8FEFE;
    }

    button:hover {
        text-decoration: none;
        color: #F8FEFE;
    }

    section {
        justify-content: center;
        display: flex;
    }

    // tablet and up
    @media(min-width: 768px) {
        width: 500px;
    }

`

