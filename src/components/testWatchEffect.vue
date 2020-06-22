<template>
    <div class="watch-effect">
        <h1>watchEffect</h1>
        <div class="">
            <p>姓名: {{name}}</p>
            <p>年龄: {{age}}</p>
            <p>分数: {{grade}}</p>
            <button @click="addGrade">加10分</button>
            <button @click="stopWatch">停止监听</button>
        </div>  
    </div>
</template>

<script>
import {reactive, watchEffect, onBeforeUpdate, onUpdated, toRefs} from 'vue';

export default {
    setup() {
        // 模块A
        let state = reactive({
            name: '张三',
            age: 17,
            grade: 90
        });

        const addGrade = () => {
            state.grade += 10;
        }

        let flush = 'sync'; // 'post' || 'sync' || 'pre'

        let stop = watchEffect(() => {
            console.log(`张三的分数是${state.grade}`);
            alert(`张三的分数是${state.grade}`);
        },{
            flush: flush,
            onTrack: () => {
                console.log('onTrack');
            },
            onTrigger: () => {
                console.log('onTrigger');
            }
        });

        const stopWatch = () => {
            alert('停止监听')
            stop();
        }

        onBeforeUpdate(() => {
            console.log('onBeforeUpdate');
        })

        onUpdated(() => {
            console.log('onUpdated');
        })

        

        return {
            // 数据
            ...toRefs(state),
            // 函数
            addGrade,
            stopWatch
        }
    }
}
</script>

<style lang="less">
.watch-effect {

}
</style>