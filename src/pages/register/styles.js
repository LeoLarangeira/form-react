import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
    
    
`
export const LeftColumn = styled.div`
    flex: 1;
    align-self: stretch;  /* Garante que a altura acompanhe a altura da RightColumn */
    margin-left:100px;
    
`

export const RightColumn = styled.div`
    flex: 1;
    margin-left:150px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    margin-top: 20px;
`

export const LineWrapper = styled.div`
    height: 0.5rem;
    background: linear-gradient( 270deg, rgb(50, 33, 78) -3.55%, rgb(135, 71, 175) 100.21% );
    width: 100%;
    max-width: 6rem;
    border-radius: 1rem;

`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    max-width: 90%;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
    color: white;
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
    color:white;
`


export const EsqueciText  = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #E5E044;
` 

export const CriarText =  styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #23DD7A;
`

export const Terms = styled.p`
    color: #FFF;
    font-family: "Open Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`