<template>
    <div id="main">
        <Header />

        <div id="content">
            <slot></slot>
        </div>
    </div>

    <Footer />
</template>

<script setup lang="ts">
import Header from './base/header.vue'
import Footer from './base/footer.vue'
</script>