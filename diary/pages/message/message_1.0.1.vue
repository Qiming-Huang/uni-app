<template>
	<view>
		<view class="notice">
			<uni-notice-bar :text="notice_text"></uni-notice-bar>
		</view>
		<button @click="show">123</button>
		<view>
<!-- 			<uni-card v-for="(item, index) in date_zhuzhu" :title="item" :note="date_niuniu[index] + content_niuniu[index]">
				{{content_zhuzhu[index]}}
			</uni-card> -->
			<uni-card v-for="(item, index) in date_zhuzhu" :title="item">
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
					url: 'https://7463-tcb-qhecmwur07xs3mq94b72a-5f9f0a-1305135771.tcb.qcloud.la/diary.json',
					// dataType: 'json',
					success: (res) => {
						// this.date_niuniu = res.data.date_niuniu;
						this.date_zhuzhu = res.data.date;
						// this.content_niuniu = res.data.content_niuniu;
						this.content_zhuzhu = res.data.comment;
						// this.notice_text = res.data.notice_text;
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
			},
			show() {
				uniCloud.callFunction({
					name: "addRecords",
					success(res) {
						console.log(res)
					}
				})
			}
		},
		onLoad() {
			this.updateDate();
		},
		onPullDownRefresh() {
			this.updateDate();
			setTimeout(() => {
				uni.showToast({
					title: '更新完成'
				});
				uni.stopPullDownRefresh();
			}, 1000)
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