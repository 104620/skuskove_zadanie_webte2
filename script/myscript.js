function plotDataChart(){
    DATACHART = document.getElementById("dataChart");

    var data = [
        // {
        //     x: xAxis,
        //     y: yAxis,
        //     line:
        //         {
        //             width: 3,
        //             shape: "spline",
        //             color: "#1E90FF"
        //         },
        //     visible: true
        // }

    ]

    let config = {
        responsive: true,
        maintainAspectRation: true,
        resizeDelay: 0,
        scrollZoom: true,
    };

    var layout = {
        title: 'Nyquist plot',
        showlegend: false,
        font: {
            family: "Nanum  Gothic",
            size: 16
        },
        xaxis: {
            title: 'Real part',
            showgrid: true,
            zeroline: true
        },
        yaxis: {
            title: 'Imaginary part',
            showline: true
        },

    };

    let url = 'https://site51.webte.fei.stuba.sk/zaverecne/t.json';

    fetch(url)
        .then(res => res.json())
        .then((out) => {
            console.log('Checkout this JSON! ', out);
        })
        .catch(err => { throw err });

    // if(typeof(EventSource) !== "undefined"){
    //     source = new EventSource("https://site51.webte.fei.stuba.sk/zaverecne/t.json");
    //     source.addEventListener("message", handler);
    // } else {
    //     document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent events...";
    // }
}

var handler = function(e)
{
    let data = JSON.parse(e.data);
    console.log(data)
    // var multiplier = $("#rangeInput").val();
    // var y1 = parseFloat(data.y1) * multiplier;
    // var y2 = parseFloat(data.y2) * multiplier;
    //
    // document.getElementById("result").innerHTML = e.data;

}
