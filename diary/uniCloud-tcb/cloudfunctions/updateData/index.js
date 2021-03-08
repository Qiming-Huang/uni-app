'use strict';

const db = uniCloud.database();
const dbCmd = db.command
const articleCollection = db.collection('diary');

exports.main = async (event, context) => {
	console.log('event : ' + event)
	if (event.who == "zhu") {
		let res = await articleCollection.doc("79550af26041de450871ca0d7d54a8cd").update({
			zhu: dbCmd.unshift({date: event.date, text: event.text})
		})
	}
	if (event.who == "niu") {
		let res = await articleCollection.doc("79550af26041de450871ca0d7d54a8cd").update({
			niu: dbCmd.unshift({date: event.date, text: event.text})
		})
	}
	// console.log(event.who)
	// add 因为是异步所以要加await ？？
	// let { title, content, date}
	// let?
	// let res = await articleCollection.doc("79550af26041de450871ca0d7d54a8cd").update({
	// 	niu: dbCmd.unshift({"date": "2011", "text": "测试更新数据"})
	
	// delete
	// let _id = event.id;
	// let res = await articleCollection.doc(_id).remove();
	
	// modify
	// let _id = event.id;
	// let res = event.result;
	// await articleCollection.doc(_id).update({
	// 	title: event.title,
	// 	ceshi: event.ceshi
	
	// search 分页 skip 从第一个取， 只取10条
	// let res = await articleCollection.skip(0).limit(10).get();
	// 第二页
	//let res = await articleCollection.skip(10).limit(10).get();
	// let { page, limit } = event
	// let skip = (page - 1) * limit
	// let res = await articleCollection.skip(skip).limit(limit).get();
	// let res = await articleCollection.get();
	
	// return res // 返回requestID 是添加的数据的唯一标识
};
