import styled, {css}  from 'styled-components';

export const ButtonContainer = styled.button`

    background: rgb(134, 71, 173);  
    border-radius : 8px;
    border: 1px solid rgb(127, 40, 181);
    position: relative;
    height: 33px;
    cursor: pointer;
    

    color: #FFFFFF;
    padding: 2px 12px 2px 12px;
    margin-right: 12px;
    min-width: 120px;
    width: 100%;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    


    ${({variant}) => variant !== "primary" && css`
        widht: 100%;
        max-width: 180px;
        height: 33px;
        
        margin-left: 70px;
        background: rgb(134, 71, 173);
        box-shadow: none;
        font-size: 18px;
        font-style: normal;
        font-size: 1rem;
        font-weight: bold;
        line-height: normal;
        border: 1px solid rgb(127, 40, 181);
        transition: background-color 0.3s ease;
        cursor: pointer;
        &::after {
            content: '';
            position: absolute;
            
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 8px;
            color: #FFF;

            text-align: center;
            font-family: "Open Sans";
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    `}



`

    