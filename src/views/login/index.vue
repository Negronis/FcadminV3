<template>
  <div class="fc-login-outer" :style="{height:height + 'px'}">
  </div> 
    <div class="login-block">
      <div class="login-block-header">WELCOME TO LOGIN FCADMIN</div>
      <div class="login-block-form">    
        <input ref="username" v-model="un" type="text" placeholder="Please entry username"> 
        <input ref="password" v-model="psw" type="password" placeholder="Please entry password"> 
      </div>
      <div class="login-block-btn-block">
        <button class="login-block-btn" @click="login" :disabled="loginDis">Login</button>
      </div> 
    </div> 
</template>
<script>
import {
  reactive, 
  defineComponent, 
  inject,
  computed,
  ref
} from "vue";
import loginFunc from "@/api/login"; 
export default defineComponent({  
  setup(props, ctx) { 
    let msgChild = inject("$Message").message;  
    let common = inject("$Com");
    let store = inject("$S");
    let username = ref(null);
    let password = ref(null);
    let height = computed(()=>{
      return store.getters.getHeight;
    })
    let setToken = (obj)=>{ 
      let {token} = obj['userinfo'];
      localStorage.setItem("fcToken",token);
    }
    let formCheck = ()=>{
      if(state.un === ""){
        username.value.focus();
        return "用户名不能为空";
      }
      if(state.psw === ""){
        password.value.focus();
        return "密码不能为空";
      }
    }
    let login = () =>{ 
      
      let msg = formCheck();
      if(msg){
        msgChild.errorMessage(msg,3)
        return;
      }
      state.loginDis = true;
      msgChild.loadingMessage("请稍等",9999); 
      loginFunc(state.un , state.psw).then(res=>{  
        state.loginDis = false;  
        msgChild.successMessage("登陆成功，请稍后",1.5,()=>{ 
          common.rLink("/");
        })
        setToken(res);
      }).catch(err=>{ 
        state.loginDis = false;
        msgChild.errorMessage(err || "服务器错误，请重试",1.5);
      }); 
    }
    let state = reactive({ 
      un:"",
      psw:"",
      loginDis:false,
      login,
      height:height,
      username,
      password
    });
    return state;
  },
});
</script>
<style>
.fc-login-outer{ 
  box-sizing: border-box;
  background-image:url("~@/assets/login/loginBack.jpg");
  background-size:cover;
  filter:blur(2px);
  position:relative;
  left:0;
  top:0;
  z-index:0;
}
.login-block{
  width:400px;
  height:300px; 
  position:absolute;
  z-index:1;
  right:0;
  bottom:0;
  left:0; 
  top:0;
  margin:auto; 
  border-radius: 10px;
  padding:5px;
  box-shadow: -1px .1px 4px 2px #0F2027;
  background: #232526;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  filter:opacity(.8);
}
.login-block-header{
  height:50px;
  width:100%;
  text-align: center;
  line-height:50px;
  color:#fff;
  font-size:18px;
  letter-spacing: 3px;
  border-bottom:1px solid #D3CBB8;
}
.login-block-form{
  height:190px; 
  color:#fff;
  text-align: center;
}
.login-block-form> input:first-child {
  margin-top:50px;
}  
.login-block-form> input{
  background: none;
  outline: none;
  border:0;
  width:90%; 
  padding:10px 0;
  margin:15px 0;
  text-indent: 10px; 
  border-radius: 5px;
  background:rgba(255,255,255,.3); 
  color:#fff;
}
.login-block-form> input::-webkit-input-placeholder { /* WebKit browsers */
  color: #f8f8f9;
  font-size: 16px;
}

.login-block-form> input::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: #f8f8f9;
  font-size: 16px;
}

.login-block-form> input:-ms-input-placeholder { /* Internet Explorer 10+ */
  color: #f8f8f9;
  font-size: 16px;
}   
.login-block-btn-block{
  text-align: center;
  width:100%;
  position: relative;
}
.login-block-btn{
  border:0;
  background: none;
  border:1px solid #fff;
  padding:10px;    
  color:#fff;
  outline: none; 
  box-sizing: border-box;
  width:90%;
  margin:0 auto;
  font-size: 15px;
  letter-spacing: 5px;
}

.login-block-btn::before{  
  content:"";
  position: absolute; 
  left: 5%; top: 0; right: 0; bottom: 0;
  opacity: 0;    
  transition: opacity .5s;
  z-index: -1;
  background: #757F9A;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #D7DDE8, #757F9A);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #D7DDE8, #757F9A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border:none;
  width:90%;
}
.login-block-btn:hover::before{
  opacity: 1; 
} 
</style>