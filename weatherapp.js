  
$(document).ready(function () {	

$.getJSON ("http://ip-api.com/json", function(location){
	var lat = location.lat;
	var lon = location.lon;
	var city = location.city;
	var apiKey = "&APPID=f7b2b4a7ada6b6550f94e9ecd226d3fb";
	var endPoint = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric";
	
	var url = endPoint + apiKey;
	$.getJSON (url, function(response) {
		$(".temp").html("<span>" + Math.floor(response.main.temp) + "</span><a class=\"celcius\">&deg;C</a>");
		$(".city").text(city);
		$(".wind").html("<p>"+ Math.floor(response.wind.speed) + " m/s</p><p>Wind</p>");
		$(".hum").html("<p>"+ response.main.humidity + " %</p><p>Humidity</p>");
		$(".press").html("<p>"+ response.main.pressure + " hPa</p><p>Pressure</p>");
		$(".cloud").html("<p>"+ response.clouds.all + " %</p><p>Clouds</p>");
        var s = 0;
        var weatherID = response.weather[0].id;
        if (weatherID >= 200 && weatherID <= 299) {$("body").addClass("thunder");}
        else if (weatherID >= 300 && weatherID <= 399) {$("body").addClass("drizzle");}
        else if (weatherID >= 500 && weatherID <= 599) {$("body").addClass("rain");}
        else if (weatherID >= 600 && weatherID <= 699) {$("body").addClass("snow");}
        else if (weatherID >= 700 && weatherID <= 799) {$("body").addClass("fog");}
        else if (weatherID === 800) {$("body").addClass("sunny");}
        else if (weatherID >= 801 && weatherID <= 899) {$("body").addClass("clouds");}
        else {$("body").addClass("clouds");}
        
    
        $(".temp").click(function(){  
             var f = Math.floor(response.main.temp * 1.8 + 32)
             if ($(".temp a").hasClass("celcius") === true) {$(".temp").html("<span>" + f + "</span><a id=\"fahr\">&deg;F</a>");}
             else {$(".temp").html("<span>" + Math.floor(response.main.temp) + "</span><a class=\"celcius\">&deg;C</a>");}
});
});
});
});
