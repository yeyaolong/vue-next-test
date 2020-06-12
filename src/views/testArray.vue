<template>
    <div class="test-read-only">
        <div class="title">
            <h1>测试数组重复触发问题(并不会重复触发)</h1> 
        </div>
        <div class="description">
            
        </div>
        <div class="demo">
            <p class="name">{{name}}</p>
            <button @click="add">转入学生1人</button>
            <p>当前学生人数:{{studentCount}}</p>
            <div>
                <span v-for="(item, index) in student" :key="index" style="padding: 0 5px;">
                    {{item.name}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, computed, toRefs} from 'vue'
export default {
    setup() {
        let grades = {
            name: '高三',
            student: [
                {name: '张1'}
            ]
        }
        let state = reactive(grades)
        let studentCount = computed(() => {
            return state.student.length;
        })
        let add = function() {
            console.log('add');
            state.student.push({
                name: `张${studentCount.value}`
            });
        }


        return {
            ...toRefs(state),
            studentCount,
            add
        }
    }
}
</script>

<style lang="less">
.test-read-only {
    
}
</style>