<template name="tText">
	<view>
		<view class="tText">
			{{ text }}
		</view>
	</view>
</template>

<script>
	export default {
		name: "tText",
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		props: {
			text: ''
		}
	}
</script>

<style>
	.tText {
		word-break: break-all;
		border: solid;
		border-color: #007AFF;
		margin: 20rpx;
		padding: 20rpx;
		border-radius: 15rpx;
	}
</style>
