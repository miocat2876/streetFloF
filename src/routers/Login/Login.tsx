import React, { useState, useEffect } from 'react';
import './Login.css';
import axios from 'axios';
import kakaoLogo from '../../images/kakaoLogo.png';
import styled from 'styled-components';
import Api from './../Api';


const Login = ({ history }) => {
    const [login, setLogin] = useState(
        {
            id: "",
            password: "",
            loginChk : false
        }
    );

    const { id, password, loginChk } = login;

    const setLocal = (login:any) => {
        if(loginChk == true)
            localStorage.setItem('login', JSON.stringify(login));
        else
            localStorage.setItem('login', JSON.stringify({id: "", password: "", loginChk : false}));
    }

    const getLocal = (callback:any) => {
        let loginInfo = JSON.parse(localStorage.getItem('login'));
        if(loginInfo!= null && Object.keys(loginInfo).length>0){
            setLogin(loginInfo);
            callback(loginInfo);
        }
    }

    useEffect(() => {
        getLocal(function(loginInfo:any){
            setTimeout(() => {
                if(loginInfo.loginChk===true){
                    if(confirm("로그인 하시겠습니까?")){
                        setLocal(loginInfo);
                        handleClick(loginInfo);
                    }
                }
            }, 100);
        });
    }, []);

    const goChats = (id:any) =>{
        localStorage.setItem('id', JSON.stringify(id));
        history.push('/chats');
    }

    function handleClick(login:any) {
        if(login == undefined) 
            {login = this.login;}
            console.log(login);
            Api({params : login , apiname: 'login'})
            .then(function(response) {
                if(true){ //response.data.return !== "fail"
                    console.log(response);
                    setLocal(login);
                    goChats(login.id);
                }else{
                    alert('로그인 정보가 일치하지 않습니다.');
                }
            })
            .catch(function(error) {
                alert(error);
            });
    }

    const handleChange = (e:any) => {
        const { value, name } = e.target;
        if(e.target.type =="checkbox"){
            setLogin({
                ...login,
                [name]: e.target.checked
            }); 
        }else{
            setLogin({
                ...login,
                [name]: value
            });
        }
    }

    const signUp = () => {
        history.push('/signUp');
    }

    return (
    <Container>
        <Inner>
            <div className="logoContainer">
                <img src={kakaoLogo}/>
            </div>
            <div className="section">
                <Input placeholder="카카오계정" value={id} name="id" onChange={handleChange} />
                <Input type="password" placeholder="비밀번호" value={password} name="password" onChange={handleChange} />
                <Button onClick={()=>{handleClick(login)}}><p>로그인</p></Button>
                <div id="login_auto">
                    <div id="loginAutoSection">
                        <input type="checkbox" name="loginChk" checked={loginChk} onChange={handleChange} /><p>자동로그인</p>
                    </div>
                    <a id="signUp" onClick={signUp}>회원가입</a>
                </div>
            </div>
        </Inner>
    </Container>
  );
};

export default Login;

const Input = styled.input`
    &:focus{
        outline: none;
    }
    width: 240px;
    height: 42px;
    border: 1px solid gray;
    padding-left: 7px;
`;

const Button = styled.button`
    width: 240px;
    height: 42px;
    border: 1px solid lightgray;
    background: #ececec;

    &:hover{
        cursor: pointer;
    }  
    margin-top: 7px;
`;

const Container = styled.div`
    width: 340px;
    height: 640px;
    margin: 20px auto;
    background-color: #FFEB33;
`;

const Inner = styled.div`
    width: 240px;
    margin: 0 auto;
    padding-top: 70px;
`;