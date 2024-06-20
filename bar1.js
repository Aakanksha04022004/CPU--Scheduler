$(document).ready(function () {

    var ctx= $("#bar-chartcanvas");

    var data ={
        labels : ["testcase 1", "testcase 2", "testcase 3"],
        datasets : [
            {
                label : "Windows 7",
                data : [109,141,125],
                backgroundColor : [
                    "rgba(10, 20, 30, 0.3)",
                    "rgba(10, 20, 30, 0.3)",
                    "rgba(10, 20, 30, 0.3)"
                ],
                borderColor : [
                    "rgba(10, 20, 30, 1)",
                    "rgba(10, 20, 30, 1)",
                    "rgba(10, 20, 30, 1)"
                ],
                borderWidth : 1
            },
            {
                label : "Windows 10",
                data : [30,32,46],
                backgroundColor : [
                    "rgba(50, 150, 250, 0.3)",
                    "rgba(50, 150, 250, 0.3)",
                    "rgba(50, 150, 250, 0.3)"
                ],
                borderColor : [
                    "rgba(50, 150, 250, 1)",
                    "rgba(50, 150, 250, 1)",
                    "rgba(50, 150, 250, 1)"
                ],
                borderWidth : 1
            },
            {
                label : "Kali Linux",
                data : [17,15,20],
                backgroundColor : [
                    "rgba(10, 20, 250, 0.3)",
                    "rgba(10, 20, 250, 0.3)",
                    "rgba(10, 20, 250, 0.3)"
                ],
                borderColor : [
                    "rgba(10, 20, 250, 1)",
                    "rgba(10, 20, 250, 1)",
                    "rgba(10, 20, 250, 1)"
                ],
                borderWidth : 1
            }
        ]

    };

    var options = {
        title : {
            display : true,
			position : "top",
			text : "Bar Graph showing comparision between excution times taken by different OS",
			fontSize : 18,
			fontColor : "#111"
        },
        legend : {
			display : true,
			position : "bottom"
        },
        scales : {
			yAxes : [{
				ticks : {
					min : 0
				}
			}]
		}
    };

    var chart = new Chart(ctx , {
        type : "bar",
        data : data,
        options : options
    });
});