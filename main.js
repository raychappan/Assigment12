$(document).ready(function(){
    var temp = 0
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/find?",
		type: "GET",
		dataType: "JSON",
		 data: {
        	q: "New York",
        	units: "imperial",
        	appid: "1eef43688b2e821177cc3f047378e606"
        },


            console.log(data)
             console.log(data.list[0].main.temp);
             console.log(data.list[1].main.temp);
             console.log(data.list[2].main.temp);

            $("#NY").html("The temp is: " + data.list[0].main.temp);
            $("#TLV").html("The temp is: " + data.list[1].main.temp);
            $("#Cabo").html("The temp is: " + data.list[2].main.temp);
        },
        error: function(data, textStatus, errorThrown) {
            console.log("whomp, whomp");
            console.log(errorThrown);
        }

    })

    if (temp > 32) {
            $("body").css("background-color", "white");
            
            
        }

    $("#1").click(function(){
        $(".NewYork").toggle();
    });

    $("#2").click(function(){
        $(".TelAviv").toggle();
    });

    $("#3").click(function(){
        $(".CaboSanLucas").toggle();
    });




