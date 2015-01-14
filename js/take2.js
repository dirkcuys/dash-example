---
---
var viz = (function(jquery){
    var $ = jquery;

    function loadGraph(timeframe){
        $.getJSON('{{site.baseurl}}/data/community.p2pu.org/' + timeframe + '.json', function( data ) {
            D3Chart.init(data.data);
        });
    }
    loadGraph('weekly');
    $("input[type=radio]").click(function() {
        loadGraph($(this).val());
    });

})($);
