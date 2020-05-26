<template>
    <div class="responsive">
        <div class="reactive-container">
            <div class="title">
                <h1>Reactive</h1>
            </div>
            <div class="description">

            </div>
            <div class="demo">
                <reactive></reactive>
            </div>
           
        </div>
        <div class="ref-container">
            <div class="title">
                <h1>Refs</h1>
            </div>
            <div class="description">
            </div>
            <div class="demo">
                <refs></refs>
            </div>
        </div>
        <div class="reactive-container">
            <div class="title">
                <h1>Reactive转化为Ref</h1>
            </div>
            <div class="description">

            </div>
            <div class="demo">
                <reactive2></reactive2>
            </div>
           
        </div>
    </div>
</template>

<script>
import Reactive from '@/components/reactive.vue';
import Reactive2 from '@/components/reactive2.vue';
import Refs from '@/components/refs.vue';
export default {
    setup() {

    },
    components: {
        Reactive,
        Reactive2,
        Refs
    }
}
</script>

<style lang="less" scoped>
.responsive {
    width: 100%;
}

.demo {
    text-align: left;
}
</style>