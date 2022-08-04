import React, {useEffect, useState} from 'react';
import {salesData} from "../../data/data";
import DataGrid, {Column, Editing, FilterRow, HeaderFilter, Pager, Paging, ColumnChooser, ColumnFixing, Export} from "devextreme-react/data-grid";
import { Popover } from 'devextreme-react/popover';
import { CheckBox } from 'devextreme-react/check-box';
import { Brands } from "./graf";

const animationConfig = {
  show: {
    type: 'pop',
    from: {
      scale: 0,
    },
    to: {
      scale: 1,
    },
  },
  hide: {
    type: 'fade',
    from: 1,
    to: 0,
  },
};

const ToolpitRender = ({value}) => {
  // const [visible, setVisible] = useState(false);

  return(
    <>
      <a
        // onMouseEnter={setVisible}
        // onMouseLeave={setVisible}
      >{value.title}</a>
      <Popover
        target="#link3"
        position="top"
        width={300}
        visible={false}
        animation={animationConfig}
      >
        {value.items}
      </Popover>
    </>
  )
}


export const Sv = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
      let data = [];
      data.length = 500;
      data.fill('');
      data = data.map((el, indx) => {
        salesData.ID = indx;
        return {...salesData};
      });
      setData(data);
    }
  , [])


  return(
    <div style={{background: '#fff'}}>
      <div style={{padding: '15px'}}>
        Схлопнуть:
        <CheckBox text="Цвета" className="checkbox_anabar" value={true}/>
        <CheckBox text="Размер" className="checkbox_anabar"/>
        <CheckBox text="Даты" className="checkbox_anabar"/>
        <CheckBox text="Склад" className="checkbox_anabar"/>
        <CheckBox text="Баркоды до артикула поставщика" disabled={true} className="checkbox_anabar"/>
      </div>
      <div style={{fontSize: '22px', padding: '10px 15px'}}>
        Продано <b>5 523</b> товаров на <b>8 860 233</b> рублей
      </div>
      <div>
        <Brands />
      </div>
    <DataGrid
      keyExpr="ID"
      id="gridContainer"
      className={'dx-card wide-card'}
      dataSource={data}
      showBorders={false}
      // focusedRowEnabled={true}
      defaultFocusedRowIndex={0}
      // columnHidingEnabled={true}
      columnMinWidth={50}
      columnAutoWidth={true}
      allowColumnResizing={true}
      columnResizingMode={'widget'}
      allowColumnReordering={true}
      wordWrapEnabled={true}
      showRowLines={true}
    >
      <Paging defaultPageSize={50} />
      <Pager showPageSizeSelector={true} showInfo={true} />
      <FilterRow visible={true} />
      <ColumnFixing enabled={true} />
      <Editing
        mode="cell"
        allowUpdating={true}
        editColumnName={'current_full_price_wildberries'}
      />
      <HeaderFilter visible={true} />
      <Column dataField={'photo'}
              width={120}
              caption={'Фото'}
              type={'html'}
      />
      <Column
        dataField={'artk'}
        caption={'Артикул WB'}
        type={'link'}
      >
        <HeaderFilter allowSearch={true} />
      </Column>
      <Column
        dataField={'artk_p'}
        caption={'Артикул Поставщика'}
        type={'link'}
      />
      <Column
        dataField={'barcode'}
        caption={'Баркод'}
      >
      </Column>
      <Column
        dataField={'name'}
        caption={'Название'}
        allowSorting={false}
      />
      <Column
        dataField={'brand'}
        caption={'Бренд'}
      />
      <Column
        dataField={'size'}
        caption={'Размер'}
        width={150}
      />
      <Column
        dataField={'sklad'}
        caption={'Склад'}
        cellRender={ToolpitRender}
      />
      <Column
        dataField={'current_full_price_wildberries'}
        name={'current_full_price_wildberries'}
        caption={'Текущая цена на WB'}
      />
      <Column
        dataField={'current_disc_price_wildberries'}
        caption={'Текущая цена со скидкой на WB'}
      />
      <Column
        dataField={'min_price'}
        caption={'Минимальная цена с продажами (WB)'}
      />
      <Column
        dataField={'max_price'}
        caption={'Максимальная цена с продажами (WB)'}
      />
      <Column
        dataField={'avg_price'}
        caption={'Средняя цена с продажами (WB)'}
      />
      <Column
        dataField={'median_price'}
        caption={'Медианная цена с продажами (WB)'}
      />
      <Column
        dataField={'qty_diff_wildberries'}
        caption={'Продажи минус возвраты (WB)'}
      />
      <Column
        dataField={'raw_sales_quantity_wildberries'}
        caption={'Продажи (WB)'}
      />
      <Column
        dataField={'raw_return_quantity_wildberries'}
        caption={'Возвраты (WB)'}
      />
      <Column
        dataField={'orders_wildberries'}
        caption={'Заказы (WB)'}
      />
      <Column
        dataField={'incomes_wildberries'}
        caption={'Поставки (WB)'}
      />
      <Column
        dataField={'earning_wildberries'}
        caption={'Суммарная выручка (WB)'}
      />
      <Column
        dataField={'raw_sales_amount_wildberries'}
        caption={'Выручка с продаж (WB)'}
      />
      <Column
        dataField={'raw_return_amount_wildberries'}
        caption={'Сумма с возвратов (WB)'}
      />
      <Column
        dataField={'qty_wildberries'}
        caption={'На WB сейчас, шт.'}
      />
      <Column
        dataField={'inWayToClient_wildberries'}
        caption={'В пути от клиента (WB), шт.'}
      />
    </DataGrid>
    </div>
  )
}