import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100%;
    
    margin: 0 auto;


    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #1E192C;
`


export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    margin-left: 65px; 
    color: #FFFFFF;
`

export const TitleHighlight = styled.span`
    color: #E4105D;;
`

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    width: 420px;
    margin-left: 65px; 
    margin-bottom: 20px;

    color: #FFFFFF;
`