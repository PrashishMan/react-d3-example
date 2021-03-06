"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var BarZoom = require('react-d3-zoom').BarZoom;

(function() {
  var generalChartData = require('dsv?delimiter=\t!../data/letter.tsv')

  var width = 700,
    height = 400,
    margins = {top: 50, right: 50, bottom: 50, left: 50},
    id = "test-chart",
    title = "Bar Chart",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class",
    legendClassName = "test-legend",
    legendPosition = "right",
    showXAxis = true,
    showYAxis = true,
    chartSeries = [
      {
        field: 'frequency',
        name: 'Frequency'
      }
    ],
    x = function(d) {
      return d.letter;
    },
    xOrient = 'bottom',
    xTickOrient = 'bottom',
    xDomain = generalChartData.map(function(d) { return d.letter; }),
    xRangeRoundBands = {interval: [0, width - margins.left - margins.right], padding: .1},
    xScale = 'ordinal',
    xAxisClassName = 'x-axis',
    xLabel = "Letter",
    xLabelPosition = 'bottom',
    y = function(d) {
      return +d;
    },
    yOrient = 'left',
    yTickOrient = 'right',
    yRange = [height - margins.top - margins.bottom, 0],
    yDomain = [0, +d3.max(generalChartData, function(d) { return d.frequency; })],
    yScale = 'linear',
    yAxisClassName = 'y-axis',
    yLabel = "Frequency",
    yTicks = [10, "%"],
    yLabelPosition = 'left';

  ReactDOM.render(
      <BarZoom
        title= {title}
        data= {generalChartData}
        width= {width}
        height= {height}
        id= {id}
        margins= {margins}
        svgClassName= {svgClassName}
        titleClassName= {titleClassName}
        yAxisClassName= {yAxisClassName}
        xAxisClassName= {xAxisClassName}
        legendClassName= {legendClassName}
        legendPosition= {legendPosition}
        categoricalColors= {d3.scale.category10()}
        chartSeries = {chartSeries}
        showXAxis= {showXAxis}
        showYAxis= {showYAxis}
        x= {x}
        xDomain= {xDomain}
        xRangeRoundBands= {xRangeRoundBands}
        xScale= {xScale}
        xOrient= {xOrient}
        xTickOrient= {xTickOrient}
        xLabel = {xLabel}
        y= {y}
        yOrient= {yOrient}
        yRange= {yRange}
        yDomain= {yDomain}
        yScale= {yScale}
        yTickOrient= {yTickOrient}
        yTicks= {yTicks}
        yLabel = {yLabel}
        yLabelPosition = {yLabelPosition}
      />
  , document.getElementById('data_bar')
  )
})()
