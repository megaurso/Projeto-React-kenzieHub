import styled from "styled-components";

export const DivRegister = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    header{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 50px;

        h1{
            color: var(--color-primary);
        }

        a{
            text-decoration: none;
            width: 80px;
            background: var(--color-gray3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-gray0);
            height: 30px;
            border-radius: 4px;
            cursor: pointer;

            :hover{
                background: var(--color-gray2);
            }
        }
    }

    form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: var(--color-gray3);
        width: 90%;
        padding-bottom: 20px;

        h2{
            color: var(--color-gray0);
            font-size: var(--font-size2);
        }

        span{
            color: var(--color-gray1);
            font-size: var(--font-size5);
        }

        section{
            display: flex;
            flex-direction: column;
            gap: 1px;

            label{
                color: var(--color-gray1);
                font-size: var(--font-size6);
            }

            input{
                width: 80vw;
                padding-left: 5px;
                height: 40px;
                border-radius: 4px;
                background: var(--color-gray2);
                color: var(--color-gray1);
                outline: var(--color-gray0);
                :focus{
                    border: 1px solid var(--color-gray0);
                }
            }

            select{
                width: 80vw;
                padding-left: 5px;
                height: 35px;
                border-radius: 4px;
                background: var(--color-gray2);
                color: var(--color-gray1);
                border: none;
                :focus{
                    border: 1px solid var(--color-gray0);
                }
            }

            p{
                color: var(--color-gray0);
                font-size: var(--font-size6);
            }

            button{
                height: 40px;
                background: var(--color-primary-negative);
                color: var(--color-gray0);
                border-radius: 4px;
                cursor: pointer;
                border: none;
                :hover{
                    background: var(--color-primary2);
                }
            }
        }
    }
    @media(min-width:1024px){
        header{
            width: 37%;
            height: 100px;
        }
        form{
            width: 25vw;
            

            h2{
                font-size: var(--font-size3);
            }

            span{
                font-size: var(--font-size5);
            }

            section{
                width: 90%;
                align-items: baseline;
                input{
                    width: 22vw;
                }

                select{
                    width: 22vw;
                    cursor: pointer;
                }

                button{
                    margin-top: 10px;
                    width: 98%;
                }
            }
            
        }
    }

`