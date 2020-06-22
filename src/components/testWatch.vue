<template>
    <div class="watch-effect">
        <h1>watch</h1>
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
import {reactive, watch, onBeforeUpdate, onUpdated, toRefs} from 'vue';

export default {
    setup() {
        let state = reactive({
            name: '李四',
            age: 17,
            grade: 90
        });

        const addGrade = () => {
            state.grade += 10;
            
        }

        let flush = 'sync'; // 'post' || 'sync' || 'pre'
        
        const invalidateFn = () => {
            console.log('watch异常');
        }

        const watchHandler = (value, oldVal, invalidateFn) => {
            console.log(`watchHandler 新数据${value} 旧数据${oldVal}`);
            alert('watch')
        }

        const options = {
            flush: 'pre',
            onTrack: () => {
                console.log('onTrack')
            },
            onTrigger: () => {
                console.log('onTrigger');
            },
            immediate: true,    // 是否立即执行监听回调函数
            deep: true
        }

        let stop = watch(state, watchHandler, options)

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