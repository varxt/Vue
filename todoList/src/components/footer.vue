<template>
    <footer class="footer">
    <span class="todo-count">
      <strong>{{totalLength}}</strong>
      <span>条未选中</span>
    </span>
    <ul class="filters">
      <li><a href="#/all" class="selected">All</a></li> 
      <li><a href="#/active" class="">Active</a></li> 
      <li><a href="#/completed" class="">Completed</a></li>
    </ul>
  </footer>
</template>

<script>
export default {
    props:['list'],
    data(){
      return{

      }
    },
    computed:{
      totalLength(){
        return this.list.filter((item)=>{
            return !item.checked
        }).length;
      }
    }
}
</script>
