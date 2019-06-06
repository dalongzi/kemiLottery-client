import React from 'react'
import loadable from '@loadable/component'
import './Register.scss'
import api from '../../api/api'
import myaxios from '../../utils/myaxios'

const CommonTop = loadable(() => import('../CommonTop/CommonTop'))

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dangermessage: "",
      username: "",
      password: "",
      secondpassword: "",
      email: "",
      phone: "",
      avatar: ""
    }
  };

  onFocusValue(ev) {
    ev.target.parentNode.classList.add("active")
  };
  onBlurValue(ev) {
    ev.target.parentNode.classList.remove("active")
    if (this.state.password !== this.state.secondpassword) {
      this.setState({
        dangermessage: "密码不一致"
      })
    }else if(this.state.email !== "" && !/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.state.email)){
      this.setState({
        dangermessage: "邮箱不正确"
      })
    }else if(this.state.phone !== "" && !/^[1][3,4,5,7,8][0-9]{9}$/.test(this.state.phone)){
      this.setState({
        dangermessage: "手机号不正确"
      })
    }
  };
  newUsername(ev) {
    this.setState({
      username: ev.target.value,
      dangermessage: ""
    })
  };
  newPassword(ev) {
    this.setState({
      password: ev.target.value,
      dangermessage: ""
    })
  };
  newSecondpassword(ev) {
    let value = ev.target.value
    this.setState((proState) => {
      if (proState.password === value) {
        return { dangermessage: "", secondpassword: value }
      } else {
        return { dangermessage: "密码不一致", secondpassword: value }
      }
    })
  };
  newEmail(ev) {
    let value = ev.target.value;
    this.setState({
      email: ev.target.value,
      dangermessage: ""
    })
  };
  newPhone(ev) {
    this.setState({
      phone: ev.target.value,
      dangermessage: ""
    })
  };
  registerBtn() {
    const data = {};
    data.username = this.state.username;
    data.password = this.state.password;
    data.email = this.state.email;
    data.phone = this.state.phone;
    let secondpassword = this.state.secondpassword;
    if (data.username.trim() === "") {
      this.setState({
        dangermessage: "用户名不能为空"
      })
    } else if (data.password.trim() === "") {
      this.setState({
        dangermessage: "密码不能为空"
      })
    } else if (secondpassword.trim() === "") {
      this.setState({
        dangermessage: "确认密码"
      })
    } else if (data.email.trim() === "") {
      this.setState({
        dangermessage: "邮箱不能为空"
      })
    } else if (data.phone.trim() === "") {
      this.setState({
        dangermessage: "手机号不能为空"
      })
    } else {
      if (data.password === this.state.secondpassword
        && /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(data.email) 
        && /^[1][3,4,5,7,8][0-9]{9}$/.test(data.phone)
      ) {
        myaxios.post(api.register,data)
          .then((resp)=>{
            console.log(resp);
            if(resp.data.success){
              console.log(this);
              this.props.history.goBack()
            }else{
              this.setState({
                dangermessage: resp.data.message
              })
            }
          })
          .catch((error)=>{
            console.log(error);
          })
      }
    }
  }

  render() {
    return (
      <div className="Register">
        <CommonTop title="注册" history={this.props.history} path="/" />

        {/* 注册表单 */}
        <div className="register-form">
          <form>
            <div className="register-input">
              <input
                type="text"
                placeholder="请输入新用户名"
                name="username"
                onFocus={e => this.onFocusValue(e)}
                onBlur={e => this.onBlurValue(e)}
                onChange={(e) => { this.newUsername(e) }}
              />
            </div>
            <div className="register-input">
              <input
                type="password"
                placeholder="请输入新密码"
                onFocus={e => this.onFocusValue(e)}
                onBlur={e => this.onBlurValue(e)}
                onChange={(e) => { this.newPassword(e) }}
              />
            </div>
            <div className="register-input">
              <input
                type="password"
                placeholder="请确认密码"
                onFocus={e => this.onFocusValue(e)}
                onBlur={e => this.onBlurValue(e)}
                onChange={e => this.newSecondpassword(e)}
              />
            </div>
            <div className="register-input">
              <input
                type="text"
                placeholder="请输入邮箱"
                onFocus={e => this.onFocusValue(e)}
                onBlur={e => this.onBlurValue(e)}
                onChange={(e) => { this.newEmail(e) }}
              />
            </div>
            <div className="register-input">
              <input
                type="text"
                placeholder="请输入手机号"
                onFocus={e => this.onFocusValue(e)}
                onBlur={e => this.onBlurValue(e)}
                onChange={(e) => { this.newPhone(e) }}
              />
            </div>
            <div style={{ height: "20px", width: "90%", margin: "10px auto" }}>
              <p style={{ color: "#fa5b5b", fontSize: "14px" }}>{this.state.dangermessage}</p>
            </div>
            <button type="button" className="register-btn" onClick={e => this.registerBtn(e)}>注 册</button>
          </form>

        </div>
      </div>
    )
  }
}

export default Register