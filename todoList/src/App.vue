<template>
  <div id="app">
    <section class="todoapp">
      <header-s @add-li="addLi"></header-s>
      <content-s :list="list" @del="delLi"></content-s>
      <footer-s :list="list"></footer-s>
    </section>
  </div>
</template>

<script>

import headerS from './components/header'
import contentS from './components/content'
import footerS from './components/footer';

let data = [
        {
            id: +new Date()+Math.random(),
            content: '事项1',
            checked: false
        },
        {
            id: +new Date()+Math.random(),
            content: '事项2',
            checked: false
        },
        {
            id: +new Date()+Math.random(),
            content: '事项3',
            checked: false
        }
    ]

export default {
  name: 'app',
  data(){
    return {
      list:data
    }
  },
  methods:{
    addLi(m){
      this.list.push({
            id: Math.random(),
            content:m,
            checked: false
      })
    },
    delLi(id){
      this.list = this.list.filter((item)=>{
        return item.id !== id;
      })
    }
  },
  components: {
    headerS,
    contentS,
    footerS
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
