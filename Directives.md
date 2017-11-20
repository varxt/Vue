## vue指令

响应的数据绑定

    注意力都关注在数据的变化（业务逻辑）
    只要数据发生变化，页面会自动更新

## v-show  切换元素显示隐藏
    
    切换display
    

### v-if  

    数据没有就不渲染结构的
    
事件系统

绑定事件 指令 v-on

    语法：v-on:事件名 = '表达式|事件处理函数'



指令 

	
    写在标签上作为行间的自定义属性 以v-开头
    
    是Vue提供的特殊属性，用来完成某项功能的
    
        v-bind 动态绑定数据 简写为:
    
    
    语法： v-bind:属性名="data中的数据"
		
指令

    v-for 做循环
    
    语法:
    
    v-for="value,key in 数组"
    v-for="value in 数组"
    v-for="value,key of 数组"
    v-for="value of 数组"
    
    循环 遍历 枚举 一个数组 拿两种值：
    
    数组中的每一个值；值对应的下标； key value

插值
{{}}

    v-show 切换display为block还是none
    
    语法：v-show="表达式"
    
    	表达式的值为true，元素显示
    	表达式的值为false，元素不显示
    	
    v-if
    
    语法：v-show="表达式"
    
        表达式的值为true，元素渲染
        表达式的值为false，元素不渲染
    
    切换元素显示隐藏 v-show
    数据没有就不渲染结构的 v-if
    
   
    绑定事件 指令 v-on
    
    语法：v-on:事件名 = '表达式|事件处理函数'
    
    把定义的事件处理函数放在一个地方 选项对象中的methods中
    
    click
    mouseover
    mouseout
    */
    
    // 内部会把data中的数据放在new Vue创建的实例身上
    	
 v-on 简写为@
    
    语法：
    
    @click="事件处理函数(传参,$event)" 模板中有一个全局的变量 $event
    
    @click="事件处理函数"  事件对象是事件处理函数的第一个参数