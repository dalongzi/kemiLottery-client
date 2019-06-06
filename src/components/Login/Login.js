import React from 'react'
import loadable from '@loadable/component'
import './Login.scss'
import api from '../../api/api'
import myaxios from '../../utils/myaxios'

const CommonTop = loadable(() => import('../CommonTop/CommonTop'))

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginType: "username",
      loginValue: "",
      password: "",
      dangermessage: ""
    }
  };

  onFocusValue(ev){
    ev.target.parentNode.classList.add("active")
      this.setState({
        dangermessage: ""
      })
  };
  onBlurValue(ev){
    ev.target.parentNode.classList.remove("active")
  };
  changeValue(ev){
    this.setState({
      loginValue: ev.target.value
    });
    this.setState((proState)=>{
      if(/^[1][3,4,5,7,8][0-9]{9}$/.test(proState.loginValue)){
        return {
          loginType: "phone"
        }
      }else if(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(proState.loginValue)){
        return{
          loginType: "email"
        }
      }else{
        return {
          loginType: "username"
        }
      }
    })
  };
  changePassword(ev){
    this.setState({
      password: ev.target.value
    })
  };
  loginBtn(){
    let loginType = this.state.loginType;
    let loginValue = this.state.loginValue;
    let password = this.state.password;
    if(loginValue.trim() === ""){
      this.setState({
        dangermessage: "请输入账号"
      })
    }else if(password.trim() === ""){
      this.setState({
        dangermessage: "请输入密码"
      })
    }else{
      myaxios.post(api.login,{loginType:loginType,loginValue:loginValue,password:password})
        .then((resp)=>{
          if(resp.data.success){
            this.props.history.goBack();
          }else{
            this.setState({
              dangermessage: "账号或密码错误"
            })
          }
        })
        .catch((error)=>{
          console.log(error);
        })
    }
  }

  render() {
    return (
      <div className="Login">
        <CommonTop title="登录" history={this.props.history} rightLink="注册" path="/register" />

        {/* 登录表单 */}
        <div className="login-form">
          <form>
            <div className="login-input">
              <input
                type="text"
                placeholder="手机/邮箱/用户名"
                onFocus={e=>this.onFocusValue(e)}
                onBlur={e=>this.onBlurValue(e)}
                onChange={e=>this.changeValue(e)}
              />
            </div>
            <div className="login-input">
              <input
                type="password" 
                placeholder="密码" 
                onFocus={e=>this.onFocusValue(e)}
                onBlur={e=>this.onBlurValue(e)}
                onChange={e=>this.changePassword(e)}
              />
            </div>
            <div style={{height:"20px",width: "90%",margin: "10px auto"}}>
              <p style={{color: "#fa5b5b",fontSize: "14px"}}>{this.state.dangermessage}</p>
            </div>
            <button type="button" className="login-btn" onClick={e=>this.loginBtn(e)}>登 录</button>
          </form>
        </div>



      </div>
    )
  }
}

export default Login