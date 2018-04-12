$(function () {
		
	var C31LNj4geEhdFL3XzAyZ7CK_chartData = { "datasets" : [ { "fillColor" : "rgba(35,239,69,{0})" , "data" : [ 210.00 , 140.00 , 210.00 , 140.00 , 210.00 , 210.00 , 210.00 , 210.00 , 210.00 , 130.00 , 130.00 , 130.00 , 130.00 , 130.00 , 200.00 , 130.00 , 130.00 , 200.00 , 210.00 , 200.00 , 200.00 , 200.00 , 200.00 , 200.00 , 200.00 , 200.00 , 200.00] , "label" :  "L1"  , "strokeColor" : "rgba(35,239,69,{0})" , "pointColor" : "rgba(35,239,69,{0})"} , { "fillColor" : "rgba(39,119,69,{0})" , "data" : [ 98.00 , 410.00 , 181.00 , 410.00 , 238.00 , 340.00 , 341.00 , 340.00 , 340.00 , 415.00 , 415.00 , 400.00 , 350.00 , 230.00 , 340.00 , 180.00 , 108.00 , 340.00 , 98.00 , 340.00 , 340.00 , 340.00 , 340.00 , 340.00 , 340.00 , 340.00 , 340.00] , "label" :  "L2"  , "strokeColor" : "rgba(39,119,69,{0})" , "pointColor" : "rgba(39,119,69,{0})"} , { "fillColor" : "rgba(128,143,69,{0})" , "data" : [ 0.00 , 1210.00 , 600.00 , 1200.00 , 1000.00 , 1480.00 , 1500.00 , 1500.00 , 1510.00 , 700.00 , 200.00 , 50.00 , 0.00 , 0.00 , 1510.00 , 0.00 , 0.00 , 1500.00 , 0.00 , 1510.00 , 1510.00 , 1510.00 , 1520.00 , 1520.00 , 1520.00 , 1520.00 , 1520.00] , "label" :  "L3"  , "strokeColor" : "rgba(128,143,69,{0})" , "pointColor" : "rgba(128,143,69,{0})"}] , "labels" : [ { "$date" : "2016-05-11T11:51:10.000Z"} , { "$date" : "2016-05-11T11:51:12.000Z"} , { "$date" : "2016-05-11T11:51:20.000Z"} , { "$date" : "2016-05-11T11:52:22.000Z"} , { "$date" : "2016-05-11T11:52:30.000Z"} , { "$date" : "2016-05-11T11:52:40.000Z"} , { "$date" : "2016-05-11T11:52:50.000Z"} , { "$date" : "2016-05-11T11:53:00.000Z"} , { "$date" : "2016-05-11T11:53:10.000Z"} , { "$date" : "2016-05-11T11:53:32.000Z"} , { "$date" : "2016-05-11T11:53:42.000Z"} , { "$date" : "2016-05-11T11:53:52.000Z"} , { "$date" : "2016-05-11T11:55:02.000Z"} , { "$date" : "2016-05-11T11:55:13.000Z"} , { "$date" : "2016-05-11T11:55:20.000Z"} , { "$date" : "2016-05-11T11:55:23.000Z"} , { "$date" : "2016-05-11T11:55:33.000Z"} , { "$date" : "2016-05-11T11:56:30.000Z"} , { "$date" : "2016-05-11T11:56:43.000Z"} , { "$date" : "2016-05-11T11:57:40.000Z"} , { "$date" : "2016-05-11T11:57:50.000Z"} , { "$date" : "2016-05-11T11:59:00.000Z"} , { "$date" : "2016-05-11T11:59:10.000Z"} , { "$date" : "2016-05-11T11:59:20.000Z"} , { "$date" : "2016-05-11T11:59:30.000Z"} , { "$date" : "2016-05-11T11:59:41.000Z"} , { "$date" : "2016-05-11T11:59:51.000Z"}]} ;
			
		var C31LNj4geEhdFL3XzAyZ7CK_chartOptions = {
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        bezierCurve: true,
        bezierCurveTension: 0.4,
        pointDot: true,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        responsive: true,
		barShowStroke: true,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
    	};

    	var C31LNj4geEhdFL3XzAyZ7CK_ctx = document.getElementById("C31LNj4geEhdFL3XzAyZ7CK_chart").getContext("2d");
    	var C31LNj4geEhdFL3XzAyZ7CK_myNewChart = 
			new Chart(C31LNj4geEhdFL3XzAyZ7CK_ctx).Line(
				C31LNj4geEhdFL3XzAyZ7CK_chartData, C31LNj4geEhdFL3XzAyZ7CK_chartOptions);	
		
				
    var lineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 140]
            },
            {
                label: "Example dataset",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.7)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(26,179,148,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

	
    
	
    var lineOptions = {
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        bezierCurve: true,
        bezierCurveTension: 0.4,
        pointDot: true,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        responsive: true,
    };


    var ctx = document.getElementById("lineChart").getContext("2d");
    var myNewChart = new Chart(ctx).Line(lineData, lineOptions);

    var barData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.8)",
                highlightFill: "rgba(26,179,148,0.75)",
                highlightStroke: "rgba(26,179,148,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var barOptions = {
        scaleBeginAtZero: true,
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        barShowStroke: true,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        responsive: true,
    }


    var ctx = document.getElementById("barChart").getContext("2d");
    var myNewChart = new Chart(ctx).Bar(barData, barOptions);

    var polarData = [
        {
            value: 300,
            color: "#a3e1d4",
            highlight: "#1ab394",
            label: "App"
        },
        {
            value: 140,
            color: "#dedede",
            highlight: "#1ab394",
            label: "Software"
        },
        {
            value: 200,
            color: "#b5b8cf",
            highlight: "#1ab394",
            label: "Laptop"
        }
    ];

    var polarOptions = {
        scaleShowLabelBackdrop: true,
        scaleBackdropColor: "rgba(255,255,255,0.75)",
        scaleBeginAtZero: true,
        scaleBackdropPaddingY: 1,
        scaleBackdropPaddingX: 1,
        scaleShowLine: true,
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        responsive: true,

    };

    var ctx = document.getElementById("polarChart").getContext("2d");
    var myNewChart = new Chart(ctx).PolarArea(polarData, polarOptions);

    var doughnutData = [
        {
            value: 300,
            color: "#a3e1d4",
            highlight: "#1ab394",
            label: "App"
        },
        {
            value: 50,
            color: "#dedede",
            highlight: "#1ab394",
            label: "Software"
        },
        {
            value: 100,
            color: "#b5b8cf",
            highlight: "#1ab394",
            label: "Laptop"
        }
    ];

    var doughnutOptions = {
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 45, // This is 0 for Pie charts
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        responsive: true,
    };


    var ctx = document.getElementById("doughnutChart").getContext("2d");
    var myNewChart = new Chart(ctx).Doughnut(doughnutData, doughnutOptions);


    var radarData = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(26,179,148,0.2)",
                strokeColor: "rgba(26,179,148,1)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    };

    var radarOptions = {
        scaleShowLine: true,
        angleShowLineOut: true,
        scaleShowLabels: false,
        scaleBeginAtZero: true,
        angleLineColor: "rgba(0,0,0,.1)",
        angleLineWidth: 1,
        pointLabelFontFamily: "'Arial'",
        pointLabelFontStyle: "normal",
        pointLabelFontSize: 10,
        pointLabelFontColor: "#666",
        pointDot: true,
        pointDotRadius: 3,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        responsive: true,
    }

    var ctx = document.getElementById("radarChart").getContext("2d");
    var myNewChart = new Chart(ctx).Radar(radarData, radarOptions);

});