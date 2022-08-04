import React from 'react';
import VectorMap, {
  Layer,
  Legend,
  Source,
} from 'devextreme-react/vector-map';
import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';
import RadioGroup from "devextreme-react/radio-group";

const colorGroups = [0, 0.5, 0.8, 1, 2, 3, 100];
const bounds = [-180, 85, 180, -60];

const populations = {
  China: 19,
  India: 17.4,
  'United States': 4.44,
  Indonesia: 3.45,
  Brazil: 2.83,
  Pakistan: 2.62,
  Nigeria: 2.42,
  Bangladesh: 2.18,
  Russia: 2.04,
  Japan: 1.77,
  Mexico: 1.67,
  Philippines: 1.39,
  Vietnam: 1.25,
  Ethiopia: 1.23,
  Egypt: 1.21,
  Germany: 1.13,
  Iran: 1.08,
  Turkey: 1.07,
  'Congo (Kinshasa)': 0.94,
  France: 0.92,
  Thailand: 0.9,
  'United Kingdom': 0.89,
  Italy: 0.85,
  Burma: 0.84,
  'South Africa': 0.74,
  'S. Korea': 0.7,
  Colombia: 0.66,
  Spain: 0.65,
  Tanzania: 0.63,
  Kenya: 0.62,
  Ukraine: 0.6,
  Argentina: 0.59,
  Algeria: 0.54,
  Poland: 0.54,
  Sudan: 0.52,
  Canada: 0.49,
  Uganda: 0.49,
  Iraq: 0.47,
  Morocco: 0.46,
  Uzbekistan: 0.43,
};

export const Geo = () => {
  return (
    <div style={{background: '#fff'}}>
      <div className="filter_group">
        <RadioGroup items={['Карта продаж в Мире', 'Карта заказов в России']} defaultValue={'Карта продаж в Мире'} layout="horizontal" />
      </div>
      <VectorMap
        id="vector-map" bounds={bounds}>
        <Layer
          dataSource={mapsData.world}
          name="areas"
          colorGroupingField="population"
          colorGroups={colorGroups}
          customize={customizeLayer}
        >
        </Layer>

        <Legend
          customizeText={customizeText}>
          <Source layer="areas" grouping="color"></Source>
        </Legend>
      </VectorMap>
    </div>
  );
}

function customizeLayer(elements) {
  elements.forEach((element) => {
    element.attribute('population', populations[element.attribute('name')]);
  });
}

function customizeText(arg) {
  let text;
  if (arg.index === 0) {
    text = '< 0.5%';
  } else if (arg.index === 5) {
    text = '> 3%';
  } else {
    text = `${arg.start}% to ${arg.end}%`;
  }
  return text;
}

