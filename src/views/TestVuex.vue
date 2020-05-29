<template>
    <div class="test-vuex">
        <h1>Vuex 的使用</h1>
        <div class="description">
            点击按钮<span class="color: #cecece;">updateVuex</span>更新vuex
        </div>
        <div class="demo">
            <h1>test page: {{count}}</h1>
            <h1>computedByVuex: {{computedByVuex}}</h1>
            <button @click="add">add</button>
            <button @click="updateVuex">updateVuex</button>
        </div>
    </div>
</template>

<script>
import { ref, watchEffect, getCurrentInstance, computed } from 'vue';

export default {
    setup(props, {attrs, slots, emit}) {
        const count = ref(0);
        const add = () => {
            count.value++
        }

        const { ctx } = getCurrentInstance();  // 获取当前实例,ctx 指向
        const test  = getCurrentInstance();

        console.log('test getCurrentInstance', test);

        const computedByVuex = computed(() => ctx.$store.state.test.a);

        watchEffect(() => {
            console.log('computedByVuex',  ctx.$store.state.test.a);
        }, {
            flush: 'post'
        })

        const updateVuex = () => {
            ctx.$store.commit('setTestA', count.value);

            // 这种写法有问题，count是一个ref对象，所以这里赋值会导致引用改变,之后每次调用add方法时，computedByVuex也会改变（尽管这一改变并不会调用commit方法）
            // ctx.$store.commit('setTestA', count);
        }

        return {
            count,
            computedByVuex,
            add,
            updateVuex
        }
    }
}
</script>

<style lang="less" scoped>
.test {
    color: red;
}
</style>

