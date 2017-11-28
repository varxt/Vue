<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <ul>
      <li>
        <router-link exact to="/home">home</router-link>
      </li>
      <li>
         <router-link to="/about">about</router-link>
      </li>
      <li>
         <router-link to="/user">user</router-link>
         <!-- <ul>
            <li>
              <router-link :to="{name:'Vip'}">vip</router-link>
            </li>
            <li>
              <router-link :to="{name:'Comm'}">comm</router-link>
            </li>
            <li>
              <router-link :to="{name:'Money'}">money</router-link>
            </li>
          </ul> -->
          
            </li>
    </ul>
    <!-- <p>下面的渲染的</p> -->
    <!-- 在配置的配置项中，让路径对应的组件渲染在这个标签的位置 -->
    <router-view/>  
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Hello from "./components/home";

export default {
  name: "app"
};
</script>

<style>
.router-link-active {
  background: pink;
}
</style>
