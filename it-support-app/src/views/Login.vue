<template>
  <div class="mgi__login">
      <form @submit.prevent="onSubmit" class="mgi__login-form">
        <div class="mgi__login-form__block">
          <div class="mgi__login-form__logo">
              <img src="../assets/font/logo/logo.png" alt="Mgi Logo">
          </div>
          <div class="mgi__login-form__desc">
              <p>Welcome to IT Support App!</p>
          </div>
          <label for="username" class="mgi__login-form__username">
            <span>User Name</span>
            <input type="text" id="username" v-model="username">
          </label>
           <label for="password" class="mgi__login-form__password">
            <span>Password</span>
            <input :type="passwordType" v-model="password" id="password">
            <img @click="onClickEye" src="../assets/font/action-icon/eye_1.svg" alt="" >
            <img @click="onClickEye" v-show="eyeCheckPass" src="../assets/font/action-icon/eye_2.svg" alt="">
          </label>
          <div class="mgi__login-form__require">
            <label for="remember" class="mgi__login-form__checkbox ">
              <input type="checkbox" id="remember">
              <div  class="mgi__login-from__checkbox-block"></div>
              <span >Remember me?</span>
            </label>
            
            <div class="mgi__login-form__forgot-link">
              <a href="#" >Forgot Password</a>
            </div>
          </div>
          <div class="mgi__login-form__submit">
              <button type="submit">LOGIN</button>
          </div>
        </div>
      </form>
      
  </div>
</template>


<script>
import { ref } from 'vue';
export default {
  setup() {
    const eyeCheckPass = ref(false);
    const passwordType = ref("password");
    const username = ref("");
    const password = ref("");
    const onClickEye = ()=>{
      eyeCheckPass.value = !eyeCheckPass.value;
      passwordType.value = passwordType.value === "password" ? "text" : "password";
    }
    function onSubmit(){
        console.log({username,password})
    }
    return {onSubmit , eyeCheckPass , onClickEye ,passwordType ,password ,username};
  },
}
</script>
