<template>
    <header class="header">
        <h1>todos</h1>
        <input 
        class="new-todo" 
        placeholder="请输入内容"  
        v-model="m"
        @keydown.13="addLi"/>
    </header>
</template>    

<script>

export default {
    data(){
      return {
        m:''
      }
    },
    methods:{
      addLi(){
        this.$emit('add-li',this.m)
        this.m='';
      }
    }
};
</script>

