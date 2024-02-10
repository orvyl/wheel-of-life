const valueBubble = '<output class="rangeslider__value-bubble" />';

function updateValueBubble(pos, value, context) {
    pos = pos || context.position;
    value = value || context.value;
    const $valueBubble = $('.rangeslider__value-bubble', context.$range);
    const tempPosition = pos + context.grabPos;
    const position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

    if ($valueBubble.length) {
        $valueBubble[0].style.left = Math.ceil(position) + 'px';
        $valueBubble[0].innerHTML = value;
    }
}

$('input[type="range"]').rangeslider({
  polyfill: false,
  onInit: function() {
    this.$range.append($(valueBubble));
    updateValueBubble(null, null, this);
  },
  onSlide: function(pos, value) {
    updateValueBubble(pos, value, this);
    updateChart(0,value);
  }
});

function updateChart (location,value){
    myChart.data.datasets[0].data[location]=value;
    myChart.update();
}

const ctx = document.getElementById("polarChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: [
            "Self-Growth",
            "Spirituality",
            "Recreation",
            "Finances",
            "Career",
            "Relationships",
            "Friends",
            "Health",
            "Family"
        ],
        datasets: [{
            backgroundColor: [
                "#00A3CE",
                "#22CBED",
                "#EB67A2",
                "#FDA9ED",
                "#EC5B22",
                "#F78F21",
                "#148F1E",
                "#1EC428",
                "#234425"
            ],
            data: [4, 6, 6, 2, 4, 2, 2, 7, 8],
        }],
    },
    options: {
        elements: {
            arc: {
                borderColor: "rgba(255,255,255,1)",
                borderWidth:2
            }
        },
        scale: {
            ticks: {
                beginAtZero:true,
                max: 10,
                min: 0,
                stepSize: 1,
                fontFamily: "'Lato', sans-serif",
                fontSize:18,
                fontColor: "#000",
                display:true
            },
            gridLines: {
                lineWidth:1,
                color:"#999"
            },
        },
        layout: {
            padding: {
                left: 100,
                right: 200,
                top: 10,
                bottom: 10
            }
        },
        legend: {
            display: true,
            position: "right",
            labels: {
                fontFamily: "'Lato', sans-serif",
                fontSize:18,
                fontColor: "#000"
            }
        }
    }
});


