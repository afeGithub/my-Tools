<template>
    <div id="shortcut">
        <shortcut-item class="item" v-for="item in items" :id="item.id" @mouseover="mouseover" :key="item"> </shortcut-item>
    </div>
</template>

<script>
    import shortcutItem from './shortcutItem.vue'
    export default {
        props: [],//这个中保存父组件传递过来的数据
        data() {//保存该模板下的所有数据
            return {
                items:[{id:Math.random(),vx:1+Math.random()*2,vy:1+Math.random()*2,x:0,y:0},
                    {id:Math.random(),vx:1+Math.random()*2,vy:1+Math.random()*2,x:0,y:0},
                    {id:Math.random(),vx:1+Math.random()*2,vy:1+Math.random()*2,x:0,y:0},
                    {id:Math.random(),vx:1+Math.random()*2,vy:1+Math.random()*2,x:0,y:0},
                    {id:Math.random(),vx:1+Math.random()*2,vy:1+Math.random()*2,x:0,y:0},
                    {id:Math.random(),vx:1+Math.random()*2,vy:1+Math.random()*2,x:0,y:0},
                    {id:Math.random(),vx:1+Math.random()*2,vy:1+Math.random()*2,x:0,y:0},
                    {id:Math.random(),vx:1+Math.random()*2,vy:1+Math.random()*2,x:0,y:0},
                    {id:Math.random(),vx:1+Math.random()*2,vy:1+Math.random()*2,x:0,y:0},
                    {id:Math.random(),vx:1+Math.random()*2,vy:1+Math.random()*2,x:0,y:0},
                    {id:Math.random(),vx:1+Math.random()*2,vy:1+Math.random()*2,x:0,y:0},
                    {id:Math.random(),vx:1+Math.random()*2,vy:1+Math.random()*2,x:0,y:0},
                    {id:Math.random(),vx:1+Math.random()*2,vy:1+Math.random()*2,x:0,y:0},
                    {id:Math.random(),vx:1+Math.random()*2,vy:1+Math.random()*2,x:0,y:0}],
                itemsStyle:[],
                iRight:0,
                iBottom:0,
                K:0.999,
                POW_RATE:0.0001,//补偿概率
                POW_RANGE : 1,//补偿范围(基于诞生速度)
            }
        },

        methods: {//这个模板中的所有方法都写到这
            mouseover(){
                console.log("@@")
            },
            Timer(call, time) {
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
            },
            /**
             * @return {number}
             */
            SPEED_X(){return  Math.random() * 2},
            /**
             * @return {number}
             */
            SPEED_Y(){return   Math.random() * 2},
            setX(id,x){
                this.items.forEach(function (t) {
                    if(t.id===id){
                        t.x=x;
                        document.getElementById(t.id).style.left = Math.round(x) + "px";
                    }
                })
            },
            setY(id,y){
                this.items.forEach(function (t) {
                    if(t.id===id){
                        t.y=y;
                        document.getElementById(t.id).style.top = Math.round(y)-50 + "px";
                    }
                })
            },
            update() {
                let n = this.items.length;
                let bub, bub2;
                let i, j;
                this.updateWall();
                for(i=0; i<n; i++)
                {
                    bub = this.items[i];
                    bub.vx *= this.K;
                    bub.vy *= this.K;

                    if(Math.random() < this.POW_RATE)
                    {
                        bub.vx = this.SPEED_X() * (1 + Math.random() * this.POW_RANGE);
                        bub.vy = this.SPEED_Y() * (1 + Math.random() * this.POW_RANGE);
                    }
                    this.setX(bub.id,bub.x + bub.vx);
                    this.setY(bub.id,bub.y + bub.vy);
                    this.checkWalls(bub);
                }

                for(i=0; i<n-1; i++)
                {
                    bub = this.items[i];

                    for(j=i+1; j<n; j++)
                    {
                        bub2 = this.items[j];
                        this.checkCollision(bub, bub2);
                    }
                }
            },
            updateWall(){
                this.iRight = document.getElementById('shortcut').clientWidth - 180;
                this.iBottom =document.getElementById('shortcut').clientHeight - 130;
            },
            checkWalls(bub) {
                if(bub.x < 0)
                {
                    this.setX(bub.id,0);
                    bub.vx *= -1;
                }
                else if(bub.x > this.iRight)
                {
                    this.setX(bub.id,this.iRight);
                    bub.vx *= -1;
                }

                if(bub.y < 0)
                {
                    this.setY(bub.id,0);
                    bub.vy *= -1;
                }
                else if(bub.y > this.iBottom)
                {
                    this.setY(bub.id,this.iBottom);
                    bub.vy *= -1;
                }
            },
            rotate(x, y, sin, cos, reverse) {
                if(reverse)
                    return {x: x * cos + y * sin, y: y * cos - x * sin};
                else
                    return {x: x * cos - y * sin, y: y * cos + x * sin};
            },
            checkCollision(bub0, bub1){
                let dx = bub1.x - bub0.x;
                let dy = bub1.y - bub0.y;
                let dist = Math.sqrt(dx*dx + dy*dy);

                if(dist < 100)
                {
                    // 计算角度和正余弦值
                    let angle = Math.atan2(dy,dx);
                    let sin = Math.sin(angle);
                    let cos = Math.cos(angle);

                    // 旋转 bub0 的位置
                    let pos0 = {x:0, y:0};

                    // 旋转 bub1 的速度
                    let pos1 = this.rotate(dx, dy, sin, cos, true);

                    // 旋转 bub0 的速度
                    let vel0 = this.rotate(bub0.vx, bub0.vy, sin, cos, true);

                    // 旋转 bub1 的速度
                    let vel1 = this.rotate(bub1.vx, bub1.vy, sin, cos, true);

                    // 碰撞的作用力
                    let vxTotal = vel0.x - vel1.x;
                    vel0.x = vel1.x;
                    vel1.x = vxTotal + vel0.x;

                    // 更新位置
                    let absV = Math.abs(vel0.x) + Math.abs(vel1.x);
                    let overlap = 100 - Math.abs(pos0.x - pos1.x);

                    pos0.x += vel0.x / absV * overlap;
                    pos1.x += vel1.x / absV * overlap;

                    // 将位置旋转回来
                    let pos0F = this.rotate(pos0.x, pos0.y, sin, cos, false);
                    let pos1F = this.rotate(pos1.x, pos1.y, sin, cos, false);

                    // 将位置调整为屏幕的实际位置
                    this.setX(bub1.id,bub0.x + pos1F.x);
                    this.setY(bub1.id,bub0.y + pos1F.y);
                    this.setX(bub0.id,bub0.x + pos0F.x);
                    this.setY(bub0.id,bub0.y + pos0F.y);

                    // 将速度旋转回来
                    let vel0F = this.rotate(vel0.x, vel0.y, sin, cos, false);
                    let vel1F = this.rotate(vel1.x, vel1.y, sin, cos, false);

                    bub0.vx = vel0F.x;
                    bub0.vy = vel0F.y;
                    bub1.vx = vel1F.x;
                    bub1.vy = vel1F.y;
                }
            }
        },
        computed: {//计算属性放到这

        },
        mounted() {//页面加载完成后执行这里面的代码
            let items = document.getElementsByClassName('item');
            for(let i=0;i<items.length;i++){
                this.itemsStyle.push(items[i].style)
            }
//            this.update()
            this.Timer(this.update,17)

        },
        components: {//引入自定义组件，请把引入组件放到这，然后再template中引入
            shortcutItem
        },
        watch: {//监测数据变动，触发某个方法

        }
    }
</script>

<style scoped="true">
    .item{
        cursor: pointer;
        /*position: relative;*/
    }
    /*.item:hover{*/
        /*left:100px;*/
        /*top:100px*/

    /*}*/
    #shortcut{
        position: absolute;
        width: 985px;
        height: 450px;
    }
</style>