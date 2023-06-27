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