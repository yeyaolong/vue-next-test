<template>
    <div class="monitor"></div>
</template>

<script>
import { reactive, watchEffect } from 'vue'
export default {
    setup() {
        let state = reactive({
            name: '张三',
            age: 17,
            grade: 90
        })

        watchEffect(() => {
            console.log(`张三的年龄是${state.age}`);
        },{
            flush: 'post',
            onTrack: () => {
                console.log('onTrack')
            },
            onTrigger: () => {}
        })

        return state
    }
}
</script>