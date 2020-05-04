const abap = require('./src/zcl_index.clas.abap');

exports.handler = async (event) => {
	const response = new abap.zcl_index().run({
		method: 'TEST',
		path: 'TEST',
		query: '',
  });

  return response;
  
};
