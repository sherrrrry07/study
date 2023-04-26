<script setup lang="ts">
import {ref, computed} from 'vue';
import { RouterLink, RouterView } from 'vue-router'


const username = ref("");
const email = ref("");
const password = ref("");

</script>

<template>
<h2 id="loginPage">Proceed</h2>
   <div class="loginbox">
   <form class="login"> 
   <div><h1 id="logintitle">登录</h1></div>
   <p type="text" id="username"><input type="text" name="username" placeholder="请输入用户名" v-model.trim="username"></p>
   <p type="email" id="username" ><input type="text" name="password" placeholder="请输入邮箱地址" v-model.trim="email"></p>
   <p type="password" id="mypassword" ><input type="password" name="password" placeholder="输入密码" v-model.trim="password"></p>
   <!-- placeholder提供-提供可描述输入字段预期值的提示信息（hint）。该提示会在输入字段为空时显示，并会在字段获得焦点时消失。
    placeholder 属性适用于以下的 <input> 类型：text, search, url, telephone, email 以及 password。-->
   <button type="button" id="but">登录</button>
   <RouterLink v-bind:to="{name: 'SignUp'}" style=" color: red; font-weight: bold;"> 点此注册新账号</RouterLink>
   </form>
</div>

</template>
