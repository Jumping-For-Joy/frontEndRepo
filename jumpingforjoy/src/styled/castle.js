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
    border: solid 1px red;
    color: #707070;

    h3 {
        font-size: 20px;
    }

    p {
        font-size: 15px;
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
        color: #8AD7DB;
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

