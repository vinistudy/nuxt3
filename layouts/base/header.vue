<template>
    <header class="w-full shadow-sm">
        <div class="container flex items-center h-[72px]">
            <img class="w-[72px] h-[72px] mr-10" src="../../assets/image/base/logo.png" alt="首页" />

            <a v-for="(item, index) in links" :key="index" class="flex items-center relative group cursor-pointer h-full mr-5" :href="item.value">
                <div class="text-black text-[15px] font-medium">{{ item.label }}</div>
                <div :class="lineClass(item)"></div>
            </a>
        
            <a class="text-gray-600 text-[13px] cursor-pointer ml-auto hover:text-black" href="#">登录</a>
            <a class="text-gray-600 text-[13px] cursor-pointer hover:text-black ml-3" href="#">注册</a>
        </div>
    </header>
</template>

<script setup lang="ts">

import { computed } from 'vue'

import { useRoute } from 'nuxt/app';

interface Item {
    label: string,
    value: string,
    active: boolean
}

const links:Array<Item> = [ 
    {label: '产品', value: '/', active: false},
    {label: 'Web3D',value: 'web3D', active: false},
    {label: '关于我们',value: 'about', active: false},
    {label: '技术博客',value: 'https://blog.vini123.com', active: false},
];

const lineClass = computed(() => {
    return (item:Item) => {
        if (item.active) {
            return 'absolute bottom-0 w-full h-[3px] bg-lime-300'
        }
        return 'absolute bottom-0 w-full h-[3px] scale-0 transition-all group-hover:scale-100 bg-lime-300'
    }
})

const route = useRoute();

for(let item of links) {
    if (item.value == route.path) {
        item.active = true
    }
}
</script>