<template>
    <div id="">
        <div class="text"><span id="temperature">26</span><sub>℃</sub></div>
        <weatherIcon class="weatherIcon"></weatherIcon>
        <div class="text" id="detail">今天：13~26℃ 南风 10~11级</div>
        <div class="text" id="life">感冒指数：温差极大，湿度大，极易感冒。</div>
        <div class="text" id="city">深圳</div>
        <div class="text" id="airQuality">
            <span>实际空气质量</span>
            <div id="Quality"> 119 轻度污染</div>
        </div>
    </div>
</template>

<script>
    import weatherIcon from './weatherIcon.vue'
    export default {
        props: [],//这个中保存父组件传递过来的数据
        data() {//保存该模板下的所有数据
            return {}
        },

        methods: {//这个模板中的所有方法都写到这
        },
        computed: {//计算属性放到这
        },
        mounted() {//页面加载完成后执行这里面的代码
        },
        components: {//引入自定义组件，请把引入组件放到这，然后再template中引入
            weatherIcon
        },
        watch: {//监测数据变动，触发某个方法

        }
    }
</script>

<style scoped="true">
    .text{
        color: #fff;
        font-family: 'Lato', sans-serif;
        position: absolute;
    }
    #temperature{
        font-weight: 300;
        font-size: 60px;
    }
    #detail{

        font-weight: 400;
        font-size: 15px;
        top:60px;
    }
    #life{
        cursor:pointer;
        font-weight: 400;
        font-size: 15px;
        top:80px
    }
    #city{
        cursor:pointer;
        font-weight: 400;
        font-size: 18px;
        left:170px
    }
    #airQuality{
        font-weight: 400;
        font-size: 12px;
        left:170px;
        top:20px
    }
    #Quality{
        text-align: center;
        line-height: 20px;
        border-radius:10px;
        margin-top: 5px;
        width: 100px;
        height: 20px;
        background: orange;
    }


    .weatherIcon{
        position: absolute;
        -webkit-transform:scale(0.4);
        -moz-transform:scale(0.4);
        left:80px
    }

</style>