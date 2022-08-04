import React from 'react';
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Legend,
  Title,
  Tooltip,
  Grid,
  ValueAxis,
  Point,
} from 'devextreme-react/chart';


const energySources = [
  { value: 'v', name: 'Выручка (руб)', axis: 'left' },
  { value: 'p', name: 'продажи (шт)' , axis: 'right'},
  { value: 'z', name: 'Заказы (шт)' , axis: 'right'},
  { value: 'pos', name: 'Поставки (шт)', axis: 'right'},
];

const countriesInfo = [{
  country: '9 мар',
  v: 59.8,
  p: 937.6,
  z: 582,
  pos: 564.3,
}, {
  country: '10 мар',
  v: 74.2,
  p: 308.6,
  z: 35.1,
  pos: 956.9,
}, {
  country: '11 мар',
  v: 40,
  p: 128.5,
  z: 361.8,
  pos: 105,
}, {
  country: '12 мар',
  v: 22.6,
  p: 241.5,
  z: 64.9,
  pos: 120.8,
}, {
  country: '13 мар',
  v: 19,
  p: 119.3,
  z: 28.9,
  pos: 204.8,
}, {
  country: '14 мар',
  v: 6.1,
  p: 123.6,
  z: 77.3,
  pos: 85.7,
}, {
  country: '15 мар',
  v: 15,
  p: 200,
  z: 70,
  pos: 80,
}, {
  country: '16 мар',
  v: 20,
  p: 250,
  z: 80,
  pos: 70,
}, {
  country: '17 мар',
  v: 3,
  p: 123.6,
  z: 77.3,
  pos: 60,
}, {
  country: '18 мар',
  v: 10,
  p: 123.6,
  z: 77.3,
  pos: 65,
}, {
  country: '19 мар',
  v: 20,
  p: 123.6,
  z: 77.3,
  pos: 50,
}, {
  country: '20 мар',
  v: 45,
  p: 123.6,
  z: 77.3,
  pos: 300,
}, {
  country: '21 мар',
  v: 50,
  p: 123.6,
  z: 77.3,
  pos: 200,
}];


export const Brands = () => {
  return(
  <div style={{ padding: '15px'}}>
      <Chart
        dataSource={countriesInfo}
        onLegendClick={onLegendClick}
      >
        {/*<ZoomAndPan*/}
        {/*  argumentAxis='both'*/}
        {/*  dragToZoom={true}*/}
        {/*/>*/}
        {/*<ScrollBar visible={true} />*/}
        <CommonSeriesSettings
          argumentField="country"
          type={'line'}
          selectionMode="allArgumentPoints"
          hoverMode="includePoints"
        >
          <Point hoverMode="allArgumentPoints" />
        </CommonSeriesSettings>
        {
          energySources.map((item) => <Series
            key={item.value}
            valueField={item.value}
            axis={item.axis}
            name={item.name} />)
        }
        <ArgumentAxis
          valueMarginsEnabled={true}
          discreteAxisDivisionMode="crossLabels"
        >
          <Grid visible={true} />
        </ArgumentAxis>
        <ValueAxis
          name="right"
          position="right"
          tickInterval={100}
          valueMarginsEnabled={false}
        >
          <Title text="Продажи (шт)"/>
        </ValueAxis>
        <ValueAxis
          name="left"
          position="left"
          tickInterval={10}
        >
          <Title text="Выручка (тыс. руб)"/>
        </ValueAxis>

        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
          itemTextPosition="bottom"
        />
        <Title text="Графики продаж и выручки по дням">
        </Title>
        <Tooltip
          enabled={true}
          shared={true}
          customizeTooltip={customizeTooltip}
        />
      </Chart>
  </div>
  )
}

function customizeTooltip(pointInfo) {
  const items = pointInfo.valueText.split('\n');
  const color = pointInfo.point.getColor();

  items.forEach((item, index) => {
    if (item.indexOf(pointInfo.seriesName) === 0) {
      const element = document.createElement('span');

      element.textContent = item;
      element.style.color = color;
      element.className = 'active';

      items[index] = element.outerHTML;
    }
  });

  return { text: items.join('\n') };
}

function onLegendClick({ target: series }) {
  if (series.isVisible()) {
    series.hide();
  } else {
    series.show();
  }
}