<template>
    <div>
        <h1>{{ msg }}</h1>
        <p>第二种方式：通过组件的方式进行页面渲染</p>
        <div class="container" >
            <bar-graph></bar-graph>
        </div>

        <div class="container">
            <pie-graph></pie-graph>
        </div>

    </div>
</template>

<script>
    // 引入两个子组件
    import BarGraph from "./echartsDemoBarGraph03";
    import PieGraph from "./echartsDemoPieGraph03";
    export default {
        name: "echartsDemoFather03",
        data(){
            return{
                msg:"ddd"
            }
        },
        components:{
            BarGraph,
            PieGraph
        }
    }
</script>

<style scoped>

</style>