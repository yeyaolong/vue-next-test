<template>
    <div class="life-circle">
        <h1>所有的生命周期函数都有对应的onXXX函数(只能在setup())中使用</h1>
        <div class="demo">
            <p>count的值为：{{count}}</p>
            <button @click="add"> + 1</button>
            <button @click="descreace"> - 1</button>
        </div>
    </div>
</template>

<script>
import { computed, toRefs, ref, getCurrentInstance, onBeforeMount, onMounted, onBeforeUpdate, onBeforeUnmount, onUnmounted, onErrorCaptured, reactive, onUpdated, } from 'vue'
import { addFnCallback, descreaseFnCallback } from './setup.vue'

export default {
    name: 'life-circle',
    setup() {
        let _this = getCurrentInstance();
        console.log(_this)
        onBeforeMount(() => {
            console.group('beforeMount 挂载前状态===============》');
            console.log("%c%s", "color:red","el     : " + (_this.$el)); //已被初始化
            console.log("%c%s", "color:red","data   : " + _this.$data); //已被初始化  
            console.log("%c%s", "color:red","message: " + _this.message); //已被初始化 
        })

        onMounted(() => {
            console.group('mounted 挂载结束状态===============》');
            console.log("%c%s", "color:red","el     : " + _this.$el); //已被初始化
            console.log("%c%s", "color:red","data   : " + _this.$data); //已被初始化
            console.log("%c%s", "color:red","message: " + _this.message); //已被初始化
        }) 

        onBeforeUpdate(() => {
            console.group('beforeUpdate 更新前状态===============》');
            console.log("%c%s", "color:red","el     : " + _this.$el);
            console.log("%c%s", "color:red","data   : " + _this.$data); 
            console.log("%c%s", "color:red","message: " + _this.message); 
        })

        onUpdated(() => {
            console.group('beforeUpdate 更新后状态===============》');
            console.log("%c%s", "color:red","el     : " + _this.$el);
            console.log("%c%s", "color:red","data   : " + _this.$data); 
            console.log("%c%s", "color:red","message: " + _this.message); 
        })

        onBeforeUnmount(() => {
            console.group('onBeforeUnmount 销毁前状态===============》');
            console.log("%c%s", "color:red","el     : " + _this.$el);
            console.log("%c%s", "color:red","data   : " + _this.$data); 
            console.log("%c%s", "color:red","message: " + _this.message); 
        }) 

        onUnmounted(() => {
            console.group('onUnmounted 销毁完成状态===============》');
            console.log("%c%s", "color:red","el     : " + _this.$el);
            console.log("%c%s", "color:red","data   : " + _this.$data); 
            console.log("%c%s", "color:red","message: " + _this.message)
        })

        onErrorCaptured(() => {
            console.group('errorCaptured 异常捕获 不知道怎么触发===============》');
            console.log("%c%s", "color:red","el     : " + _this.$el);
            console.log("%c%s", "color:red","data   : " + _this.$data); 
            console.log("%c%s", "color:red","message: " + _this.message)
        })

        let count = ref(99)

        const add = () => addFnCallback(count)
        const descreace = () => descreaseFnCallback(count);
        
       
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