console.log("Yeah, Boiiii!!");

const mainColor= getComputedStyle(document.body).getPropertyValue("--main-color");

$(document).ready(function(){
    $("a").tooltip();
});

function drawConfidence(confidence, areaId) {
    const dimensions= {
        "width": 100,
        "height": 20,
        "padding": {
            "top": 0,
            "bottom": 0,
            "left": 4,
            "right": 4,
        },
        "offset": {
            "x": 5,
            "y": 5,
        },
    }

    const svg= d3.select(`#${areaId}`)
        .append("svg")
        .attr("width", dimensions.width + (dimensions.offset.x * 2))
        .attr("height", dimensions.height + (dimensions.offset.y * 2))

    const rectBase= svg.append("rect")
        .attr("x", dimensions.offset.x)
        .attr("y", dimensions.offset.y)
        .attr("width", 100)
        .attr("height", 20)
        .attr("rx", 10)
        .attr("fill", mainColor)
        .attr("stroke", "white")
        .attr("stroke-width", "5")
    
    const rectConfidence= svg.append("rect")
        .attr("x", dimensions.offset.x)
        .attr("y", dimensions.offset.y)
        .attr("width", confidence)
        .attr("height", 20)
        .attr("rx", 5)
        .attr("fill", "white")
}

drawConfidence(100, "english-confidence-svg");
drawConfidence(40, "spanish-confidence-svg");
drawConfidence(85, "python-confidence-svg");
drawConfidence(75, "javascript-confidence-svg");
drawConfidence(85, "postgresql-confidence-svg");
drawConfidence(80, "mysql-confidence-svg");
drawConfidence(80, "mongodb-confidence-svg");
drawConfidence(75, "cql-confidence-svg");