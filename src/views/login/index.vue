<template>
  <div class="fc-login-outer">
    <div>登录</div>
    <div> 
      <input v-model="un" type="text" placeholder="please entry username">
      <input v-model="psw" type="password" placeholder="please entry password"> 
      <button @click="login" :disabled="loginDis">登录</button> 
    </div>
  </div> 
</template>
<script>
import {
  reactive, 
  defineComponent, 
  inject
} from "vue";
import loginFunc from "@/api/login"; 
export default defineComponent({  
  setup(props, ctx) {
    let msgChild = inject("$Message").message;  
    let common = inject("$Com");
    let setToken = (obj)=>{ 
      let {token} = obj['userinfo'];
      localStorage.setItem("fcToken",token);
    }
    let login = () =>{ 
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
        msgChild.errorMessage("服务器错误，请重试",1.5);
      }); 
    }
    let state = reactive({ 
      un:"",
      psw:"",
      loginDis:false,
      login
    });
    return state;
  },
});
</script>
<style>
.fc-login-outer{
  border:1px solid;
  width:500px;
  height:500px;
}
</style>