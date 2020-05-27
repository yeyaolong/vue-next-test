<template>
    <div class="set-up">               
        <div class="">
            <h1>直接从prop中取值, 不需要setup中return后再获取</h1>
            <p>姓名: {{propA.name}}</p>
            <p>年龄: {{propA.age}}</p>
            <button @click="addAge">加一岁emit</button>
        </div>  
        <div class="">
            <h1>不要使用ES6的对象扩展运算符</h1>
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
        // console.log('props 不可以当作reactive使用！！！,因为reactive可以用扩展运算符展开，而props不行', props, ...props);
        console.log('从父组件传来的其它参数：attrs', attrs)
        const addAge = () => {
            emit('addAge', {currentAge: props.propA.age});
        }
        return {
            addAge
            // ...toRefs(props)
            // ...props
        }
    }
}
</script>

<style lang="less" scoped>

</style>