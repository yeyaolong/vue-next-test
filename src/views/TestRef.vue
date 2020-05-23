<template>
    <div class="test">
       <p>分数是:{{grade}}</p>
       <button @click="addGrade">加分</button>       
    </div>
</template>

<script>
import { ref, watchEffect, watch, getCurrentInstance, computed } from 'vue';

export default {
    setup(props, {attrs, slots, emit}) {

        let grade = ref(0);

        const addGrade = () => {
            // ref对象需要.value做操作
            grade.value++
        }

        return {
            grade,
            addGrade
        }
    }
}
</script>

<style lang="less" scoped>
</style>

