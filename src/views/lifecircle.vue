<template>
    <div class="life-circle">
        <h1>所有的生命周期函数都有对应的onXXX函数(只能在setup())中使用</h1>
    </div>
</template>

<script>
import { computed, toRefs, ref, getCurrentInstance, onBeforeMount, onMounted, onBeforeUpdate, onBeforeUnmount, onUnmounted, onErrorCaptured, } from 'vue'

export default {
    name: 'life-circle',
    setup() {
          onBeforeMount() {
            console.log('onBeforeMount')
        }

        onMounted() {
            console.log('onMounted')
        }

        onBeforeUpdate() {
            console.log('onBeforeUpdate')
        }

        onBeforeUnmount() {
            console.log('onBeforeUnmount')
        }

        onUnmounted() {
            console.log('onUnmounted')
        }

        onErrorCaptured() {
            console.log('onErrorCaptured')
        }
    }

}
</script>

<style lang="less" scoped>

</style>