<template>
    <div class="life-circle">
        <div class="title">
            <h1>所有的生命周期函数都有对应的onXXX函数(只能在setup())中使用</h1>
        </div>
        <div class="description">
            
        </div>
        <div class="demo">
            <p class="name">count的值为：{{count}}</p>
            <button @click="add"> + 1</button>
            <button @click="descreace"> - 1</button>
        </div>
    </div>
</template>

<script>
import { computed, toRefs, ref, getCurrentInstance, onBeforeMount, onMounted, onBeforeUpdate, onBeforeUnmount, onUnmounted, onErrorCaptured, reactive, onUpdated, onCreated} from 'vue'
import { addFnCallback, descreaseFnCallback } from './setup.vue'

export default {
    name: 'life-circle',
    setup() {
        let _this = getCurrentInstance();
        // onBeforeCreate(() => {
        //     console.group('setup 中没有 beforCreate ===============》');
        //     console.log("%c%s", "color:red","el     : " + (_this.$el)); //已被初始化
        //     console.log("%c%s", "color:red","data   : " + _this.$data); //已被初始化  
        //     console.log("%c%s", "color:red","message: " + _this.message); //已被初始化 
        // })

        // onCreated(() => {
        //     console.group('setup中没有created ===============》');
        //     console.log("%c%s", "color:red","el     : " + (_this.$el)); //已被初始化
        //     console.log("%c%s", "color:red","data   : " + _this.$data); //已被初始化  
        //     console.log("%c%s", "color:red","message: " + _this.message); //已被初始化 
        // }) 

        onBeforeMount(() => {
            console.group('onbeforeMount 挂载前状态===============》');
            console.log("%c%s", "color:red","el     : " + (_this.$el)); //已被初始化
            console.log("%c%s", "color:red","data   : " + _this.$data); //已被初始化  
            console.log("%c%s", "color:red","message: " + _this.message); //已被初始化 
        })

        onMounted(() => {
            console.group('onmounted 挂载结束状态===============》');
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
            console.group('updated 更新后状态===============》');
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
            console.group('errorCaptured 捕获到子组件异常 ===============》');
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
    },
    beforeCreate() {
        console.log('setup外部的钩子函数beforeCreate')
    },
    created() {
        console.log('setup外部的钩子函数created')
    },
    beforeMount() {
        console.log('setup外部的钩子函数beforeMount')
    },
    mounted() {
        console.log('setup外部的钩子函数mounted')
    },
    beforeUpdate() {
        console.log('setup外部的钩子函数beforeUpdate')
    },
    updated() {
        console.log('setup外部的钩子函数updated')
    },
    activated() {
        console.log('setup外部的钩子函数activated')
    },
    deactivated() {
        console.log('setup外部的钩子函数deactivated')
    },
    beforeDestroy() {
        // 不会调用
        console.log('setup外部的钩子函数beforeDestroy')
    },
    destroyed() {
        // 不会调用
        console.log('setup外部的钩子函数destroyed')
    },
    errorCaptured() {
        console.log('setup外部的钩子函数errorCaptured')
    }
}
</script>

<style lang="less" scoped>
.life-circle {
    width: 100%;
}
</style>