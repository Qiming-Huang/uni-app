<template>
	<view>
		<view class="top">
			<view style="display: flex;">
				<view style="flex: 1;">1</view>
				<view style="flex: 1">2</view>
			</view>
		</view>
		<view class="middle">2</view>
		<view class="bottom">3</view>
		<button @click="test">click me to show date</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			test() {
				var date = new Date()
				console.log(date.getFullYear())
			}
		}
	}
</script>

<style>
	
</style>
