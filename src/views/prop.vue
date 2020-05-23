<template>
    <div class="set-up">               
       <test-prop :propA="propA"></test-prop>
    </div>
</template>

<script>
import { computed, toRefs, ref, getCurrentInstance, reactive } from 'vue';
import TestProp from '@/components/testProp.vue';
export default {
    name: 'setup',
    props: {
        
    },
    setup(props, {emit, attrs, slots}) {
        let propA = reactive({
            name: '李四',
            age: 0
        })
        return {
            propA
        }
    },
    components: {
        TestProp
    }
}
</script>

<style lang="less" scoped>

</style>