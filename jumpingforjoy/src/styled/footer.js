import styled from 'styled-components'

export const StyledFooter = styled.div`
    background: #F8FEFE;
    margin-top: auto;
    justify-content: center;
    height: 50px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    font-family: 'Open Sans', sans-serif;
    color: #707070;
    position: fixed;
    bottom: 0;
    width: 85%;

    p {
        text-align: center;
        padding-bottom: 15px;
        
    }

    // desktop
    @media(min-width: 1200px) {

        background: #F8FEFE;
        margin-top: auto;
        justify-content: center;
        height: 50px;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        border-radius: 20px;
        font-family: 'Open Sans', sans-serif;
        color: #707070;
        position: fixed;
        bottom: 0;
        width: 97%;
    
        p {
            text-align: center;
            padding-bottom: 15px;
            
        }  
    }

`