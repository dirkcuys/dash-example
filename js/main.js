---
---
var viz = (function(jquery){
    var $ = jquery;

    function loadGraph(timeframe){
        $.getJSON('{{site.baseurl}}/data/community.p2pu.org/' + timeframe + '.json', function( data ) {

            var ctx = document.getElementById("myChart").getContext("2d");
            var graph_data = {
                labels: data.labels,
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: data.values
                    }
                ]
            };
            var options = {
                animation: false,
                bezierCurve : false,
                pointHitDetectionRadius : 5,
                showScale: true,
            };
            var myLineChart = new Chart(ctx).Line(graph_data, options);

        });
    }
    loadGraph('weekly');
    $("input[type=radio]").click(function() {
        loadGraph($(this).val());
    });


})($);
