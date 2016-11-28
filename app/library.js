var dataTypes = module.exports = function(value){
	if(typeof(value) === 'string'){
		return value.length;
	}
	if(value === null || value === undefined){
		return 'no value';
	}
	if(typeof(value) === 'boolean'){
		return value;
	}
	if(typeof(value) === 'number' && value < 100){
		return 'less than 100';
	}
	if(typeof(value) === 'number' && value > 100){
		return 'more than 100';
	}
	if(typeof(value) === 'number' && value === 100){
		return 'equal to 100';
	}
	if(value instanceof Array){
		if(value[2] != null){
			return value[2];
		}
	}
	if(typeof(value) === 'function'){
		return 'called callback';
	}
}