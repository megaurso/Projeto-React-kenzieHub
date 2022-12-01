import styled from "styled-components";

export const DivDashBoard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    
        header{
            padding: 10px;
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;

            h1{
                color:var(--color-primary);
                font-size: var(--font-size2);
            }

            a{
                text-decoration: none;
                color: var(--color-gray0);
                background: var(--color-gray3);
                padding: 4px;
                border-radius: 4px;
                cursor: pointer;
                width: 60px;
                display: flex;
                align-items: center;
                justify-content: center;

                :hover{
                    background: var(--color-gray2);
                }
            }
        }

    section{
        padding-left: 10px;
        border-top: 1px solid var(--color-gray2);
        border-bottom: 1px solid var(--color-gray2);
        width: 100vw;
        padding-bottom: 20px;
        
        h1{
            color: var(--color-gray0);
            font-size: var(--font-size2);
        } 
    
        span{
            color: var(--color-gray1);
            font-size: var(--font-size6);
           
        }
    }

    main{
        margin-top: 30px;
        padding-left: 10px;

        h1{
            font-size: var(--font-size5);
            color: var(--color-gray0);
            margin-bottom: 20px;
        }

        p{
            font-size: var(--font-size6);
            color: var(--color-gray1);
            line-height: 30px;
        }
    }

    @media(min-width:1024px){
        align-items: center;
        justify-content: center;
        header{
            align-items: center;
            justify-content: space-evenly;
            gap: 350px;

            h1{
                font-size: var(--font-size1);
            }

            a{
                width: 100px;
                padding: 10px;
            }
        }

        section{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            padding: 0;

            h1{
            font-size: var(--font-size1);
            } 

            span{
            font-size: var(--font-size2);
            }
        }
        
        main{
            padding-right: 340px;
            h1{
                font-size: var(--font-size1);
            }

            p{
            font-size: var(--font-size2);
            }
        }

    }


`