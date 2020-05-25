<template>
    <div class="header">
        <div class="logo"></div>
        <span class="title">Vue3.0 测试</span>
    </div>
</template>

<script>
export default {
    setup() {

    }
}
</script>

<style lang="less">
    .header {
        height: 75px;
        background: #595959;
        background-size: 100% 100%;
        display: block;
        width: 100%;
        padding: 15px 15px 15px 20px;
        text-align: left;
        .logo {
            background: url(/img/logo.82b9c7a5.png) no-repeat;
            background-size: contain;
            display: inline-block;
            width: 50px;
            height: 50px;
        }
        .title {
            display: inline-block;
            font-size: 32px;
            color: #73d13d;
            vertical-align: top;
            padding: 4px 0 0 16px;

        }
    }
</style>