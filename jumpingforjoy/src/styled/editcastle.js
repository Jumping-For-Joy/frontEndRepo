import styled from 'styled-components'

export const Container = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F8FEFE;
    margin-top: 20px;
    text-align: center;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);

    // larger screens
    @media(min-width: 768px) {
        width: 700px;
    }
`