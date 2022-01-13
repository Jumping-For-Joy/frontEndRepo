import styled from 'styled-components'

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

// container that holds enquires and bookings
export const DivOne = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

// container that displays indiividual enquires or bookings (reused for both)
export const DivTwo = styled.div`
    background-color: white;
    width: 45%;
    margin: 0;
`

export const Card = styled.div`
    width: 300px;
    margin: 0 auto;
    margin-bottom: 10px;
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
