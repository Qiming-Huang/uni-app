<template>
	<view>
		<!-- <button class="add_new_niuniu">添加妞妞的日记</button> -->
		<view class="notice">
			<uni-notice-bar :text="notice_text"></uni-notice-bar>
		</view>
<!-- 		<view class="margin"></view> -->
<!-- 		<view>
			<button @click="add_diary_niuniu" class="add_diary">添加日记（妞妞）</button>
			<button @click="add_diary_zhuzhu" class="add_diary">添加日记（猪猪）</button>
		</view> -->
		<view>
			<uni-card v-for="(item, index) in date_zhuzhu" :title="item" :note="date_niuniu[index] + content_niuniu[index]">
				{{content_zhuzhu[index]}}
			</uni-card>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				notice_text: '',
				date_niuniu: '',
				date_zhuzhu: '',
				content_zhuzhu: '',
				content_niuniu: '',
			}
		},
		methods: {
			updateDate() {
				// uni.request({
				// 	url: 'http://website.thomaszz4.cn/static/json/main.json',
				// 	dataType: 'json',
				// 	success: (res) => {
				// 		this.date = res.data.date;
				// 		this.content = res.data.comment;
				// 	}
				// }),
				// uni.request({
				// 	url: 'http://website.thomaszz4.cn/static/json/comment_test.json',
				// 	dataType: 'json',
				// 	success: (res) => {
				// 		this.note = res.data.comment;
				// 		this.date_niuniu = res.data.date;
				// 	}
				// })
				uni.request({
					url: 'http://website.thomaszz4.cn/static/json/wx_test.json',
					// dataType: 'json',
					success: (res) => {
						this.date_niuniu = res.data.date_niuniu;
						this.date_zhuzhu = res.data.date_zhuzhu;
						this.content_niuniu = res.data.content_niuniu;
						this.content_zhuzhu = res.data.content_zhuzhu;
						this.notice_text = res.data.notice_text;
						console.log(res.data)
					}
				});
			},
			add_diary_niuniu() {
				uni.showToast({
					title: '正在开发中哦！',
					icon: 'loading'
				})
			},
			add_diary_zhuzhu() {
				uni.showToast({
					title: '正在开发中哦！',
					icon: 'loading'
				})
			}
		},
		onLoad() {
			uni.clearStorageSync();
			this.updateDate();
		},
		onPullDownRefresh() {
			setTimeout(() => {
				this.updateDate();
				uni.showToast({
					title: '更新完成'
				})
			}, 500)
			uni.stopPullDownRefresh();
		},
	}
</script>

<style scoped>
/deep/ .uni-border-bottom {
	background-color: #a2a9b1;
	
}
/deep/ .uni-border {
	background-color: #F5F5F5;
	font-size: 32rpx;
}
/deep/ .uni-card__footer-text {
	background-color: #FFE4C4;
	color: #1C1C1C;
	font-size: medium;
}
.flash_content {
	position: fixed;
	z-index: 1000;
	background-color: #F0AD4E;
}
/* .add_new_niuniu {
	position: fixed;
	z-index: 1000;
} */
/* .margin {
	height: 60rpx;
} */
.notice {
	width: 100%;
	font-size: 32rpx;
}
.add_diary {
	border-radius: 10rpx;
	background-color: #F0FFFF;
}
</style>
<!-- http://website.thomaszz4.cn/static/json/comment.json -->