<template>

<section class="main">
    <input class="toggle-all" type="checkbox" v-model="isAll" />
    <ul class="todo-list">
        <li v-for="item in list" :class="{completed: item.checked, editing:editid===item.id}">
            <div class="view">
                <input class="toggle" type="checkbox" v-model="item.checked" />
                <label @dblclick="editLi(item)">{{item.content}}</label>
                <button class="destroy" @click="delLi(item.id)"></button>
            </div>
            <input class="edit" v-model="item.content" @blur="editDone(item)"
                        @keydown.13 = "editDone(item)"
                        @keydown.esc = "editCancel(item)" />
        </li>
    </ul>
</section>



</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      editid: "",
      editContent: ""
    };
  },
  methods: {
    delLi(id) {
      this.$emit("del", id);
    },
    editLi(item) {
      // console.log(1)
      this.editid = item.id;
      this.editContent = item.content;
    },

    // 双击 enter 确定
    editDone(item) {
      this.editid = "";
      if (item.content === "") {
        this.delLi(item.id);
      }
    },

    //取消双击
    editCancel(item) {
      console.log(1);
      this.editid = '';

      item.content = this.editContent;
      this.editContent = '';
    }
  },
  computed: {
    isAll: {
      get() {
        let newArr = this.list.filter(function(item) {
          return item.checked;
        });
        return newArr.length === this.list.length;
      },
      set(newValue) {
        this.list.forEach(function(item) {
          item.checked = newValue;
        });
      }
    }
  }
};
</script>
