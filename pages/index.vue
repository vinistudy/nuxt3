<template>
    <NuxtLayout name="base">
        
        <div class="container flex">
            <div class="md:w-1/3 flex flex-col">
                <span class="text-black text-xl font-semibold mt-16">约拍宝</span>
                <a class="text-blue-500 text-sm mt-3" href="https://www.yuepaibao.com" target="_blank">官方网站</a>

                <p class="text-gray-600 text-sm mt-3">约拍宝是一款专业摄影类平台,主要服务于爱拍摄的人群。用户可以在平台上进行交互约定支付等来促成合作，还可以发布作品供其他用户欣赏、评论等。</p>
            

                <div class="mt-5">
                    <img class="w-40 h-40 shadow-sm rounded-md inline mr-5 mb-4" src="../assets/image/home/ypb_miniapp.jpg" alt="约拍宝小程序"  />
                    <img class="w-40 h-40 shadow-sm rounded-md inline mb-4" src="../assets/image/home/ypb_iosapp.jpg" alt="约拍宝 ios app"  />
                </div>

                <div class="mt-1">
                    <img class="w-40 h-40 shadow-sm rounded-md inline mr-5 mb-4" src="../assets/image/home/ypb_baidu.png" alt="百度小程序"  />
                    <img class="w-40 h-40 shadow-sm rounded-md inline mb-4" src="../assets/image/home/ypb_douyin.png" alt="抖音小程序"  />
                </div>
            </div>

            <div class="md:w-2/3 p-10 flex">
                <img class="w-full object-contain max-w-3xl" src="../assets/image/home/ypb.jpg" />
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">

const head = reactive({
    title: '上海想容',
    description: '想容（上海）互联网技术有限公司是一家专注互联网产品服务的公司，致力于改变人们的工作和生活方式。我们认为”美的事物是永恒的喜悦“，将更美产品的体验和功能给到用户就是最美。',
    content: '上海想容，想容（上海）互联网技术有限公司，上海想容官网，app 开发，小程序开发，公众号开发，官网开发，后台开发，web3d开发，私人定制'
})

useHead({
  title: head.title,
  meta: [
    { name: 'description', content: head.content },
    { name: 'keywords', content: head.description },
  ]
})
</script>