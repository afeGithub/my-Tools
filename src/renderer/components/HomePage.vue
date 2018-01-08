<template>
    <div id="HomePage">
        <div id="userInfo">
            <div id="userImg">
                <img style="width: 100%;height: 100%" src="../assets/avatar.jpg"/>
            </div>
            <div id="info">
                <div id="name">胡斌</div>
                <br>
                <div id="id">ID:000000001</div>
                <br>
                <div id="signInfo" @click="showCalendar">您本月还有31天未打卡</div>
            </div>
        </div>
        <div id="weather">
            <weather></weather>
        </div>


        <hr/>
        <div style="width: 985px"></div>

        <div id="mainView">
            <router-view ></router-view>
            <!--<shortcut class="shortcut"></shortcut>-->

        </div>

        <div id="timesheet" >
            <timeSheetDialog></timeSheetDialog>
        </div>

    </div>
</template>

<script>
    import weather from './weather/weather.vue'
    import timeSheetDialog from './timesheetDialog.vue'
    import { mapGetters } from 'vuex'
    export default {
        props: [],//这个中保存父组件传递过来的数据
        data() {//保存该模板下的所有数据
            return {

            }
        },

        methods: {//这个模板中的所有方法都写到这

            showCalendar(){
                this.$store.dispatch('setCalendarShow',!this.calendarShow)
            },


        },
        computed: {//计算属性放到这
            ...mapGetters({
                calendarShow:'getCalendarShow'
            }),
        },
        mounted() {//页面加载完成后执行这里面的代码
//            this.$router.push("/homePage/shortcut")
        },
        components: {//引入自定义组件，请把引入组件放到这，然后再template中引入
            timeSheetDialog,weather
        },
        watch: {//监测数据变动，触发某个方法

        }
    }
</script>

<style scoped="true">
    #weather{
        position: absolute;
        top:0;
        left: 680px;
        margin: 10px;
        width: 300px;
        height: 100px;
    }


    #mainView{
        width: 987px;
        height: 445px;
    }
    #timesheet,#mainView{
        position: absolute
    }

    #HomePage{
        position: absolute;
    }
    #userInfo{
        margin: 10px;
        width: 300px;
        height: 100px;
        /*background: greenyellow;*/
    }
    #userImg{
        margin: 10px;
        border: 3px solid #eee;
        overflow: hidden;
        width: 100px;
        height: 100px;
        border-radius:100px;
    }
    #info{
        margin: 10px;
        position: absolute;
        top: 10px;
        left:120px
    }
    #name{
        font-family:"Microsoft YaHei UI";
        font-size: 18px;
        font-weight: bold;
    }
    #signInfo{
        cursor: pointer;
        font-size: 13px;
        color:red
    }



</style>