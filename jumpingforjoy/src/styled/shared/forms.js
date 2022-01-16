import styled from "styled-components";


export const Form = styled.div `
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding-top: 30px;
    margin-top: 60px;
    margin-bottom: 50px;
    width: 500px;
    align-items: center;
    background: #F8FEFE;

    h3 {   
        font-size: 30px;
        text-align: center;
        font-family: 'Open Sans', sans-serif;
        text-decoration: none; 
        color: #707070;
    }

    label {
        justify-content: center;
        display: flex;
        font-size: 15px;
        text-align: center;
        font-family: 'Open Sans', sans-serif;
        text-decoration: none; 
        color: #707070;
        margin-bottom: 10px;
        padding-right: 10px;
    }

    button {
        color: #707070;
        background: #8AD7DB;
        border-radius: 20px;
        text-decoration: none;
        border: none;
        padding: 10px;
        margin-bottom: 15px;
        display: flex;
        justify-content: center;
        font-family: 'Open Sans', sans-serif;
        
    }

    button:hover {
        text-decoration: none;
        color: #F8FEFE;
    }

    section { 
        padding-top: 5px;
        display: flex;
        justify-content: center;
    }

    input {
        display: column;
    }

    p {
        color: #707070;
    }
`

// basic styling for the castle form
export const StyledForm = styled.form`
    width: 300px;
    color: #707070;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Open Sans', sans-serif;
    text-align: center;

    div {
        background: #F8FEFE;
        margin-top: 20px;
    }

    button {
        color: #707070;
        font-size: 15px;
        background: #8AD7DB;
        border-radius: 20px;
        text-decoration: none;
        border: none;
        align-self: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    button:hover {
        color: #F8FEFE;
    }

    input[type="datetime-local"] {
        font-family: 'Open Sans', sans-serif;
    }

    input[type="checkbox"] {
        accent-color: #D9F7FD;
        color: #707070;
    }

    textarea {
        height: 100px;
        font-family: 'Open Sans', sans-serif;
        line-height: 110%;
        padding: 5px;
    }
    
    label {
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
    }

    span {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        // margin-top: 10px;
        // margin-bottom: 10px;
    }

    // tablet and up
    @media(min-width: 768px) {
        width: 500px;
    }
`