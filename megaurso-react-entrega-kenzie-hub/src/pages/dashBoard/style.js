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
        h1{
            font-size: var(--font-size5);
            color: var(--color-gray0);
            margin-bottom: 20px;
        }

        section{
            border: none;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h2{
                color: var(--color-gray0);
            }

            button{
                width: 30px;
                height: 30px;
                font-size: var(--font-size2);
                color: var(--color-gray0);
                background-color: var(--color-gray3);
                border: none;
                border-radius: 4px;
                margin-right: 20px;
                cursor: pointer;
            }
        }
        
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            ul{
                background-color: var(--color-gray2);
                width: 90%;
                border-radius: 8px;
                padding-left: 10px;
                padding-bottom: 10px;

                li{
                    padding-left: 10px;
                    padding-right: 10px;
                    display: flex;
                    align-items: center;
                    background-color: var(--color-gray4);
                    border: none;
                    margin-top: 20px;
                    margin-bottom: 20px;
                    margin-right: 10px;
                    border-radius: 8px;
                    justify-content: space-between;

                    h3{
                        font-size: var(--font-size4);
                        color: var(--color-gray0);
                    }

                    span{
                        color: var(--color-gray1);
                        font-size: var(--font-size6);
                    }
                }
            }
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
        }
        
        main{
            h1{
                font-size: var(--font-size1);
            }

            p{
                font-size: var(--font-size2);
            }
          section{
            justify-content: space-around;
            button{
                width: 40px;
                height: 40px;
                margin: 0;
                :hover{
                    background-color: var(--color-gray2);
                }
            }
          }

          div{
              align-items: center;
              justify-content: center;
              ul{
                  width: 55%;
                  li{
                    padding-left: 20px;
                    padding-right: 20px;
                    :hover{
                        background-color: var(--color-gray3);
                    }
                  }
                }
            }
        }
    }


`