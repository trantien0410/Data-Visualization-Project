d3.csv("https://raw.githubusercontent.com/trantien0410/Data-Visualization-Project/master/project/data/job_good.csv", function(data) {
        //All the variables
        var margin = {top: 10, right: 30, bottom: 30, left: 100},
            width = 600 - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        //SVG
        var svg = d3.select("body")
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform","translate(" + margin.left + "," + margin.top + ")");
        
        // sort data
        data.sort(function(b, a) {
            return a.mValue - b.mValue;
        });

        //Scales
        var x = d3.scaleLinear()
                .domain([0, 0.6])
                .range([ 0, width]);

  // Y axis
        var y = d3.scaleBand()
                .range([ 0, height ])
                .domain(data.map(function(d) { return d.mJob; }))
                .padding(.1);
         svg.append("g")
            .call(d3.axisLeft(y))

  //Bars
        svg.selectAll("myRect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", x(0) )
            .attr("y", function(d) { return y(d.mJob); })
            .attr("width", function(d) { return x(d.mValue); })
            .attr("height", y.bandwidth() )
            .attr("fill", "#257cff")
});

