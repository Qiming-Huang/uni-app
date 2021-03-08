<template>
	<view>
		<view class="container" :style="'height:'+ screenHeight +'px !important;'" style="background-color: #e4fbff; display: flex; flex-direction: column; align-items: center;">
			<image src="../../static/2021.png" mode="aspectFit" style="flex: 10;"></image>
			<image src="../../static/lover.png" mode="aspectFit" style="flex: 10;"></image>
			<rich-text :nodes="'<h4>Version ' + version + '</h4>'" style="padding-top: 20rpx; flex: 1;"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				version: "2.0.1",
				screenHeight: '',
			}
		},
		methods: {

		},
        onLoad() {
            this.screenHeight = uni.getSystemInfoSync().windowHeight;
			setTimeout(function(){
				uni.redirectTo({
					url: '/pages/message/message',
				})
			}, 2000)
        },
	}
</script>

<style>
	
</style>