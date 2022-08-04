import React from 'react';
import 'devextreme/data/odata/store';
import TabPanel, { Item } from "devextreme-react/tab-panel";
import RadioGroup from 'devextreme-react/radio-group';
import { Sv } from './sv';
import { Geo } from './geo';
import { Category } from './category';
import DateBox from 'devextreme-react/date-box';
import DropDownBox from 'devextreme-react/drop-down-box';

import './task.scss';

const priorities = ['7 дней', '14 дней', '30 дней', '60 дней', 'Выбрать'];
const brands = ['Все', 'Выбрать']

export default function Task() {
  return (
    <React.Fragment>
      <h2 className={'content-block'}>Продажи</h2>
      <div className="filter_group">
        <span style={{paddingRight: '10px'}}>Период:</span>
        <RadioGroup items={priorities} defaultValue={priorities[1]} layout="horizontal" />
        <span style={{marginLeft: '30px', marginRight: '14px',width: '150px'}}><DateBox value={new Date()}/></span> - <span style={{marginLeft: '14px',width: '150px'}}><DateBox value={new Date()}/></span>
      </div>
      <div className="filter_group">
        <span style={{paddingRight: '10px'}}>Бренды:</span>
        <RadioGroup items={brands} defaultValue={brands[1]} layout="horizontal" />
        <span style={{paddingLeft: '15px', width: '1000px'}}>
        <DropDownBox
          placeholder='Выберите бренды (в скобках количество артикулов'
          dataSource={['CROCS', 'CROCS']}
          contentRender={(data) => <div>CROKS (123)</div>}
        />
        </span>
      </div>
      <div className="filter_group">
        <span style={{paddingRight: '10px'}}>Категории WB:</span>
        <RadioGroup items={brands} defaultValue={brands[0]} layout="horizontal" />
      </div>
      <div className={''} style={{paddingLeft: '15px', marginTop: '15px', paddingRight: '15px'}}>
        <TabPanel
          animationEnabled={true}
        >
          <Item title="Сводка">
            <Sv />
          </Item>
          <Item title="Категории">
            <Category />
          </Item>
          <Item title="География">
            <Geo />
          </Item>
        </TabPanel>
      </div>
    </React.Fragment>
)}
