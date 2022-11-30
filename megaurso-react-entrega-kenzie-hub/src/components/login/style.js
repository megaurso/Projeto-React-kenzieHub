import styled from "styled-components";

export const DivFormLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    h1{
        color: var(--color-primary);
    }

    form{
        display: flex;
        align-items: center;
        flex-direction: column;
        background: var(--color-gray3);
        border-radius: 4px;
        padding: 10px;
        width: 90%;
        gap: 30px;
        
        h2{
            color: var(--color-gray0);
            font-size: var(--font-size2);
        }

        div{
            display: flex;
            flex-direction: column;
            gap: 10px;

            label{
                color: var(--color-gray1);
                font-size: var(--font-size6);
            }

            input{
                height: 40px;
                width: 80vw;
                border-radius: 4px;
                padding-left: 5px;
                background: var(--color-gray2);
                color: var(--color-gray0);

                outline: var(--color-gray0);
                :focus{
                    border: 1px solid var(--color-gray0);
                }
            }

            p{
                color: var(--color-gray0);
                font-size: var(--font-size6);
            }
        }

        button{
            width: 95%;
            height: 40px;
            cursor: pointer;
            background: var(--color-primary);
            color: var(--color-gray0);
            border-radius: 4px;
            border: none;
            :hover{
                background: var(--color-primary2);
            }
        }

        span{
            color: var(--color-gray1);
        }

        a{
            color: var(--color-gray0);
            width: 95%;
            height: 40px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--color-gray1);
            text-decoration: none;
            border-radius: 4px;
            :hover{
                background: var(--color-gray2);
            }
        }
    }

    @media(min-width:1024px){
        h1{
            font-size: var(--font-size1);
        }

        form{
            width: 20%;
            div{
                
                input{
                    width: 18vw;
                }
            }
            span{
                font-size: var(--font-size6);
            }
        }
    }
`