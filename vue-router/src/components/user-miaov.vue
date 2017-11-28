<template>
  <div class="hello">
    我是user页面
    <div>
      <router-link to="/user/123">leo</router-link>
      <router-link to="/user/456">momo</router-link>
    </div>
    <hr>

    <div>
      <p>用户名:{{u.name}}</p>
      <p>年龄:{{u.age}}</p>
    </div>


  </div>
</template>

<script>
let users = [
  {
    id:123,
    name:'leo',
    age:30
  },
  {
    id:456,
    name:'momo',
    age:28
  }
]
export default {
    data(){
        return {
          u:{
            name:'xxx',
            age:'xxx'
          }
        }
    },
    watch:{
      '$route':function(){
        // console.log(this.$route)
        let id = this.$route.params.id;
        this.u = users.filter(item=>item.id == id)[0]
      }
    },
    //刷新页面执行
    mounted(){
      console.log('挂载完成')
      let id = this.$route.params.id;
      this.u = users.filter(item=>item.id==id)[0]
    }
}
</script>





