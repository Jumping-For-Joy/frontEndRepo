import styled from "styled-components";

export const Div = styled.div`

    //mobile devices

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background: #F8FEFE;
    align-items: center;


    h3 {
        margin: 10px
        font-size: 20px;
        font-family: 'Open Sans', sans-serif;
        text-decoration: none; 
        color: #707070;
        text-align: center;
    }
    
    label {
        font-size: 15px;
        display: flex;
        flex-direction: column;
        font-family: 'Open Sans', sans-serif;
        color: #707070;
        align-items: center;
        
        

    }

    input {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 25%;
    }

    button {
        color: #707070;
        background: #8AD7DB;
        border-radius: 20px;
        text-decoration: none;
        border: none;
        padding: 10px;
        margin-top: 10px;
        margin-bottom: 40px;
        display: flex;
        flex-direction: column;
        margin-left: 80px;
    }

    // desktop
    @media(min-width: 1200px) {

    
        input {
            justify-content: center;
            margin: auto;
            display: block;
        }

        button {
            display block; 
            justify-content: center;
            margin: auto;
            margin-top: 20px;
            margin-bottom: 20px;
        }
    }
`