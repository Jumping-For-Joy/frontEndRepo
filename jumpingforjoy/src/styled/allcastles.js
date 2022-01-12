import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
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
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;
    a {
        text-decoration: none;
        border: solid 1px grey;
        padding: 15px;
        box-shadow: 3px 3px;
    }
`

export const Card = styled.div`
    width: 300px;
    margin: 0 auto;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 10px;
    img {
        width: 100%;
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
`