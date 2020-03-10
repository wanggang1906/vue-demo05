<template>
    <div id="app">
        <p>基本指令：</p>
        <p>v-if</p>
        <p v-if="status === 1">status为1时显示</p>
        <p v-else-if="status === 2">status为2时显示</p>
        <p v-else>否则显示这行</p>

        <p>列表渲染v-for，且支持索引</p>
        <ul>
            <li v-for="(book,index) in books">{{ index }}---{{ book.name }}</li>
        </ul>

        <!-- 计数器 -->
        <p>点击次数：{{ counter }}</p>
        <button @click="counter++">+ 1</button> <button @click="counter10(10)">+ 10</button>
    </div>
</template>

<script>
    export default {
        name: "baseDirective",
        data(){
            return{
                status: 2,
                books:[
                    {
                        name:'《1》',
                        author:'11'
                    },
                    {
                        name:"《2》",
                        author:'11'},
                    {
                        name:"《3》",
                        author:'11'}
                ],
                counter: 0
            }

        },
        // data对象的写法--- 有错误
/*                data:{
                    books:[
                        {name:'《1》'},
                        {name:"《2》"},
                        {name:"《3》"}
                        ]
                },*/

        methods:{
            /**写方法--全局？？？*/

            // 加10的方法，接受一个倍数参数，不传参数时把原生事件对象event传入
            counter10:function (count) {
                count = count || 1; // ？？？？
                // this指向当前vue实例app
                this.counter += count;
            }
        }
    }


</script>

<style scoped>

</style>