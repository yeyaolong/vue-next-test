<template>
    <div class="reactive">
        <div class="demo01">
            <div class="name">{{student.name}}</div>
            <div class="grade" v-for="(grade, index) in student.gradeList" :key="index">
                <span class="subject">学科: {{grade.subject}}</span>
                <span class="grade">成绩: {{grade.grade}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    setup() {
        let state = reactive({
            student: {
                name: "张三",
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

        return state
        
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