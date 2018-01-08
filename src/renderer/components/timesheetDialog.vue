<template>
    <transition
            name="bounceInLeft"
            enter-active-class="bounceInDown"
            leave-active-class="bounceOutUp">
        <div id=""  v-show="show">
                <div id="calendarCon" >
                    <div style="position: absolute;left: 130px;top:20px">
                        <span style="font-family: 'Microsoft YaHei UI';font-size: 21px;font-weight: bold;color: lightsteelblue">签到详情</span>
                    </div>
                    <calendar id="calendar"></calendar>
                </div>
            <transition
                    name="bounceInLeft"
                    enter-active-class="bounceInDown"
                    leave-active-class="bounceOutUp">
                <div id="dialog" v-show="dialog">
                    <br/>
                    <br/>
                    <div class="label fadeIn" style="position: absolute;left: 110px;top:5px">
                        <span style="font-family: 'Microsoft YaHei UI';font-size: 21px;font-weight: bold;color: lightsteelblue">2018/01/07</span>
                    </div>
                    <div class="input-row">
                        <label class="label fadeIn">选择项目</label>
                        <select id="project" data-fyll="pineapple" class="input fadeIn delay1">
                            <option>asdadads</option>
                            <option>asdadads</option>
                            <option>asdadads</option>
                            <option>asdadads</option>
                        </select>
                    </div>
                    <div class="input-row">
                        <label class="label fadeIn">状态</label>
                        <select id="state" data-fyll="pineapple" class="input fadeIn delay1">
                            <option>正常</option>
                            <option>加班</option>
                            <option>调休</option>
                            <option>请假</option>
                        </select>
                    </div>
                    <div class="input-row">
                        <label class="label fadeIn">时间</label>
                        <input id="time" data-fyll="pineapple" type="number" min="1" max="8" class="input fadeIn delay1"/>
                    </div>
                    <div class="input-row">
                        <label class="label fadeIn">工作内容</label>
                        <input id="content" data-fyll="pineapple" type="text"  class="input fadeIn delay1"/>
                    </div>
                    <div class="input-row perspective">
                        <button id="submit" class="button load-btn fadeIn delay4" @click="submitDaily" ><span class="default"><i class="ion-arrow-right-b"></i>提交</span>
                        </button>

                    </div>
                    <div class="input-row perspective">
                        <button id="cannel" class="button load-btn fadeIn delay4" @click="cancelDaily" ><span class="default"><i class="ion-arrow-right-b"></i>取消</span>
                        </button>

                    </div>

                </div>
            </transition>
        </div>
    </transition>
</template>

<script>

    import calendar from './calendar/calendar.vue'
    import { mapGetters } from 'vuex'
    export default {
        props: [],//这个中保存父组件传递过来的数据
        data() {//保存该模板下的所有数据
            return {
            }
        },

        methods: {//这个模板中的所有方法都写到这
            submitDaily(){
                this.$store.dispatch('setModifyDaily',false)
            },
            cancelDaily(){
                this.$store.dispatch('setModifyDaily',false)
            }
        },
        computed: {//计算属性放到这
            ...mapGetters({
                dialog:'getModifyDaily',
                show:'getCalendarShow'
            }),
        },
        mounted() {//页面加载完成后执行这里面的代码

        },
        components: {//引入自定义组件，请把引入组件放到这，然后再template中引入
            calendar
        },
        watch: {//监测数据变动，触发某个方法

        }
    }
</script>

<style scoped="true">
    #dialog{
        opacity: 0.9;
        position: absolute;
        margin: 20px;
        text-align: center;
        width: 350px;
        height: 360px;
        /*position: absolute;*/
        /*top: 20px;*/
        left: 0;
        right: 0;
        overflow: hidden;
        -moz-transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -moz-backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -moz-transform: translateZ(0);
        -ms-transform: translateZ(0);
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        background: #444;
        background-image: -moz-linear-gradient(bottom, #444444, #333333);
        background-image: -webkit-linear-gradient(bottom, #444444, #333333);
        background-image: linear-gradient(to top, #444444, #333333);
        -moz-border-radius: 6px;
        -webkit-border-radius: 6px;
        border-radius: 6px;
    }
    #calendarCon{
        position: absolute;
        margin: 20px;
        text-align: center;
        width: 350px;
        height: 360px;
        /*position: absolute;*/
        /*top: 20px;*/
        left: 0;
        right: 0;
        overflow: hidden;
        -moz-transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -moz-backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -moz-transform: translateZ(0);
        -ms-transform: translateZ(0);
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        background: #444;
        background-image: -moz-linear-gradient(bottom, #444444, #333333);
        background-image: -webkit-linear-gradient(bottom, #444444, #333333);
        background-image: linear-gradient(to top, #444444, #333333);
        -moz-border-radius: 6px;
        -webkit-border-radius: 6px;
        border-radius: 6px;
        /*padding-top: 20px;*/



    }
    #calendar{
        top:60px;
        position: absolute;
        left: 35px;
    }
    #dialog .input-row {
        padding-left: 20px;
        padding-right: 20px;
        margin: 0 0 10px;
    }
    #dialog .input-row:last-of-type {
        margin-bottom: 0;
    }
    #dialog .label {
        font-family: sans-serif;
        text-transform: uppercase;
        font-size: 12px;
        margin: 0 0 10px 0;
        color: #FFF;
        display: block;
        cursor: pointer;
    }

    #dialog .input {

        padding: 0 15px;
        height: 30px;
        line-height: 30px;
        outline: none;
        border: 0;
        background: #FFF;
        display: block;
        width: 100%;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        -moz-transition-duration: 0.2s;
        -o-transition-duration: 0.2s;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
    }
    #dialog .input:focus, #window .input.fyll-focus {
        -moz-box-shadow: 0 0 0 3px #d85c89;
        -webkit-box-shadow: 0 0 0 3px #d85c89;
        box-shadow: 0 0 0 3px #d85c89;
    }

    #dialog .button {
        height: 25px;
        line-height: 25px;
        padding: 0 20px;
        margin: 0;
        text-align: center;
        color: #FFF;
        border: 0;
        display: block;
        width: 100%;
        outline: none;
        cursor: pointer;
        overflow: hidden;
        font-size: 17px;
        background: #D85C89;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        background-image: -moz-linear-gradient(bottom, #d85c89, #e7779f);
        background-image: -webkit-linear-gradient(bottom, #d85c89, #e7779f);
        background-image: linear-gradient(to top, #d85c89, #e7779f);
        -moz-box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 0 0 4px rgba(0, 0, 0, 0.5);
        -webkit-box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 0 0 4px rgba(0, 0, 0, 0.5);
        box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 0 0 4px rgba(0, 0, 0, 0.5);
        -moz-transition-duration: 0.1s;
        -o-transition-duration: 0.1s;
        -webkit-transition-duration: 0.1s;
        transition-duration: 0.1s;
        -moz-transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -moz-transform-origin: bottom 50%;
        -ms-transform-origin: bottom 50%;
        -webkit-transform-origin: bottom 50%;
        transform-origin: bottom 50%;
        -moz-transform: translateZ(0);
        -ms-transform: translateZ(0);
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        -moz-backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    #dialog .button:active, #dialog .button.fyll-focus {
        background: #D85C89;
        background-image: -moz-linear-gradient(bottom, #d85c89, #d85c89);
        background-image: -webkit-linear-gradient(bottom, #d85c89, #d85c89);
        background-image: linear-gradient(to top, #d85c89, #d85c89);
        -moz-transform: rotateX(20deg);
        -ms-transform: rotateX(20deg);
        -webkit-transform: rotateX(20deg);
        transform: rotateX(20deg);
    }
</style>