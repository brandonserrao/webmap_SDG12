am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_kelly);
am4core.useTheme(am4themes_animated);
// Themes end

var iconPath = "M53.5,476c0,14,6.833,21,20.5,21s20.5-7,20.5-21V287h21v189c0,14,6.834,21,20.5,21 c13.667,0,20.5-7,20.5-21V154h10v116c0,7.334,2.5,12.667,7.5,16s10.167,3.333,15.5,0s8-8.667,8-16V145c0-13.334-4.5-23.667-13.5-31 s-21.5-11-37.5-11h-82c-15.333,0-27.833,3.333-37.5,10s-14.5,17-14.5,31v133c0,6,2.667,10.333,8,13s10.5,2.667,15.5,0s7.5-7,7.5-13 V154h10V476 M61.5,42.5c0,11.667,4.167,21.667,12.5,30S92.333,85,104,85s21.667-4.167,30-12.5S146.5,54,146.5,42 c0-11.335-4.167-21.168-12.5-29.5C125.667,4.167,115.667,0,104,0S82.333,4.167,74,12.5S61.5,30.833,61.5,42.5z"

var chart = am4core.create("chartdiv", am4charts.SlicedChart);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

let title = chart.titles.create();
title.text = "Continent Wise World DMC per capita 2000-2017";
title.fontSize = 25;
title.marginBottom = 10;

chart.data = [
  {
    continent: "Oceania",
    DMC: 1521.2
  },
  {
    continent: "North America",
    DMC: 1311.5
  },
  {
    continent: "Europe",
    DMC: 743.9
  },
  {
    continent: "South America",
    DMC: 546.6
  },
  {
    continent: "Asia",
    DMC: 534.5
  },
  {
    continent: "Afria",
    DMC: 249.0
  }
];

var series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "DMC";
series.dataFields.category = "continent";
series.alignLabels = true;
series.labels.template.text = "{category}: {value.value}";
series.maskSprite.path = iconPath;
series.ticks.template.locationX = 1;
series.ticks.template.locationY = 0.5;

series.labelsContainer.width = 200;

}); // end am4core.ready()