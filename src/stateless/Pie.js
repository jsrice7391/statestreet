import React from "react";
import {
    render
} from 'react-dom'
import {
    ResponsivePieCanvas
} from '@nivo/pie'

// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.
export const Pie = (props) => {
    return (
// eslint-disable-next-line react/react-in-jsx-scope
<ResponsivePieCanvas data = {props.data}
    margin = {
        {
            "top": 40,
            "right": 200,
            "bottom": 40,
            "left": 80
        }
    }
    pixelRatio = {
        2
    }
    innerRadius = {
        0.25
    }
    padAngle = {
        1
    }
    cornerRadius = {
        3
    }
    colors = "paired"
    colorBy = "id"
    borderColor = "inherit:darker(0.6)"
    radialLabelsSkipAngle = {
        10
    }
    radialLabelsTextXOffset = {
        6
    }
    radialLabelsTextColor = "#333333"
    radialLabelsLinkOffset = {
        0
    }
    radialLabelsLinkDiagonalLength = {
        16
    }
    radialLabelsLinkHorizontalLength = {
        24
    }
    radialLabelsLinkStrokeWidth = {
        1
    }
    radialLabelsLinkColor = "inherit"
    slicesLabelsSkipAngle = {
        10
    }
    slicesLabelsTextColor = "#333333"
    animate = {
        true
    }
    motionStiffness = {
        90
    }
    motionDamping = {
        15
    }
    defs = {
        [{
                "id": "dots",
                "type": "patternDots",
                "background": "inherit",
                "color": "rgba(255, 255, 255, 0.3)",
                "size": 4,
                "padding": 1,
                "stagger": true
            },
            {
                "id": "lines",
                "type": "patternLines",
                "background": "inherit",
                "color": "rgba(255, 255, 255, 0.3)",
                "rotation": -45,
                "lineWidth": 6,
                "spacing": 10
            }
        ]
    }
    fill = {
        [{
                "match": {
                    "id": "ruby"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "c"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "go"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "python"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "scala"
                },
                "id": "lines"
            },
            {
                "match": {
                    "id": "lisp"
                },
                "id": "lines"
            },
            {
                "match": {
                    "id": "elixir"
                },
                "id": "lines"
            },
            {
                "match": {
                    "id": "javascript"
                },
                "id": "lines"
            }
        ]
    }
    legends = {
        [{
            "anchor": "right",
            "direction": "column",
            "translateX": 140,
            "itemWidth": 60,
            "itemHeight": 14,
            "itemsSpacing": 2,
            "symbolSize": 14,
            "symbolShape": "circle"
        }]
    }
    />
)
}