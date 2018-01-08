<template>
    <div class="shortcutItem shortcut" @click="click">
        <div :id="first_id" class="first shortcutItem" >

        </div>
        <div :id="second_id" class="second shortcutItem" >

        </div>
        <div :id="third_id" class="third shortcutItem" >

        </div>
        <div class="fourth shortcutItem" >

        </div>
        <div class="shortcutItem">
            <img class="app" src="../../assets/shortcut/1.png" alt="">
        </div>

    </div>
</template>

<script>
    import {shell} from 'electron'
    export default {
        props: [],//这个中保存父组件传递过来的数据
        data() {//保存该模板下的所有数据
            return {
                first_id:Math.random(),
                second_id:Math.random(),
                third_id:Math.random(),
                kOpa:[3*Math.random(),3*Math.random(),3*Math.random()],
                kStp:[0.02*Math.random(),0.02*Math.random(),0.02*Math.random()],
                POW:[1, 0.8, 0.64],
                arrFlt:[]
            }
        },

        methods: {//这个模板中的所有方法都写到这
            click(){

            },
            paint()
            {
                let i, v;

                for(i=0; i<3; i++)
                {
                    v =  Math.abs( Math.sin(this.kOpa[i] += this.kStp[i] *  Math.random()));
                    v *= this.POW[i];

                    v = ((v * 1e4) >> 0) / 1e4;
                    this.arrFlt[i].opacity = v;
                }
            },
            Timer(call, time)
            {
                let last = +new Date;
                let delay = 0;
                return setInterval(function()
                {
                    // 时间差累计
                    let cur = +new Date;
                    delay += (cur - last);
                    last = cur;

                    // 计算帧数
                    if(delay >= time)
                    {
                        call();
                        delay %= time;
                    }
                }, 1);
            }
        },
        computed: {//计算属性放到这

        },
        mounted() {//页面加载完成后执行这里面的代码
            this.arrFlt.push(document.getElementById(this.first_id).style);
            this.arrFlt.push(document.getElementById(this.second_id).style);
            this.arrFlt.push(document.getElementById(this.third_id).style);

            this.Timer(this.paint, 17);
        },
        components: {//引入自定义组件，请把引入组件放到这，然后再template中引入

        },
        watch: {//监测数据变动，触发某个方法

        }
    }
</script>

<style scoped="true">
    .shortcut{
        -webkit-transform:scale(0.5);
        -moz-transform:scale(0.5);
    }
    .shortcutItem{
        position: absolute;
        width: 220px;
        height: 223px;
    }
    .first{
        background: url('../../assets/shortcut/ch0.png');
    }
    .second{
        background: url('../../assets/shortcut/ch1.png');
    }
    .third{
        background: url('../../assets/shortcut/ch2.png');
    }
    .fourth{
        background: url('../../assets/shortcut/heart.png');
    }
    .app{
        position: absolute;
        width: 220px;
        height: 223px;
        -webkit-transform:scale(0.5);
        -moz-transform:scale(0.5);
    }
</style>