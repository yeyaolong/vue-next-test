<template>
    <div class="computed">
        <div class="title">
            <h1>计算属性computed</h1>
        </div>
        <div class="description">
            计算属性与vue2的差别不大
        </div>
        <div class="demo">
            <div class="demo-01">
                <p>当前数据指针: {{offset}}</p>
                <p>一页10条数据</p>
                <p>当前页码: {{currentPage}}</p>
            </div>
                        
            <div class="step-config">
                <p>当前步进值: {{step}}</p>
                <button @click="setStep(5)">5</button>
                <button @click="setStep(10)">10</button>
                <button @click="setStep(21)">21</button>
            </div>
            
            <button @click="prev">上{{step}}条数据</button>
            <button @click="next">下{{step}}条数据</button>
            
        </div>
    </div>
</template>

<script>
import { computed, reactive, ref, toRefs } from 'vue';
export default {
    props: {
        type: Object,
        default: () => {
            return {
                name: '张三',
                age: 99
            }
        }
    },
    setup(props, {emit, attrs, slots}) {
        let page = reactive({
            offset: 100,
            size: 10
        });

        let offset = ref(1);
        let step = ref(5);

        let currentPage = computed(() => {
            let p = parseInt(page.offset / page.size) + (page.offset % page.size > 0 ? 1 : 0);
            // console.log('p', p);
            return p;
        })

        const setStep = (num) => {
            step.value = num;
        }

        const prev = () => {
            page.offset = page.offset - step.value;
        }

        const next = () => {
            page.offset = page.offset + step.value;
        }

        return {
            // 数据
            offset,
            currentPage,
            step,
            ...toRefs(page),
            // 函数
            setStep,
            next,
            prev
        }

    }
}
</script>

<style lang="less" scopded>
.step-config {
    margin-top: 128px;
}


.demo {
    // text-align: left;
    .demo-01 {
        text-align: left;
    }
}
</style>