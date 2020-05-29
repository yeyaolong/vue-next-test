<template>
    <div class="menu-list">
        <ul>
            <li v-for="item in menuList" :key="item.id" @click="changeRouter(item)">
                <router-link :to="item.url" >{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive, toRefs, getCurrentInstance } from 'vue'
import router from '@/router';

export default {
    name: 'menu-list',
    setup(props, params) {
        const state = reactive({
            menuList: [
                 {
                    name: 'setup',
                    url: '/setup',
                    id: 'setup'
                },
                {
                    name: '生命周期',
                    url: '/lifecircle',
                    id: 'lifecircle'
                },
                {
                    name: '响应式',
                    url: '/responsive',
                    id: 'responsive'
                },               
                {
                     name: '父子组件传参',
                     url: '/prop',
                     id: 'prop'
                },
                {
                    name: '计算属性',
                    url: '/computed',
                    id: 'computed'
                },
                {
                    name: '监听',
                    url: '/watch&watchEffect',
                    id: 'watch&watchEffect'
                },
                {
                    name: '服务端渲染',
                    url: '/ssr',
                    id: 'ssr'
                },
                {
                    name: 'vuex',
                    url: '/vuex',
                    id: 'vuex'
                },
                // {
                //     name: '路由',
                //     url: '/vue-router',
                //     id: 'vue-router'
                // },
            ]
        })

        let _this = getCurrentInstance();
        const changeRouter = (item) => {
            router.push(item.url)
        }

        return {
            ...toRefs(state),
            changeRouter
        }
    }
}
</script>

<style lang="less" scoped>
.menu-list {
    position: absolute;
    top: 75px;
    bottom: 0;
    width: 255px;
    box-shadow: 1px 0px 1px #888888;
    
    ul {
        li {
            list-style: none;
            padding: 6px;
            font-size: 26px;
            color: #303133;
            padding: 0 20px;
            cursor: pointer;
            -webkit-transition: border-color .3s,background-color .3s,color .3s;
            transition: border-color .3s,background-color .3s,color .3s;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            line-height: 60px;
            padding-left: 12px;
        }
        li:hover {
            background-color: #cecece;
        }
    }
}
</style>