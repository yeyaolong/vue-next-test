<template>
    <div class="test">
        <h1>test page: {{count}}</h1>
        <!-- <div>count * 2 = {{doubleCount}}</div> -->
        <div>state from vuex {{a}}</div>
        <button @click="add">add</button>
        <button @click="updateVuex">updateVuex</button>
    </div>
</template>

<script>
import { ref, watchEffect, watch, getCurrentInstance, computed } from 'vue';

export default {
    setup(props, ctx2) {
        const count = ref(0);
        const add = () => {
            count.value++
        }

        watchEffect(() => {
            console.log(count.value)
        }, {
            flush: 'sync',
            onTrack: (event) => {
                console.log('触发onTrack', event);
            },
            onTrigger: (event) => {
                console.log('触发onTrigger', event);
            }
        })

        const doubleCount = computed(() => count.value * 2);
        const { ctx } = getCurrentInstance();

        // console.log('typeof ctx === typeof ctx2', typeof ctx === typeof ctx2); // 实际上，getCurrentInstance() 与 setup的第二个参数是同一个值
        
        // console.log(ctx.$router.currentRoute.value);

        const a = computed(() => ctx.$store.state.test.a);

        const updateVuex = () => {
            ctx.$store.commit('setTestA', count);
        }

        return {
            count,
            doubleCount,
            add,
            a,
            updateVuex
        }
    }
}
</script>

<style lang="less" scoped>
.test {
    color: red;
}
</style>

