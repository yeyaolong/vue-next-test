<template>
    <div class="menu-list">
        <ul>
            <li v-for="item in menuList" :key="item.id">
                <router-link :to="item.url" >{{item.name}}</router-link>
            </li>
        </ul>
        
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    name: 'menu',
    setup() {
        const state = reactive({
            menuList: [
                 {
                    name: 'setup',
                    url: '/setup',
                    id: 'setup'
                },
                {
                    name: 'lifecircle',
                    url: '',
                    id: 'lifecircle'
                },
               
                 {
                    name: 'reactive',
                    url: '',
                    id: 'reactive'
                },
                {
                    name: 'ref',
                    url: '',
                    id: 'ref'
                },
                {
                    name: 'watch&watchEffect',
                    url: '',
                    id: 'watch&watchEffect'
                }
                
            ]
        })

        return {
            ...toRefs(state)
        }
    }
}
</script>

<style lang="less" scoped>
.menu-list {
    ul {
        li {
            list-style: none;
            padding: 6px;
        }
    }
}
</style>