let url1  = 'https://site51.webte.fei.stuba.sk/zaverecne/OctaveGeneratedFiles/xyt.json';

function plotDataChart() {

    fetch(url1)
        .then(res => res.json())
        .then((out) => {
            GRAPH = document.getElementById("dataChart");
            x1 = []
            x3 = []
            for(let i = 0; i < out.data[0].length; i++) {
                x1.push(out.data[0][i][1])
                x3.push(out.data[0][i][3])
            }

            var data = [
                // {
                //     x: out.data[2],
                //     y: out.data[1],
                //     line:
                //         {
                //             width: 3,
                //             shape: "spline",
                //             color: "#1E90FF"
                //         },
                //     visible: true
                // },
                {
                    x: out.data[2],
                    y: x1,
                    name: "car",
                    line:
                        {
                            width: 3,
                            shape: "spline",
                            color: "#90ee90"
                        },
                    visible: true
                },
                {
                    x: out.data[2],
                    y: x3,
                    name: "wheel",
                    line:
                        {
                            width: 3,
                            shape: "spline",
                            color: "#008080"
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
                title: '',
                showlegend: true,
                font: {
                    family: "Nanum  Gothic",
                    size: 16
                },
                xaxis: {
                    title: 't[s]',
                    showgrid: true,
                    zeroline: true
                },
                yaxis: {
                    title: 'x[m]',
                    showline: true
                },

            };

            console.log(data)

            Plotly.newPlot(GRAPH, data, layout, config);

            // function compute () {
            //     var s = 10, b = 8/3, r = 28;
            //     var dx, dy, dz;
            //     var xh, yh, zh;
            //     for (var i = 0; i < n; i++) {
            //         dx = s * (y[i] - x[i]);
            //         dy = x[i] * (r - z[i]) - y[i];
            //         dz = x[i] * y[i] - b * z[i];
            //
            //         xh = x[i] + dx * dt * 0.5;
            //         yh = y[i] + dy * dt * 0.5;
            //         zh = z[i] + dz * dt * 0.5;
            //
            //         dx = s * (yh - xh);
            //         dy = xh * (r - zh) - yh;
            //         dz = xh * yh - b * zh;
            //
            //         x[i] += dx * dt;
            //         y[i] += dy * dt;
            //         z[i] += dz * dt;
            //     }
            // }
            //
            // function update () {
            //     compute();
            //
            //     Plotly.animate('myDiv', {
            //         data: [{x: x, y: z}]
            //     }, {
            //         transition: {
            //             duration: 0
            //         },
            //         frame: {
            //             duration: 0,
            //             redraw: false
            //         }
            //     });
            //
            //     requestAnimationFrame(update);
            // }
            //
            // requestAnimationFrame(update);
        })
        .catch(err => { throw err });
}