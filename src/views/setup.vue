<template>
    <div class="set-up">
        <div class="title">
            <h1>vue3使用setup()这种函数而不是原来的options作配置型</h1> 
        </div>
        <div class="description">
            这使得代码复用更为简单:
                    setup()中的代码更加容易抽离出来,而options中则需要用mixins去作代码混入.一些没有必要用到的配置项也会被混入进来.
        </div>            
        <div class="demo">
            <p class="name">count的值为: {{count}}</p>
            <button @click="add">+ 1 </button>
            <button @click="descrease">- 1 </button>

        </div>

    </div>
</template>

<script>
import { computed, toRefs, ref, getCurrentInstance, } from 'vue'

let addFnCallback = function (count) {
    count.value++;
}

let descreaseFnCallback = function (count) {
    count.value--;
}

export {
    addFnCallback,
    descreaseFnCallback
}

export default {
    name: 'setup',
    props: {
    },    
    setup(props, {emit, attrs, slots}) {
        console.log('setup中this的值为:', this)   //undefined, setup中不再有this
        // setup的 第二个参数 {} 代替了 this，它的解构赋值如上所示
        // 如果你要获得vue2.x意义上的this,可以调用
        // const _this = getCurrentInstance(); // 这个并不是vue2.x意义上的this，
        // console.log('this', _this);  // 这里的this
        let count = ref(0);

        const add = () => addFnCallback(count)

        const descrease = () => descreaseFnCallback(count)

        return {
            count,
            add,
            descrease
        }
    }
}






</script>

<style lang="less" scoped>
.set-up {
    // display: flex;
    flex-direction: row;
    justify-content: center;
    align-content:flex-start;
    width: 100%;
}

.title {
    padding-top: 36px;
}

.description {
    padding-top: 24px;
}


</style>