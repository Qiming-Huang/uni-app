<template>
	<view>
		<view class="content">
			<view class="top">
<!-- 				<view v-for="(item, index) in text" :style="flex_style[index]">
					{{ item }}
				</view> -->
				<view style="flex: 1; display: flex; margin: 0;">
					<view style="flex: 3; display: flex; justify-content: space-between; background-color: #a1cae2;">
						<view style="width: 40%; display: flex; flex-direction: column; justify-content: space-around; text-align: center; color: white; border-radius: 15rpx; font-size: larger;">
							<view>到访日记</view>
							<view>访问你心</view>
						</view>
						<view style="width: 30%; border-radius: 15rpx;">
							<image src="../../static/earth.svg" style="height: 135rpx; width: 135rpx;"></image>
						</view>
					</view>
					<view style="flex: 1; text-align: center; margin-buttom: 10rpx; color: white; background-color: #ffab73;">今日<rich-text :nodes="isNewUpdate ? newUpdateText : notNewUpdateText" style="color: firebrick;"></rich-text>新日记</view>
				</view>
				<view style="flex: 3; display: flex;">
					<view style="flex: 1; display: flex; flex-direction: column; margin: 0; background-color: #8F8F94;">
						<view style="flex: 2; border-radius: 15rpx; display: flex; justify-content: center; align-items: center;">
							<text style="color: white;">待开发</text>
						</view>
						<view style="flex: 1; display: flex;">
							<view style="flex: 1; display: flex; flex-direction: column; padding-top: 20rpx; padding-left: 20rpx; background-color: #3F536E; border-radius: 15rpx;">
								<view style="flex: 1; color: white; font-size: large;">开发进度</view>
								<view style="flex: 1; color: white; font-size: large;">签到日历</view>
							</view>
							<view :style="style.percentage" style="padding-bottom: 10rpx; background-color: #fcd1d1; border-radius: 15rpx;">
								<text style="text-align: right; color: #0a043c;">50%</text>
							</view>
						</view>
					</view>
					<view style="background-color: #5b6d5b; margin: 0;">
						<rich-text nodes="<h2>版本更新</h2>" style="color: white; text-align: center;"></rich-text>
						<view style="padding-left: 10rpx;">
							<rich-text :nodes="versionUpateNodes.version" style="color: white;"></rich-text>
							<rich-text nodes="<hr></hr>" :style="hrStyle"></rich-text>
							<rich-text :nodes="versionUpateNodes.nodes" style="color: white;"></rich-text>
						</view>
					</view>
				</view>
				<view style="flex: 1; display: flex; color: white;">
					<view style="flex: 1; display: flex; flex-direction: column; margin: 0; background-color: #78c4d4;">
						<view style="flex: 2; display: flex;">
							<view style="flex: 1; padding: 15rpx;" @click="goToSingInCalendar">签到日历</view>
							<view style="flex: 1; text-align: right; padding: 15rpx;">
								<button size="mini" style="background-color: white; color: #808080;" @click="signIn(index)">签到</button>
							</view>
						</view>
						<view style="flex: 3; display: flex; padding: 15rpx;">
							<!-- <view style="flex: 1;"><image src="../../static/number/1_square_solid_数字1.svg" style="height: 100%; width: 100%;"></image></view> -->
							<view style="flex: 1;" v-for="(item, index) in number_icon_path">
<!-- 								<image v-if="!isChecked[index]" :src="number_icon_path[index]" style="height: 100%; width: 100%;" @click="signInTest(index)"></image>
								<image v-if="isChecked[index]" src="../../static/checked.svg" style="height: 100%; width: 100%;"></image> -->
								<image v-if="!day[index]" :src="number_icon_path[index]" style="height: 100%; width: 100%;" @click="signInNumber(index)"></image>
								<image v-if="day[index]" src="../../static/checked.svg" style="height: 100%; width: 100%;"></image>
							</view>
							<view v-if="test"></view>
						</view>
					</view>
				</view>
				<view style="flex: 1; display: flex;">
					<view style="flex: 1; display: flex; justify-content: center; align-items: center; background-color: #c19277; margin: 0;">
						<view style="margin: 15rpx; color: #0a043c;">
							<rich-text nodes="<h2>Version 1.1.0</h2>"></rich-text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current_day: '',
				day: '',
				test: true,
				isChecked: [
					false,
					false,
					false,
					false,
					false,
					false,
					false,
				],
				isNewUpdate: true,
				newUpdateText: '<h3 style="color">有</h3>',
				notNewUpdateText: '<h3 style="color">无</h3>',
				versionUpateNodes: {
						version: '<h2>1.1.0</h2>',
						nodes: '<h4>完成了全部页面的设计<br></br>更多功能有待更新</h4>'	
				},
				style: {
					percentage: 'flex: 1; color: white; display: flex; justify-content: flex-end; flex-direction: column; padding-right: 10rpx;'
				},
				number_icon_path: [
					'../../static/number/1_square_solid_数字1.svg',
					'../../static/number/2_square_solid_数字2.svg',
					'../../static/number/3_square_solid_数字3.svg',
					'../../static/number/4_square_solid_数字4.svg',
					'../../static/number/5_square_solid_数字5.svg',
					'../../static/number/6_square_solid_数字6.svg',
					'../../static/number/7_square_solid_数字7.svg',
				]
			}
		},
		onLoad() {
			let localData = require('@/static/json/localData.json');
			this.day = localData.day;
			console.log(this.day);
		},
		methods: {
			signIn(index) {
				this.test = !this.test;
				var currentDate = new Date();
				this.current_day = currentDate.getDay();
				console.log(currentDate.getDay());
			},
			getWeek() {
				var currentDate = new Date();
				this.current_day =  String(currentDate.getDay());
			},
			signInNumber(index) {
				console.log(index + 1);
				// this.isChecked[index] = !this.isChecked[index];
				this.day[index] = !this.day[index];
				this.getWeek();
				console.log(this.current_day)
				uni.showToast({
					title: "成功签到星期" + this.current_day.toString() + '！',
				})
			},
			goToSingInCalendar() {
				uni.showToast({
					title: "开发中",
					icon: 'loading'
				})
			}
		}
	}
</script>

<style>
	.top {
		height: 1300rpx;
		display: flex;
		flex-direction: column;
	}
	
	.top > view {
		/* background-color: #808080; */
		margin: 25rpx;
		border-radius: 15rpx;
	}
	
	.top > view > view {
		/* background-color: #F0AD4E; */
		margin: 25rpx;
		border-radius: 15rpx;
	}
</style>
