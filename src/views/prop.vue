<template>
    <div class="set-up">               
        <div class="">
            <h1>直接从prop中取值, 不需要setup中return后再获取</h1>
            <p>姓名: {{propA.name}}</p>
            <p>年龄: {{propA.age}}</p>
        </div>  
        <div class="">
            <h1>使用toRefs展开是无效的</h1>
             <p>姓名: {{name}}</p>
            <p>年龄: {{age}}</p>
        </div>      
    </div>
</template>

<script>
import { computed, toRefs, ref, getCurrentInstance } from 'vue'
export default {
    name: 'setup',
    props: {
        propA: {
            default() {
                return {
                    name: '张三',
                    age: 99
                }
            },
            type: Object
        }
    },
    setup(props, {emit, attrs, slots}) {
        console.log('this', this)   //undefined, setup中不再有this
        // setup的 第二个参数 {} 代替了 this，它的解构赋值如上所示
        // 如果你要获得vue2.x意义上的this,可以调用
        const _this = getCurrentInstance(); // 这个是vue2.x意义上的this
        
        return {
            ...toRefs(props)
        }
    }
}
</script>

<style lang="less" scoped>

</style>