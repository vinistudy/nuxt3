<template>
    <header class="w-full shadow-sm relative z-50">
        <!-- 大点屏幕布局 -->
        <div class="container md:flex hidden items-center h-[72px]">
            <img class="w-[72px] h-[72px] mr-10" src="../../assets/image/base/logo.png" alt="首页" />

            <NuxtLink v-for="(item, index) in links" :key="index" :to="item.value" class="flex items-center relative group cursor-pointer h-full mr-5">
                <div class="text-black text-[15px] font-medium">{{ item.label }}</div>
                <div :class="lineClass(item)"></div>
            </NuxtLink>
        
            <a class="text-gray-600 text-[13px] cursor-pointer ml-auto hover:text-black" href="#">登录</a>
            <a class="text-gray-600 text-[13px] cursor-pointer hover:text-black ml-3" href="#">注册</a>
        </div>

        <!-- 小屏幕下的布局 -->
        <div class="container md:hidden h-[60px] flex items-center">
            <img class="w-[60px] h-[60px] mr-10" src="../../assets/image/base/logo.png" alt="首页" />

            <span class="ml-auto w-8 h-8 text-gray-900">
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"></path>
                </svg>
            </span>

            <div class="w-screen h-screen bg-black/40 fixed left-0 top-0">
                <div class="w-60 h-screen bg-white flex flex-col p-4 absolute top-0 right-0 rounded-s-sm">
                    <NuxtLink v-for="(item, index) in links" :key="index" :to="item.value" class="flex items-center relative group cursor-pointer w-full h-12 mr-5">
                        <div class="text-black text-[15px] font-medium">{{ item.label }}</div>
                        <div :class="lineClass(item)"></div>
                    </NuxtLink>
                    
                    <div class="mt-5">
                        <a class="text-gray-600 text-[13px] cursor-pointer hover:text-black" href="#">登录</a>
                        <a class="text-gray-600 text-[13px] cursor-pointer hover:text-black ml-3" href="#">注册</a>
                    </div>
                </div>
            </div>
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
    {label: 'Web3D',value: '/web3D', active: false},
    {label: '关于我们',value: '/about', active: false},
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