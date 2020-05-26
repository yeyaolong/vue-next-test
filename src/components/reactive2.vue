<template>
    <div class="reactive">
        <div class="demo01">
            <div class="name">{{student.name}}</div>
            <div class="grade" v-for="(grade, index) in student.gradeList" :key="index">
                <span class="subject">学科: {{grade.subject}}</span>
                <span class="grade">成绩: {{grade.grade}}</span>
            </div>
            <button @click="addEnglishGrade">英语+10分</button>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    setup() {
        let state = reactive({
            student: {
                name: "赵六",
                gradeList: [
                    {
                        "subject": "English",
                        "grade": 99
                    },
                    {
                        "subject": "Math",
                        "grade": 80
                    }
                ]
            }
        })

        const addEnglishGrade = () => {
            state.student.gradeList[0].grade = state.student.gradeList[0].grade + 10;
        }

        return {            
            addEnglishGrade,
            // ...state,    // 也可以直接用ES6做 扩展运算
            ...toRefs(state) // 可以调用toRefs方法转化为ref型变量
        }
        
    }
}
</script>

<style lang="less" scoped>
.grade {
    .name {
        font-size: 32px;
    }
    .subject, .grade {
        display: inline-block;
    }

    .subject {
        padding-right: 20px;
        width: 200px;
        text-align: left;
    }
}
</style>