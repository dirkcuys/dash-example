var D3Chart = (function(){

    function init(graphData){
        var margin = {top: 20, right: 20, bottom: 30, left: 40};
        var width = 960 - margin.left - margin.right;
        var height = 500 - margin.top - margin.bottom;
        var barWidth = width/graphData.length;

        var x = d3.time.scale()
            .range([0, width]);

        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .ticks(10);

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(10, "");

        var spacing = width/graphData.length;
        d3.select("svg").selectAll("*").remove();
        var svg = d3.select("svg")
            .attr("viewBox", "0 0 " + (width+margin.left+margin.right) + " " + (height+margin.top+margin.bottom) )
            .attr("preserveAspectRatio", "xMidYMid meet")
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        x.domain([new Date( graphData[0][0]), new Date(graphData[graphData.length-1][0]) ]);
        y.domain([0, d3.max(graphData, function(d) { return d[1]; })]);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        var bars = svg.selectAll(".bar").data(graphData);
        bars.enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(new Date(d[0])); })
            .attr("width", barWidth)
            .attr("y", function(d) { return y(d[1]); })
            .attr("height", function(d) { return height - y(d[1]); })
            .append("svg:title")
            .text(function(d) { return d[0] + ' : ' + d[1]; });
    }

    return {
        init: init,
        debug: {
        }
    };
})();
