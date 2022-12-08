import styled from "styled-components";

export const DivModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    div{
        padding-left: 40px;
        padding-bottom: 40px;
        padding-right: 40px;
        min-height: 30%;
        position: relative;
        width: auto;
        background-color: var(--color-gray3);
        width: 90%;
        border-radius: 4px;

        header{
            background-color: var(--color-gray2);
            width: 90vw;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            height: 15%;
            

            h2{
                font-size: var(--font-size6);
                padding-left: 10px;
            }

            button{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 20px;
                height: 20px;
                font-size: var(--font-size6);
                background-color: var(--color-gray2);
                margin: 0;
                color: var(--color-gray1);
            }
        }

        form{
            margin-top: 10px;
            width: 80vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;

            label{
                color: var(--color-gray1);
                font-size: var(--font-size6);
            }

            input{
                height: 40px;
                padding-left: 5px;
                border-radius: 4px;
                border: 1px solid var(--color-gray0);
                color: var(--color-gray0);
                background-color: var(--color-gray2);
            }

            select{
                height: 40px;
                padding-left: 5px;
                border-radius: 4px;
                border: 1px solid var(--color-gray0);
                color: var(--color-gray1);
                background-color: var(--color-gray2);
            }

            button{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 10px;
                font-size: var(--font-size6);
                width: 100%;
                height: 40px;
                background-color: var(--color-primary);
                border: none;
                :hover{
                    background-color: var(--color-primary2);
                }
            }
        }
    }

    @media(min-width:1024px){
        div{
            width: 20%;
            padding-bottom: 20px;
            bottom: 98px;
            justify-content: space-between;

            header{
                padding: 0;
                width: 20vw;
                justify-content: space-between;
                gap: 0;
                h2{
                    padding: 0;
                    padding-left: 20px;
                    width: 100;
                }

                button{
                    padding-right: 30px;
                }
            }
            form{
                width: 18vw;
            }
        }
    }
`