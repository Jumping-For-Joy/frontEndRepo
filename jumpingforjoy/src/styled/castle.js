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
    font-family: 'Open Sans', sans-serif;
    color: #707070;

    h3 {
        font-size: 20px;
    }

    p {
        font-size: 15px;
        margin-bottom: 10px;
        text-align: center;
    }

    img {
        display: block;
        margin: 0;
        max-width: 90%;
        object-fit: cover;
    }


    button {
        color: #707070;
        font-size: 15px;
        background: #8AD7DB;
        border-radius: 20px;
        text-decoration: none;
        border: none;
        padding: 10px;
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        display: flex;
        justify-content: center;

    }

    a {
        font-size: 15px;
        color: #707070;
        background: #8AD7DB;
        border-radius: 20px;
        text-decoration: none;
        border: none;
        padding: 10px;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    a:hover {
        text-decoration: none;
        color: #F8FEFE;
    }

    button:hover {
        text-decoration: none;
        color: #F8FEFE;
        cursor: pointer;
    }

    // tablet and up
    @media(min-width: 768px) {
        width: 500px;
    }

`

