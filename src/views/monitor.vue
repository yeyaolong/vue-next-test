<template>
    <div class="monitor">
        <div class="title">
            <h1>数据监听</h1>
        </div>
        <div class="description">
            使用watch与watchEffect函数监听数据
        </div>
        <div class="demo">
            <test-watch-effect></test-watch-effect>
            <test-watch></test-watch>
        </div>
    </div>
</template>

<script>
import { reactive, watchEffect } from 'vue';
import TestWatchEffect from '@/components/testWatchEffect.vue';
import TestWatch from '@/components/testWatch.vue';
export default {
    setup() {
       
        // return state
    },

    components: {
        TestWatchEffect,
        TestWatch
    }
}
</script>