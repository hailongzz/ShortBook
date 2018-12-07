<template>
    <div>
        <div id="goodInfo">
            <div class="good-Info-nav">
                <div></div>
                <div></div>
                <div></div>
            </div>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
                {{image}}
                <br />
                <br />
                <br />
                <br />
                <br />
            </van-swipe-item>
        </van-swipe>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                images: [1,2,3,4,5]
            }
        },
    }
</script>

<style scoped>

</style>