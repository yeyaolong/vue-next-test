<template>
    <div class="test-read-only">
        <div class="title">
            <h1>readonly</h1> 
        </div>
        <div class="description">
            readonly 型数据无法被改变
        </div>
        <div class="demo">
            <p class="name">{{name}}</p>
            <p>分数: {{grade}}</p>
            <button @click="add">+ 1 </button>
            <button @click="descrease">- 1 </button>
        </div>
    </div>
</template>

<script>
import { readonly } from 'vue'
export default {
    setup() {
        let temp = readonly({
            name: '张三',
            age: 30,
            grade: 99
        })

        const add = function() {
            temp.grade++
        }

        const descrease = function() {
            temp.grade--;
        }

        return {
            temp,
            add,
            descrease
        }
    }
}
</script>

<style lang="less">
.test-read-only {

}
</style>