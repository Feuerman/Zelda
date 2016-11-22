import lodash from 'lodash';

export default class ArrayClass {
	constructor(arr){
		this.arr = arr;		
	}
	getData(){
		return {
			data: this.arr
		}
	}
	deleteString(...str){
		const tempArr = _.clone(this);
		const result = _.pullAll(tempArr.arr, str);
		return {
			result
		}
	}
}