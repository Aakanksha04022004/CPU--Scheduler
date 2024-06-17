$(document).ready(function () {

	var ctx1 = $("#pie-chartcanvas-1");
	

	var data1 = {
		labels : ["Windows 7", "Windows 10", "Kali Linux"],
		datasets : [
			{
				label : "Average time",
				data : [125,58,16],
				backgroundColor : [
                    "#DC143C",
                    "#F4A460",
                    "#2E8B57"
                ],
                borderColor : [
                    "#CB252B",
                    "#E39371",
                    "#1D7A46"
                ],
                borderWidth : [1, 1, 1]
			}
		]
	};

	

	var options = {
		title : {
			display : true,
			position : "top",
            text : "Pie Chart based on average time for 3 test cases",
			fontSize : 18,
			fontColor : "#111"
		},
		legend : {
			display : true,
			position : "bottom"
		}
	};


	var chart1 = new Chart( ctx1, {
		type : "pie",
		data : data1,
		options : options
	});


});