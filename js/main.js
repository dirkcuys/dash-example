var viz = (function(jquery){



    var ctx = document.getElementById("myChart").getContext("2d");
    var data = {
        labels: [
    '2013 Week 17', '2013 Week 18', '2013 Week 19', '2013 Week 20', '2013 Week 21', '2013 Week 22', '2013 Week 23', '2013 Week 24', '2013 Week 25', '2013 Week 26', '2013 Week 27', '2013 Week 28', '2013 Week 29', '2013 Week 30', '2013 Week 31', '2013 Week 32', '2013 Week 33', '2013 Week 34', '2013 Week 35', '2013 Week 36', '2013 Week 37', '2013 Week 38', '2013 Week 39', '2013 Week 40', '2013 Week 41', '2013 Week 42', '2013 Week 43', '2013 Week 44', '2013 Week 45', '2013 Week 46', '2013 Week 47', '2013 Week 48', '2013 Week 49', '2013 Week 50', '2013 Week 51', '2014 Week 00', '2014 Week 01', '2014 Week 02', '2014 Week 03', '2014 Week 04', '2014 Week 05', '2014 Week 06', '2014 Week 07', '2014 Week 08', '2014 Week 09', '2014 Week 10', '2014 Week 11', '2014 Week 12', '2014 Week 13', '2014 Week 14', '2014 Week 15', '2014 Week 16', '2014 Week 17', '2014 Week 18', '2014 Week 19', '2014 Week 20', '2014 Week 21', '2014 Week 22', '2014 Week 23', '2014 Week 24', '2014 Week 25', '2014 Week 26', '2014 Week 27', '2014 Week 28', '2014 Week 29', '2014 Week 30', '2014 Week 31', '2014 Week 32', '2014 Week 33', '2014 Week 34', '2014 Week 35', '2014 Week 36', '2014 Week 37', '2014 Week 38', '2014 Week 39', '2014 Week 40', '2014 Week 41', '2014 Week 42', '2014 Week 43', '2014 Week 44', '2014 Week 45', '2014 Week 46', '2014 Week 47', '2014 Week 48', '2014 Week 49', '2014 Week 50', '2014 Week 51', '2014 Week 52', '2015 Week 00', '2015 Week 01', '2015 Week 02'
    ],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [
    6, 18, 45, 40, 24, 19, 38, 47, 40, 24, 48, 30, 31, 12, 14, 5, 8, 48, 18, 11, 7, 7, 24, 12, 9, 20, 6, 4, 21, 21, 32, 50, 29, 31, 1, 4, 47, 85, 44, 35, 24, 14, 27, 23, 10, 23, 16, 30, 9, 21, 44, 19, 33, 46, 45, 25, 8, 10, 9, 42, 25, 37, 24, 28, 15, 28, 11, 45, 49, 13, 16, 11, 17, 14, 14, 36, 19, 19, 33, 39, 25, 24, 18, 12, 29, 11, 8, 4, 3, 44, 1
    ]
            }
        ]
    };
    var options = {
        animation: false,
        bezierCurve : false,
        pointHitDetectionRadius : 5,
        showScale: true,
    };
    var myLineChart = new Chart(ctx).Line(data, options);
})($);