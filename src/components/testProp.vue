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
        
        return {
            ...toRefs(props)
        }
    }
}
</script>

<style lang="less" scoped>

</style>