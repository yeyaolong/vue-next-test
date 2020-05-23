<template>
    <div class="test">
       <h1>测试 ref 能够构造对象吗? 能的</h1>
       <p>姓名: {{student.name}}</p>
       <p>年龄: {{student.age}}</p>
       <p>英语分数是:{{student.grade.English}}</p>
       <p>数学分数是:{{student.grade.math}}</p>
       <button @click="addEnglishGrade">加英语分数</button>
       <button @click="addMathGrade">加数学分数</button>
    </div>
</template>

<script>
import { ref, watchEffect, watch, getCurrentInstance, computed, reactive } from 'vue';
export default {
    setup(props, {attrs, slots, emit}) {
       
        let student = ref({
            name: '张三',
            age: 20,
            grade: {
                English: 100,
                math: 100
            }
        })

        let temp = reactive({
            count: 0
        })
        
        let grade = ref(0);

        const addEnglishGrade = () => {
            // ref对象需要.value做操作
            // 这里就不需要用很多次.value了，只有student.value 后面的数据都是正常的 .xxx 就能获得
            // 比如 student.value.grade.value 就拿不到数据了
            student.value.grade.English++
        }

        const addMathGrade = () => {
            // ref对象需要.value做操作
            student.value.grade.math++
        }

        return {
            student,
            grade,
            addEnglishGrade,
            addMathGrade
        }
    }
}
</script>

<style lang="less" scoped>
</style>

