<template>
	<view>
		<tText :text="text"></tText>
<!-- 		<view style="display: flex; justify-content: center;">
			<view class="heart"></view>
		</view> -->
		<button @click="getData">click me</button>
	</view>
</template>

<script>
	import tText from "components/tText.vue"
	export default {
		data() {
			return {
				text: "2.0.2新增悬浮按钮，增加了额外的页面",
			}
		},
		methods: {
			getData() {
				uni.request({
					url: 'https://ebridge.xjtlu.edu.cn/urd/sits.urd/run/siw_lgn',
					dataType: 'json',
					header: {
						cookies: 'JSESSIONID=ADF59DE74399B0B6B87C97A094DB7787; EVISIONLOGINLANG=; EVISIONLOGINHTV=; SESSIONSALT=D589F0FF-0C7B-482F-B3B5-C5C8518170D7; EVISIONID=C5D8B8833C9640CC87142EB1F99150D7; JSESSIONID=4B17CF7445C34E9E502FF08897433D67; _ga=GA1.3.447520307.1567472088; amplitude_id_9f6c0bb8b82021496164c672a7dc98d6_edmxjtlu.edu.cn=eyJkZXZpY2VJZCI6IjM4ZDNjOWViLTg4ZWUtNDBiZS1iMWZhLTZhZWRlYzNlNzc3NlIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTU3MDg0NTU4MDE2NiwibGFzdEV2ZW50VGltZSI6MTU3MDg0NTU4MDE2NywiZXZlbnRJZCI6MCwiaWRlbnRpZnlJZCI6Niwic2VxdWVuY2VOdW1iZXIiOjZ9; amplitude_id_408774472b1245a7df5814f20e7484d0xjtlu.edu.cn=eyJkZXZpY2VJZCI6IjEyNTBmNGNkLTAyYzMtNDU4NS1hODk4LWJmMTBhMWE4Y2RkNVIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTU3Njg5MzIzMjI4NCwibGFzdEV2ZW50VGltZSI6MTU3Njg5MzIzMjI4OSwiZXZlbnRJZCI6NCwiaWRlbnRpZnlJZCI6MjYsInNlcXVlbmNlTnVtYmVyIjozMH0=; AMCV_8E929CC25A1FB2B30A495C97%40AdobeOrg=1687686476%7CMCIDTS%7C18530%7CMCMID%7C72558563724469850142907388371595763724%7CMCAAMLH-1601526324%7C11%7CMCAAMB-1601526324%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1600928724s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C3.0.0; __gads=ID=9d536d68071032db:T=1600921530:S=ALNI_MZa99e2GfbiLAWPNBLF1NdQw6mCMA; utag_main=v_id:0174be5bd4e20008e9407e8f4b9603079005007100ac8$_sn:1$_se:8$_ss:0$_st:1600923585327$ses_id:1600921523428%3Bexp-session$_pn:4%3Bexp-session$vapi_domain:xjtlu.edu.cn; source=www.baidu.com|scholar.google.com'
					},
					success(res) {
						console.log(res)
					},
					fail(err) {
						console.log(err)
					}
				})
			}
		},
		components: {
			tText
		}
	}
</script>

<style>
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
		animation-iteration-count: infinite;
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
