<template>
    <div class="refs">
        <div>
            <div class="name">李四</div>
            <div class="description">在template中,ref不需要使用.value</div>
            <div class="grade">
                <span class="subject">学科: 英语</span>
                <span class="grade">成绩: {{englishGrade}}</span>
            </div>
            <div class="grade">
                <span class="subject">学科: 数学</span>
                <span class="grade">成绩: {{mathGrade}}</span>
            </div>
            <button @click="addEnglishGrade"> 英语加10分 </button>
        </div>
        <div>
            <div class="name">{{ref2.student.name}}</div>
            <div class="">
                ref中也可以使用对象，当ref中使用对象时，会调用reactive方法将ref对象转化为reactive对象
            </div>
            <div class="grade" v-for="(grade, index) in ref2.student.gradeList" :key="index">
                <span class="subject">学科: {{grade.subject}}</span>
                <span class="grade">成绩: {{grade.grade}}</span>
            </div>
            <button @click="addEnglishGrade2"> 英语加10分 </button>
        </div>
        
    </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
export default {
    setup() {
        // ref中也可以使用对象
        let ref2 = ref({
            student: {
                name: "王五",
                gradeList: [
                    {
                        "subject": "English",
                        "grade": 100
                    },
                    {
                        "subject": "Math",
                        "grade": 150
                    }
                ]
            }
        })

        let englishGrade = ref(100);
        let mathGrade = ref(150);

        const addEnglishGrade = () => {
            // 在setup 函数内部处理时，需要用.value
            if (englishGrade.value < 150) {
                englishGrade.value = englishGrade.value + 10;
            } else {
                alert('已经满分了')
            }            
        }

        const addEnglishGrade2 = () => {
            // 在setup 函数内部处理时，仅限对象第一层需要用.value，后面几层都是reactive对象，不需要用.value
            // 也即，这里只有ref2是ref对象, 而其内部的student对象是reactive对象
            if (ref2.value.student.gradeList[0].grade < 150) {
                ref2.value.student.gradeList[0].grade = ref2.value.student.gradeList[0].grade + 10;
            } else {
                alert('已经满分了')
            }            
        }

        return {
            ref2,
            englishGrade,
            mathGrade,
            addEnglishGrade,
            addEnglishGrade2
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