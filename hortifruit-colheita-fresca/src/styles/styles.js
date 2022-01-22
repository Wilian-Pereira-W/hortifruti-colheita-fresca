import styled from 'styled-components';

export const HeaderContainer = styled.header`
    align-items: baseline;
    background: #FFF;
    border: solid 4px #8bc34a;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    height: 100px;
    margin: 5px auto;
    max-width: 80%;
    padding: 20px;

    div{
        display: flex;
        align-items: baseline;
        flex-direction: row;
    }

    h1{
        color: #8bc34a;
    }

    p{
        color: #8bc34a;
        font-size: 25px;
        padding: 5px;
    }
    span{
        color: #000;
        font-size: 20px;
        padding: 5px;
    }

`;

export const ContainerProductList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
    
    div{
        align-items: center;
        background-image: url('https://i.pinimg.com/originals/06/83/f3/0683f3856eee1e726fbc9d578010a088.jpg');
        background-repeat: no-repeat;
        background-size: 100% 120% 10%;
        border: solid 4px #8bc34a;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        margin: 10px;
        min-height: auto;
        opacity: 0.92;
        padding: 10px;
        width: 350px;
       
        h2{
            background: #fff;
            border-radius: 30%;
            color: #000;
            font-size: 44px;
            font-weight: bold;
            margin-bottom: 90px;
            margin-top: 50px;
            opacity: 0.6;
            padding: 5px;

        }

        p{
            color: #000;
            font-size: 25px;
            font-weight: bold;
            padding: 3px;

        }

        h3{
            color: #8bc34a;
            font-size: 30px;
            font-weight: bold;
            padding: 5px;
            text-align: center;
           
        }
        button{
            border-radius: 10%;
            bottom: 1;
            font-weight: bold;
            height: 50px;
            margin-top: 20px;
            padding: 5px;
            width: 100px;
            &:hover{
                color: #8bc34a;
            }
        }
    }
`;

export const SectionButtonProductList = styled.section`
    margin: 10px 10px auto;
    margin-left: 80%;
    padding: 0;

    button{
        align-items: center;
        background: #8bc34a;
        border-radius: 10px;
        color: #FFF;
        display: flex;
        font-size: 20px;
        justify-content: center;
        justify-self: end;
        height: 50px;
        margin: 0;
        margin-left: 20px;
        padding: 10px;
        width: 200px;
    }
`;

export const ConteinerCart = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;

    div{
        align-content: space-between;
        align-items: stretch;
        border: solid 4px #8bc34a;
        border-radius: 4px;
        display: flex;
        margin: 10px;
        margin-right: 30px;
        margin-top: 5%;
        min-height: auto;
        padding: 10px;
        width: 850px;

        h2{
            padding: 5px;
            width: 150px;
        }

        p{
            align-content: space-between;
            font-size: 20px;
            margin: 10px;
            padding: 10px;
        }

    }
`;

export const SectionAmount = styled.section`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px;
    padding: 10px;
    
   button{
        background: #FFF;
        border: solid 3px #000;
        border-radius: 50%;
        font-size: 30px;
        height: 40px;
        margin: 10px;
        width: 55px;
        &:hover{
            color: #FF0000;
        }
   }

   span{
       font-size: 25px;
       margin: 19px;
   }
`;

export const SectionButton = styled.section`
    align-items: center;
    display: flex;
    flex-direction: row;
    position: absolute;

    button{
        background: #FFF;
        border: solid 3px #000;
        border-radius: 4px;
        margin: 10px;
        padding: 10px;
        transition: 0.5s;
        &:hover{
            color: red;
            transition: 0.5s;
        }
        
    }
`;

export const RegisterContainer = styled.div`
        align-items: center;
        background: #000;
        background-image: url('https://i.pinimg.com/736x/96/15/a6/9615a60205325bc828ab1d4805182645.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: 25px;
        width: 100%;

    form{      
        align-items: center;
        background: #FFF;
        border: solid 3px #000;
        display: flex;
        flex-direction: column;
        height: 300px;
        margin-top: 12%;
        opacity: 0.6;
        padding: 10px;
        position: absolute;
        width: 40%;

        input{
            border: solid 2px #000;
            height: 20%;
            margin: 10px;
            width: 70%;
        }

        button{
            border: solid 3px #000;
            height: 20%;
            margin: 10px;
            width: 40%;
            &:hover{
                color: red;
            }
        }
    }
`;

export const ContainerNotFound = styled.div`
        align-items: center;
        background: #000;
        background-image: url('https://st4.depositphotos.com/9034578/30258/v/600/depositphotos_302582454-stock-illustration-pouting-with-bring-board-winne.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: 25px;
        width: 100%;
`;
