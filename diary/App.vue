<script>
	var date = new Date();
	export default {
		globalData: {
			diary_niu: '',
			diary_zhu: '',
			notice_text: '',
			whoAdd: '',
			current_date: '',
			notice_text: '',
			waitForSubmitSuccess: false,
		},
		// onLaunch: function() {
		// 	const updateManager = uni.getUpdateManager()
		// 	updateManager.onCheckForUpdate(function(res){
		// 		if (res.hasUpdate) {
		// 			updateManager.onUpdateReady(function(res2) {
		// 				uni.showModal({
		// 					title: "更新提示",
		// 					content: "发现新版本，是否重启应用?",
		// 					success(res2) {
		// 						if (res2.confirm) {
		// 							updateManager.applyUpdate()
		// 						}
		// 					}
		// 				})
		// 			})
		// 		}
		// 	})
		// 	console.log('App Launch')
		// 	uniCloud.callFunction({
		// 		name: "getData",
		// 		success(res) {
		// 			getApp().globalData.diary_niu = res.result.data[0].niu
		// 			getApp().globalData.notice_text = res.result.data[0].notice
		// 			getApp().globalData.diary_zhu = res.result.data[0].zhu
		// 			getApp().globalData.notice_text = res.result.data[0].notice
		// 			getApp().globalData.current_date = (date.getYear() + 1900).toString() + '.' + (date.getMonth() + 1).toString() + '.' + date.getDay().toString()
		// 			console.log('finished!')
		// 			uni.showToast({
		// 				title: "请点击按钮刷新数据哦！",
		// 				image: "../../static/loading.png"
		// 			})
					
		// 		},
		// 		fail(err) {
		// 			uni.showToast({
		// 				title: "获取数据失败",
		// 				image: "../../static/loading.png"
		// 			})
		// 		}
		// 	})
		// },
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>



