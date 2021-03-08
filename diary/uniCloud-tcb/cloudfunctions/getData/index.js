'use strict';
// get the specify data from uniCloud
const db = uniCloud.database();
const diaryCollection = db.collection('diary')

exports.main = async (event, context) => {
	let res = await diaryCollection.get();
	
	return res
};
