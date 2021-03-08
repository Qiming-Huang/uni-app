<template>
	<view id="detail">
<!-- 		<view id="detail_top_img">
			<image src="../../static/master-SVG/kidaha-01.svg"></image>
		</view> -->
		<view>
			<image src="../../static/ballet.png"></image>
		</view>
		<view class="version_text">
			<text>version 1.0.0</text>
		</view>
		<view>
			<uni-grid :column="2" :showBorder="false"  :square="false" @change="option">
			    <uni-grid-item :index="0">
			        <text class="text">添加日记🐷</text>
					<image src="../../static/Job_resume_Icon_Pack/003-id%20card.png" :style="grid_img_font_size"></image>
			    </uni-grid-item>
			    <uni-grid-item :index="1">
			        <text class="text">添加日记🐂</text>
					<image src="../../static/Job_resume_Icon_Pack/003-id%20card.png" :style="grid_img_font_size"></image>
			    </uni-grid-item>
			    <uni-grid-item :index="2">
			        <text class="text">开发日志</text>
					<image src="../../static/Job_resume_Icon_Pack/003-id%20card.png" :style="grid_img_font_size"></image>
			    </uni-grid-item>
			    <uni-grid-item :index="3">
			        <text class="text">意见反馈</text>
					<image src="../../static/Job_resume_Icon_Pack/003-id%20card.png" :style="grid_img_font_size"></image>
			    </uni-grid-item>
			</uni-grid>
		</view>
<!-- 		<view class="version_text">
			<text>version 1.0.0</text>
		</view>
		<view>
			<image src="../../static/ballet.png"></image>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				grid_img_font_size: "height: 150rpx; width: 150rpx; margin-left: 110rpx;"
			}
		},
		methods: {
				option(e) {
					console.log(e.detail.index);
					switch(e.detail.index) {
						case 0:
							uni.showToast({
								title: "开发中",
								icon: "loading"
							});
							break;
						case 1:
							uni.showToast({
								title: "开发中",
								icon: "loading"
							})
							break;
						case 2:
							uni.showToast({
								title: "开发中",
								icon: "loading"
							})
							break;
						case 3:
							uni.showToast({
								title: "开发中",
								icon: "loading"
							})
							break;
					}
				}
			}
	}
</script>

<style scoped>
#detail_top_img {
	text-align: center;
}

/deep/ .uni-grid-item {
	text-align: center !important;
	margin-top: 25rpx;
}

.version_text {
	margin-top: 50rpx;
	text-align: center;
}

.version_text text {
	font-size: 64rpx;
}

#detail {
	background-color: #FFFFF0;
}
</style>