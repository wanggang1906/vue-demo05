<template>

    <div>
        <h1>第一种在vue中使用echart的方式</h1>

        <div class="charts">
            <div id="barGraph" style="height: 350px;"></div>
        </div>

        <div class="charts">
            <div id="pieGraph" style="height: 350px;"></div>
        </div>

    </div>
</template>


<script>
    // 引入基本模板,按需加载
    let echarts = require('echarts/lib/echarts');
    // 引入柱状图
    require('echarts/lib/chart/bar');
    // 引入柱状图
    require('echarts/lib/chart/pie');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');


    export default {
        name: "echartsDemo02",
        data () {
            return {  }
        },
        mounted(){
            this.drawBar();
            this.drawPie();
        },
        methods:{
            drawBar(){ // 折线图数据
                // 基于dom，初始化echarts实例
                let barGraph = echarts.init(document.getElementById('barGraph'));
                // 定义操作，绘制图表
                barGraph.setOption({
                    title: { // 图标题
                        text: '全年产量趋势图',
                        left: 'center' // 位置
                    },
                    tooltip: { // 图表内悬浮的提示框
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c}' // 在数值后加一个单位字符串，字符串模板，在不同图形下代表含义不同
                            /*
                            * u 折线（区域）图、柱状（条形）图、K线图: {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
                            u 散点图（气泡）图 : {a}（系列名称），{b}（数据名称），{c}（数值数组）, {d}（无）
                            u 地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）
                            u 饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
                            * */
                    },
                    legend: { // 图例
                        left: 'center',
                        data: ['本年', '上年'],
                        bottom:0
                    },
                    xAxis: { // x轴
                        type: 'category',
                        name: 'x',
                        splitLine: {show: false},
                        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                    },
                    grid: { // 网格
                        left: '1%',
                        right: '2%',
                        bottom: '8%',
                        containLabel: true
                    },
                    yAxis: { // y轴
                        type: 'category',
                        name: 'y',
                        splitLine: {show: true},
                        data:['10%','20%','30%','40%','50%','60%','70%','80%','90%','100%']
                    },
                    series: [ // 连续，级数
                        {
                            name: '本年',
                            type: 'line',
                            data: [0.8, 0.98, 0.96, 0.27, 0.81, 0.47, 0.74, 0.23, .69, 0.25, 0.36, 0.56]
                        },
                        {
                            name: '上年',
                            type: 'line',
                            data: [1, 0.2, 0.4, 0.8, 0.16, 0.32, 0.64, 1.28, 5.6, 0.25, 0.63, 0.65, 0.12]
                        },
                    ]
                })
            },
            drawPie(){ // 饼图数据
                let pieGraph = echarts.init(document.getElementById('pieGraph'));
                pieGraph.setOption({
                    title : {
                        text: '某站点用户访问来源',
                        subtext: '纯属虚构',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                })
            }
        }
    }
</script>

<style scoped>

</style>