
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

// 3. Calls the validate function
exports.validate = function(req, res){
	var greetings = "Hello from the server!";   
	res.send(greetings);		// 4. sends "greetings" back to our jquery function.
};