import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Card = styled.div`
    text-align: center;
    margin-top: 20px;
    background-color: #F8FEFE;
    padding: 30px;
    width: 300px;
    p, a, h3 {
        font-family: sans-serif;
        color: #707070;
        padding: 10px;
    }
    a:visited, a:active, a {
        color: #707070;
        text-decoration: none;
    }
`

export const StyledLink = styled(Link)`
    background: #D9F7FD;
    padding: 10px;
    margin: 20px;
    border-radius: 20px 
`