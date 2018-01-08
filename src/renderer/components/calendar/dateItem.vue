<template>
    <div :class="[data.isSign?'sign':'','itemBg',selectDay===data.Calendar?'itemBgSelect':'']" @click="changeSelectDay">
        <div class="CalendarItem">
            <span :class="data.isHoliday?'holiday':''">{{data.Calendar}}</span>
        </div>
        <div class="lunarCalendarItem">
            <span :class="[data.isSolarTerms?'holiday':'','lunarCalendar']">{{data.lunarCalendar}}</span>
        </div>


    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {

        props: ['data'],//这个中保存父组件传递过来的数据
        data() {//保存该模板下的所有数据
            return {
            }
        },

        methods: {//这个模板中的所有方法都写到这
            changeSelectDay(){
                this.$store.dispatch('setSelectDay',this.data.Calendar);
                this.$store.dispatch('setModifyDaily',true)

            }
        },
        computed: {//计算属性放到这
            ...mapGetters({
                selectDay:'getSelectDay'
            }),
        },
        mounted() {//页面加载完成后执行这里面的代码

        },
        components: {//引入自定义组件，请把引入组件放到这，然后再template中引入

        },
        watch: {//监测数据变动，触发某个方法

        }
    }
</script>

<style scoped="true">

    .lunarCalendarItem{
        color:lightsteelblue;
        text-align: center;
        line-height:2px;
    }
    .CalendarItem{
        color:lightsteelblue;
        text-align: center;
        line-height:25px;
    }
    .itemBg{
        cursor: pointer;
        width: 40px;
        height: 40px;
        border: 1px solid #eee;
    }
    .sign{
        background: url('../../assets/sign.gif');
        background-repeat: no-repeat;
        background-position: center;
    }
    .holiday{
        color: red;
    }
    .lunarCalendar{
        font-family: "Microsoft YaHei UI";
        font-size: 10px;
    }
    .itemBgSelect{
        border: 1px solid #87ee59;
    }

</style>