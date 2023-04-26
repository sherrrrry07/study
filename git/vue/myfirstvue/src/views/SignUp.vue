<script setup lang="ts">
import {ref, computed} from 'vue';

const username = ref("");
const email = ref("");
const password = ref("");
const password1 = ref("");
const message = ref("");
const isSubmitted = ref(false);

const verification =(password: string): boolean =>{
    const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\s\S]{8,16}$/
    return regPassword.test(password)}

const submitForm = () => {
    if (!verification(password.value)) {
        message.value = '密码必须是8-16位含大小写的英数字'
        return
      } else { isSubmitted.value = true; }}          

                    /*var checkPassword = (rule, value, cb) => {
  // 验证密码
  const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\s\S]{8,16}$/
  if (regPassword.test(value)) {
    return cb()
  }
  cb(new Error('密码必须为8-16位，包含大小写字母和数字'))
}*/


</script>

<template>
  <h2>Proceed</h2>
    <div class="firstTime">
        <form class="signup" @submit.prevent="submitForm">
            <div><h1 id="signuptitle">注册</h1></div>
            <p><label for="username" id="username"></label>
            <input type="text" name="username" placeholder="请输入用户名" required v-model.trim="username"></p>
            <p><label for="email" id="email"></label>
            <input type="email" name="email" placeholder="请可用的邮箱地址" required v-model.trim="email"></p>
            <p><label for="password" id="password"></label>
            <input type="password" name="password" placeholder="请输入密码" required v-model.trim="password"></p>
            <p><label for="password" id="password1"></label>
            <input type="password" name="password1" placeholder="请再次输入密码" required v-model.trim="password1"></p>
            <p v-if="message" class="error">{{ message }}</p>
            <p v-show="isSubmitted">请您在邮箱中查看验证邮件</p>
            <button id="button" type="submit">注册</button>
            
        </form>
    </div>
</template>

<style scoped>
.firstTime{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;
		}

		/* 登录框样式 */
		.signup {
			padding: 20px;
			border: 1px solid #ccc;
			border-radius: 5px;
			box-shadow: 0px 0px 10px #ccc;
            position: relative;
		}
        .signuptitle {
			position: absolute;
            top: -25px; /* 留出一定的空隙 */
            left: 50%; /* 水平居中 */
            transform: translateX(-50%); /* 水平居中 */
		}
</style>

