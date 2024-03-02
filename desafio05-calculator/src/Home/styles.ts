import styled from "styled-components";



export const CalculatorContainer = styled.div`
    width: 22.25rem;
    height: 35.375rem;

    display: flex;
    flex-direction: column;
    /* align-items: flex-end;
    justify-content: flex-end; */
    gap: 1.625rem;
    
    background: ${props => props.theme["purple-darker"]};
    box-shadow: 0px -4px 5px 0px rgba(0, 0, 0, 0.22) inset, 0px 6px 8px 0px rgba(255, 255, 255, 0.10) inset, 0px 8px 17px 0px rgba(0, 0, 0, 0.29), 0px 30px 30px 0px rgba(0, 0, 0, 0.26), 0px 68px 41px 0px rgba(0, 0, 0, 0.15), 0px 120px 48px 0px rgba(0, 0, 0, 0.04), 0px 188px 52px 0px rgba(0, 0, 0, 0.01), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);


    padding: 3.375rem 2rem 2rem 2rem;
    border-radius: 48px;

`

export const CalculationContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 0.5rem;

    text-align: right;

    padding: 0 1.375rem 0 1.125rem;

    p{
        color: ${props => props.theme["gray"]};
        height: 1.75rem;
            
    }
    
    span{
        width: 100%;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        p{
            font-size: 2rem;
            
        }

        div{
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;

            padding-left: 2rem;


            width: 100%;
            height: 3.125rem;
            color: ${props => props.theme["white"]};

            font-size: 2.25rem;
            line-height: 140%;
            letter-spacing: -0.72px;

            

            
            /* overflow-y: hidden; */

            strong{
                overflow-x: auto;
                word-break: keep-all;
                white-space: nowrap;
            }
        }
    
    }

`


export const KeyboardContainer = styled.div`

    width: 100%;
    height: 100%;

    display: flex;
    /* align-items: center; */
    /* justify-content: center; */

    flex-wrap: wrap;

    gap: 0.75rem;


    button{
        width: 4rem;
        height: 4rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 999px;
        /* border: 0; */
        padding: 1.125rem;

        background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), ${props => props.theme["purple-darker"]};
        box-shadow: 0px 2px 3px 0px rgba(255, 255, 255, 0.06) inset, 0px 0px 2px 0px rgba(0, 0, 0, 0.29), 0px 2px 4px 0px rgba(0, 0, 0, 0.26), 0px 4px 6px 0px rgba(0, 0, 0, 0.10), 0px 7px 7px 0px rgba(0, 0, 0, 0.04), 0px 11px 7px 0px rgba(0, 0, 0, 0.01);
    
        color: ${props => props.theme["white"]};

        font-size: 1.5rem;
        letter-spacing: -0.48px;

        &:first-child{
            color: ${props => props.theme["purple"]};
        }

        &:nth-child(4n){
            background: ${props => props.theme["purple-dark"]};
        }

        &:last-child{
            background: ${props => props.theme["purple-light"]};
        }
    }

`