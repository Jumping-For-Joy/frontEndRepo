import styled from 'styled-components'


export const Nav = styled.nav`

    // mobile 

    display: flex;
    justify-content: left;
    width: 90%; 
    flex-direction: space-between;
    background: #F8FEFE;
    height: 50px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    border-radius: 20px;

    img {
        justify-content: right;
        display: flex;
        width: 15%; 
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

        img {
            justify-content: right;
            display: flex;
            width: 15%; 
        }
    }
`

export const UnorderedList = styled.ul`
    
    // mobile 

    list-style-type: none;
    margin: 4px;
    padding: 4px;

    li {
        float: left;
        display: flex;
        padding: 3px;
        
    }

    li a {
        font-size: 10px;
        display: flex;
        flex-direction: row;
        text-decoration: none;
        color: #707070;
        justify-content: left;
        font-family: 'Open Sans', sans-serif;
        text-decoration: none;
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
        
        
        
    
`