<template>
    <div class="prop"> 
        <div class="title">
            <h1>prop</h1>
        </div>
        <div class="description">
            prop的用法与vue2相比没什么大变化
        </div>
        <div class="demo">
            <test-prop :propA="propA" @addAge="addAge"></test-prop>
        </div>        
    </div>
</template>

<script>
import { computed, toRefs, ref, getCurrentInstance, reactive } from 'vue';
import TestProp from '@/components/testProp.vue';
export default {
    name: 'setup',    
    setup(props, {emit, attrs, slots}) {
        let propA = reactive({
            name: '李四',
            age: 0
        })
        const addAge = (params) => {
            console.log('emit params', params);
            propA.age++;
        }
        return {
            propA,
            addAge
        }
    },
    components: {
        TestProp
    }
}
</script>

<style lang="less" scoped>
.prop {
    width: 100%;
}
</style>