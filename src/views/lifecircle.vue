<template>
    <div class="life-circle">
        <h1>所有的生命周期函数都有对应的onXXX函数(只能在setup())中使用</h1>
        <div>
            <p>count的值为：{{count}}</p>
            <button @click="add"> + 1</button>
            <button @click="descreace"> - 1</button>
        </div>
    </div>
</template>

<script>
import { computed, toRefs, ref, getCurrentInstance, onBeforeMount, onMounted, onBeforeUpdate, onBeforeUnmount, onUnmounted, onErrorCaptured, reactive, } from 'vue'
import { addFnCallback, descreaseFnCallback } from './setup.vue'

export default {
    name: 'life-circle',
    setup() {
        onBeforeMount(() => {
            console.log('onBeforeMount')
        })

        onMounted(() => {
            console.log('onMounted')
        }) 

        onBeforeUpdate(() => {
            console.log('onBeforeUpdate')
        }) 

        onBeforeUnmount(() => {
            console.log('onBeforeUnmount')
        }) 

        onUnmounted(() => {
            console.log('onUnmounted')
        })

        onErrorCaptured(() => {
            console.log('onErrorCaptured')
        })

        let count = ref(99)

        const add = () => addFnCallback(count)
        const descreace = () => descreaseFnCallback(count)

        return {
            count,
            add,
            descreace
        }
    }
}
</script>

<style lang="less" scoped>

</style>