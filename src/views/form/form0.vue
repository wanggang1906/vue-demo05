<template>
    <div>

        <p>from</p>
        <p>{{ nowDate }}</p>
        <p>element组件</p>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="success" @click="inputValue">显示输入的值</el-button>
<!-- 表单-->
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="即时配送">
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
                <el-radio-group v-model="form.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
        <el-button type="success" @click="">弹出表格</el-button>

    </div>

</template>

<script>
    import formTableView from './formTable'; // 调用另一组件

    export default {
        name: "form0",
        data(){
            return{
                nowDate: new Date(),
                input: '',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            };
        },
        components:{
            formTableView
        },
        methods:{
            mounted() {
                let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
                this.timer = setInterval(() => {
                    _this.date = new Date(); // 修改数据date
                }, 1000)
            },
            beforeDestroy() {
                if (this.timer) {
                    clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
                }
            },
            // 获取输入框值
            inputValue(){
                console.log("输入的值为：" + this.input);
            },
            // 提交按钮
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>

</style>