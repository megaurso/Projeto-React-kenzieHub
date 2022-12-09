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

    &>div{
    
        min-height: 30%;
        position: relative;
        width: auto;
        background-color: var(--color-gray3);
        border-radius: 4px;

        header{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: var(--color-gray2);
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            height: 15%;
            

            h2{
                font-size: var(--font-size6);
                padding-left: 10px;
                color: var(--color-gray0);
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
                border: none;   
                padding-right: 10px;
                cursor: pointer;
            }
        }

        form{
            margin-top: 10px;
            width: 80vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;
            padding: 10px;

            p{
                color: var(--color-gray0);
                font-size: var(--font-size6);
            }

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
                outline: var(--color-gray0);
            }

            select{
                height: 40px;
                padding-left: 5px;
                border-radius: 4px;
                border: 1px solid var(--color-gray0);
                color: var(--color-gray1);
                background-color: var(--color-gray2);
                outline: var(--color-gray0);
                cursor: pointer;
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
                border-radius: 4px;
                color: var(--color-gray0);
                cursor: pointer;
                :hover{
                    background-color: var(--color-primary2);
                }
            }
        }
    }

    @media(min-width:1024px){
        div{
            width: 15%;
            padding-bottom: 20px;
            bottom: 98px;
            justify-content: space-between;

            header{
                padding: 0;
                width: 100%;
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
                width: 100%;
            }
        }
    }
`

export const DivModalEdit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &>div{
    
        min-height: 30%;
        position: relative;
        width: auto;
        background-color: var(--color-gray3);
        border-radius: 4px;

        header{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: var(--color-gray2);
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            height: 10%;
            

            h2{
                font-size: var(--font-size6);
                padding-left: 10px;
                color: var(--color-gray0);
            }

            &>button{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 20px;
                height: 20px;
                font-size: var(--font-size6);
                background-color: var(--color-gray2);
                margin: 0;
                color: var(--color-gray1);
                border: none;   
                padding-right: 10px;
                cursor: pointer;
            }
        }

        form{
            margin-top: 10px;
            width: 80vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;
            padding: 10px;

            p{
                color: var(--color-gray0);
                font-size: var(--font-size6);
            }

            label{
                color: var(--color-gray0);
                opacity: 0.8;
                font-size: var(--font-size6);
            }

            input{
                height: 40px;
                padding-left: 5px;
                border-radius: 4px;
                border: none;
                color: var(--color-gray1);
                background-color: var(--color-gray2);
                outline: none;
            }

            select{
                height: 40px;
                padding-left: 5px;
                border-radius: 4px;
                border: none;
                color: var(--color-gray1);
                background-color: var(--color-gray2);
                outline: none;
                cursor: pointer;
            }
            
            div{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                &>button{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 10px;
                    font-size: var(--font-size6);
                    width: 60%;
                    height: 40px;
                    background-color: var(--color-primary-negative);
                    border: none;
                    border-radius: 4px;
                    color: var(--color-gray0);
                    cursor: pointer;
                }

                button + button{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 10px;
                    font-size: var(--font-size6);
                    width: 30%;
                    height: 40px;
                    background-color: var(--color-gray1);
                    border: none;
                    border-radius: 4px;
                    color: var(--color-gray0);
                    cursor: pointer;
                    :hover{
                        background-color: var(--color-gray2);
                    }
                }
            }
        }
    }

    @media(min-width:1024px){
        div{
            width: 15%;
            padding-bottom: 20px;
            bottom: 98px;
            justify-content: space-between;

            header{
                padding: 0;
                width: 100%;
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
                width: 100%;
                
                &>div{
                    width: 100%;
                }
            }
        }
    }
`