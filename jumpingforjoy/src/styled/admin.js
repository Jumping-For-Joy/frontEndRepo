import styled from 'styled-components'

// entire page container
export const Container = styled.div`
    font-family: 'Open Sans', sans-serif;
    color: #707070;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    a {
        color: #8AD7DB;
    }
    a:visited {
        color: #707070;
    }

    width: 100%;
    margin: 0;

    // tablet
    @media(min-width: 768px) {
        width: 90%;
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

// container that holds enquires and bookings together
export const DivOne = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    // tablet
    @media(min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
    }
    // no need to adjust for desktop
    `
    
    // container that displays enquires or bookings
    export const DivTwo = styled.div`
    background-color: white;
    width: 90%;
    margin: 0;
    @media(min-width: 768px) {
        width: 47%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

// card for individual enquiry/bookings
export const Card = styled.div`
    width: 250px;
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #D9F7FD;
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
