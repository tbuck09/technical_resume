console.log("Yeah, Boiiii!!");

const mainColor= getComputedStyle(document.body).getPropertyValue("--main-color");
const accentColor= getComputedStyle(document.body).getPropertyValue("--accent");
const lightBlue= getComputedStyle(document.body).getPropertyValue("--light-blue");

$(document).ready(function(){
    $("a").tooltip();
});
$(document).ready(function(){
    $("button").popover({
        content: `
            <div class="row">
                <a class="col-4" href='mailto:tylerbuck09@gmail.com' target='_blank'><i class="fas fa-envelope"></i></a>
                <a class="col-4" href='https://github.com/tbuck09' target='_blank'><i class='fab fa-github'></i></a>
                <a class="col-4" href='https://www.linkedin.com/in/tyler-d-buck/' target='_blank'><i class="fab fa-linkedin"></i></a>
            </div>
            <hr>
            <div class="row"><i class="fas fa-phone col-4"></i><span class='col-8'>515.298.3195</span></div>
            <hr>
            <div class="row"><i class="fas fa-map-marker-alt col-4"></i><span class='col-8'>Denver, CO</span></div>
        `,
        html: true
    })
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
        .attr("x", dimensions.offset.x - 2)
        .attr("y", dimensions.offset.y)
        .attr("width", 100)
        .attr("height", 20)
        .attr("rx", 10)
        .attr("fill", mainColor)
        .attr("stroke", "white")
        .attr("stroke-width", "5")
    
    const rectConfidence= svg.append("rect")
        .attr("x", dimensions.offset.x)
        .attr("y", dimensions.offset.y + 2)
        .attr("width", confidence)
        .attr("height", 16)
        .attr("rx", 10)
        .attr("fill", lightBlue)
        .attr("stroke", "white")
        .attr("stroke-width", "1")
}

const confidenceDict= {
    "alteryx-confidence-svg": 60,
    "aws-confidence-svg": 40,
    "clarityhs-confidence-svg": 85,
    "english-confidence-svg": 95,
    "javascript-confidence-svg": 75,
    "looker-confidence-svg": 90,
    "mongodb-confidence-svg": 80,
    "msoffice-confidence-svg": 90,
    "mysql-confidence-svg": 80,
    "postgresql-confidence-svg": 85,
    "python-confidence-svg": 85,
    "spanish-confidence-svg": 40,
    "tableau-confidence-svg": 75,
    "vba-confidence-svg": 80,
}

Object.entries(confidenceDict).forEach(v => {
    drawConfidence(v[1], v[0])
});