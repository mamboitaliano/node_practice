module.exports = function(app) {
	var request = require('request');
	app.get('/', function(req, res) {
    	res.render('index');
    });
    app.get('/dishwashers', function(req, res) {
    	var dishwashers = "https://data.energystar.gov/resource/energy-star-certified-residential-dishwashers.json";
    	console.log("dishwasher route getting hit")
    	var dishlist = undefined;
    	request(dishwashers, function (error, response, list) {
    		if (!error && response.statusCode == 200) {
    			// console.log((JSON.parse(list)));
    			formatted_list = (JSON.parse(list));
    			dishlist = formatted_list
    		}
    		res.render('dishwashers', {list: dishlist});
    	})
    	
    });

    app.get('/washing_machines', function(req, res) {
    	var washing_machines = "https://data.energystar.gov/resource/energy-star-certified-residential-clothes-washers.json";
    	console.log("washing machine route getting hit");
    	var washing_machine_list = undefined;
    	request(washing_machines, function (error, response, list) {
    		if (!error && response.statusCode == 200) {
    			formatted_list = (JSON.parse(list));
    			washing_machine_list = formatted_list;
    		}
    		res.render('washing_machines', {list: washing_machine_list});
    	})
    	// why isn't this getting passed to washing_machines.ejs?
    });

    app.get('/displays', function(req, res) {
    	var displays = "https://data.energystar.gov/resource/energy-star-certified-displays.json"
    	console.log("washing machine route getting hit");
    	var display_list = undefined;
    	request(displays, function (error, response, list) {
    		if (!error && response.statusCode == 200) {
    			formatted_list = (JSON.parse(list));
    			display_list = formatted_list;
    		}
    		res.render('displays', {list: display_list});
    	})
    	// why isn't this getting passed to dishwashers.ejs?
    });

    app.get('/audio_video', function(req, res) {
    	var audio_video = "https://data.energystar.gov/resource/energy-star-certified-audio-video.json";
    	console.log("audio_video route getting hit");
    	var audio_video_list = undefined;
    	request(audio_video, function (error, response, list) {
    		if (!error && response.statusCode == 200) {
    			formatted_list = (JSON.parse(list));
    			audio_video_list = formatted_list;
    		}
    		res.render('audio_video', {list: audio_video_list});
    	})
    	// why isn't this getting passed to dishwashers.ejs?
    });

    app.get('/water_heaters', function(req, res) {
    	var water_heaters = "https://data.energystar.gov/resource/energy-star-certified-commercial-water-heaters.json";
    	console.log("water heater route getting hit");
    	var water_heater_list = {};
    	request(water_heaters, function (error, response, list) {
    		if (!error && response.statusCode == 200) {
    			formatted_list = (JSON.parse(list));
    			water_heater_list = formatted_list;
    		}
    		res.render('water_heaters', {list: water_heater_list});
    	})
    	// why isn't this getting passed to dishwashers.ejs?
    });

    app.get('/refrigerators', function(req, res) {
    	var refrigerators = "https://data.energystar.gov/resource/energy-star-certified-residential-refrigerators.json";
    	console.log("refrigerators route getting hit");
    	var refrigerator_list = {};
    	request(refrigerators, function (error, response, list) {
    		if (!error && response.statusCode == 200) {
    			formatted_list = (JSON.parse(list));
    			refrigerator_list = formatted_list;
    		}
    		res.render('refrigerators', {list: refrigerator_list});
    	})
    	// why isn't this getting passed to dishwashers.ejs?
    });

    app.get('/freezers', function(req, res) {
    	var freezers = "https://data.energystar.gov/resource/energy-star-certified-residential-refrigerators.json";
    	console.log("freezers route getting hit");
    	var freezer_list = {};
    	request(freezers, function (error, response, list) {
    		if (!error && response.statusCode == 200) {
    			formatted_list = (JSON.parse(list));
    			freezer_list = formatted_list;
    		}
    		res.render('freezers', {list: freezer_list});
    	})
    	// why isn't this getting passed to dishwashers.ejs?
    });

}