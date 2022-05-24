let url1  = 'https://site51.webte.fei.stuba.sk/zaverecne/OctaveGeneratedFiles/xyt.json';

function plotDataChart() {

    fetch(url1)
        .then(res => res.json())
        .then((out) => {
            GRAPH = document.getElementById("dataChart");

            var data = [
                {
                    x: out.data[2],
                    y: out.data[1],
                    line:
                        {
                            width: 3,
                            shape: "spline",
                            color: "#1E90FF"
                        },
                    visible: true
                }

            ]

            let config = {
                responsive: true,
                maintainAspectRation: true,
                resizeDelay: 0,
                scrollZoom: true,
            };

            var layout = {
                title: 'Octave plot',
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

            console.log(data)

            Plotly.newPlot(GRAPH, data, layout, config);
        })
        .catch(err => { throw err });

    // GRAPH = document.getElementById("dataChart");



    // let config = {
    //     responsive: true,
    //     maintainAspectRation: true,
    //     resizeDelay: 0,
    //     scrollZoom: true,
    // };
    //
    // var layout = {
    //     title: 'Octave plot',
    //     showlegend: false,
    //     font: {
    //         family: "Nanum  Gothic",
    //         size: 16
    //     },
    //     xaxis: {
    //         title: 'Real part',
    //         showgrid: true,
    //         zeroline: true
    //     },
    //     yaxis: {
    //         title: 'Imaginary part',
    //         showline: true
    //     },
    //
    // };

    //
    // Plotly.newPlot(GRAPH, data, layout, config);
}