<template>
	<view class="content" :style="'height:'+ screenHeight +'px !important;'" style="flex-direction: column;">
		<view class="notice" style="background-color: #ffd384; margin: 20rpx; padding: 20rpx; border-radius: 15rpx; text-align: center;">
			<rich-text nodes="<h3>notice board</h3>"></rich-text>
			<rich-text :nodes="'<h3>' + notice_text + '</h3>'"></rich-text>
			<button @click="showData" plain style="background-color: #ffd384; margin-top: 15rpx;">点我刷新</button>
		</view>	
		<view class="zhu_niu_img" style="text-align: center;">
			<image src="../../static/boy.png" mode="widthFix" style="height: 30%; width: 30%; margin-right: 30%;" @click="click_diary_zhu"></image>
			<image src="../../static/girl.png" mode="widthFix" style="height: 30%; width: 30%;" @click="click_diary_niu"></image>
		</view>
		<view class="add_img" style="text-align: center;">
			<image src="../../static/add.png" mode="widthFix" style="height: 10%; width: 10%;margin-right: 50%;" @click="add_diary_zhu"></image>
			<image src="../../static/add.png" mode="widthFix" style="height: 10%; width: 10%;" @click="add_diary_niu"></image>
		</view>
		<view class="zhu_content" v-if="isZhu && isDiaryShow" style=" border: solid; border-color: #007AFF; margin: 20rpx; padding: 20rpx; border-radius: 15rpx; background-color: #F1F1F1;" v-for="(item, index) in diary_zhu">
			<rich-text style="" :nodes="'<h3>' + diary_zhu[index].date + '</h3><br>'"></rich-text>
			<rich-text style="" :nodes="'<h4>' + diary_zhu[index].text + '</h4>'"></rich-text>
		</view>
		<view class="niu_content" v-if="!isZhu && isDiaryShow" style=" border: solid; border-color: #007AFF; margin: 20rpx; padding: 20rpx; border-radius: 15rpx; background-color: #F1F1F1;" v-for="(item, index) in diary_zhu">
			<rich-text style="" :nodes="'<h3>' + diary_niu[index].date + '</h3><br>'"></rich-text>
			<rich-text style="" :nodes="'<h4>' + diary_niu[index].text + '</h4>'"></rich-text>
		</view>
		<view class="add_diary" v-if="isDiarySubmit" style="border: solid; border: #007AFF; margin: 20rpx; padding: 20rpx; border-radius: 15rpx;">
			<form @submit="formSubmit">
				<rich-text v-if="waitForSubmitSuccess" nodes="<h1>提交中...请稍等<h1>" style="text-align: center;"></rich-text>
				<view class="diary submit" v-if="isDiarySubmit">
					<textarea placeholder="输入内容..." maxlength="-1" name="addContents"></textarea>
				</view>
				<button class="btn_submit" style="align-self: flex-end;" form-type="submit">点我提交</button>
			</form>
		</view>
		<view>
			<uni-fab @trigger="trigger" style="position: fixed;" direction="horizontal" :content="content_more"></uni-fab>
		</view>
		<view style="position: absolute; margin-top: 200rpx; margin-left: 280rpx;">
			<view class="heart"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				refresh_button: true,
				isDiarySubmit: false,
				isDiaryShow: true,
				isZhu: true,
				isNiu: false,
				waitForSubmitSuccess: getApp().globalData.waitForSubmitSuccess,
				screenHeight: '',
				notice_text: '',
				diary_niu:'',
				diary_zhu:'',
				add_contents: '',
				current_date: '',
				content_more: [
					{text:'更新日志', iconPath:'/static/icon/社区.png'},
					{text:'更多功能', iconPath:'/static/icon/更多.png'},
					{text: '用户', iconPath:'/static/icon/我的.png'},
				]
			}
		},
		methods: {
			trigger(e) {
				if (e.index == 0) {
					uni.navigateTo({
						url: '/pages/log/log'
					})
				}else if(e.index == 1) {
					uni.showToast({
						title: "开发中哦",
						icon: "loading"
					})
					// uni.navigateTo({
					// 	url: '/pages/more/more'
					// })
				}else if(e.index == 2) {
					// uni.navigateTo({
					// 	url: '/pages/me/me'
					// })
					uni.showToast({
						title: "开发中哦",
						icon: "loading"
					})
				}
			},
			click_diary_zhu() {
				uni.showToast({
					title: "猪猪的日记",
					image: "../../static/love.png"
				}),
				this.refresh_button = false
				this.isDiaryShow = true
				this.isDiarySubmit = false
				this.isZhu = true
			},
			click_diary_niu() {
				uni.showToast({
					title: "妞妞的日记",
					image: "../../static/love.png"
				}),
				this.refresh_button = false
				this.isDiaryShow = true
				this.isDiarySubmit = false
				this.isZhu = false
			},
			add_diary_zhu() {
				uni.showToast({
					title: "添加",
					image: "../../static/love.png"
				}),
				this.refresh_button = false
				this.isDiarySubmit = true
				this.isDiaryShow = false
				getApp().globalData.whoAdd = "zhu"
				console.log(getApp().globalData.whoAdd)
			},
			add_diary_niu() {
				uni.showToast({
					title: "到妞妞添加咯",
					image: "../../static/love.png"
				}),
				// this.isShowButton = true
				this.refresh_button = false
				this.isDiarySubmit = true
				this.isDiaryShow = false
				getApp().globalData.whoAdd = "niu"
				console.log(getApp().globalData.whoAdd)
			},
			showData() {
				this.refresh_button = false
				this.diary_zhu = getApp().globalData.diary_zhu
				this.diary_niu = getApp().globalData.diary_niu
				this.notice_text = getApp().globalData.notice_text
			},
			goToTest() {
				// uni.navigateTo({
				// 	url: "/pages/add_diary/add_diary"
				// })
				uni.redirectTo({
					url: "/pages/add_diary/add_diary"
				})
			},
			formSubmit(e) {
				this.waitForSubmitSuccess = true
				uniCloud.callFunction({
					name: "updateData",
					data: {
						who: getApp().globalData.whoAdd,
						date: getApp().globalData.current_date,
						text: e.detail.value.addContents
					},
					success() {
						uni.showToast({
							title: "success"
						})
						setTimeout(function(){
							uni.reLaunch({
								url: "../index/index"
							})
						},1000)
					}
				})
			},
			button_more() {
				console.log('show')
			}
		},
		onLoad() {
			var date = new Date()
			getApp().globalData.current_date = date.getFullYear() + '-' + (date.getMonth()+1).toString()  + '-' + date.getDate()
			this.screenHeight = uni.getSystemInfoSync().windowHeight;
			this.diary_zhu = getApp().globalData.diary_zhu
			this.diary_niu = getApp().globalData.diary_niu
			this.notice_text = getApp().globalData.notice_text
			console.log(getApp().globalData.current_date)
		}
	}
</script>

<style>
	.content {
		display: flex;
		border-radius: 15rpx;
	}
	
	.diary {
		border: solid;
		border-color: #007AFF;
		display: flex;
		flex: 1; 
/* 		background-color: #007AFF; */
		border-radius: 20rpx; 
		margin: 20rpx; 
		padding: 20rpx;
	}
	
	.btn_submit {
		margin: 20rpx;
		background-color: #007AFF
	}
	
	@keyframes hd{
		25%{
			transform: scale(0.125);
			transform: rotate(45deg);
		}
	}
	
	.heart {
		width: 200rpx;
		height: 200rpx;
		animation-name: hd;
		background-color: #DD524D;
		animation-duration: 1s;
		animation-iteration-count: 2;
		transform: rotate(45deg) scale(0.25);
	}
	
	.heart::before {
		content: '';
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
		position: absolute;
		background-color: #DD524D;
		transform: translateX(-100rpx);
	}
	
	.heart::after {
		content: '';
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
		position: absolute;
		background-color: #DD524D;
		transform: translateY(-100rpx);
	}
</style>
<!-- http://website.thomaszz4.cn/static/json/comment.json -->