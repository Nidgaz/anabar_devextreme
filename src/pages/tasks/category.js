import React, {useEffect, useState} from 'react';
import DataGrid, {Column, Editing, FilterRow, HeaderFilter, Pager, Paging, ColumnChooser, ColumnFixing, Export} from "devextreme-react/data-grid";
import { Brands } from "./graf";

import Bullet, {
  Font, Margin, Size, Tooltip,
} from 'devextreme-react/bullet';

const dataS = {
    ID: 1,
    category: 'Caбо',
    pro: 123123,
    vir: 234234,
  }

export default function DiscountCell(cellData) {
  return (
    <div style={{display: 'flex', alignItems: 'center', "justify-content": 'space-between'}}>
      <Bullet
        showTarget={false}
        showZeroLevel={true}
        value={Math.floor((cellData.value/10000) * 100)}
        startScaleValue={0}
        endScaleValue={100}
        color='#337ab7'
      >
        <Size width={150} height={35} />
        <Margin top={5} bottom={0} left={5} />
      </Bullet>
      <span>{cellData.value}</span>
    </div>
  );
}


export const Category = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
      let data = [];
      data.length = 100;
      data.fill('');
      data = data.map((el, indx) => {
        dataS.ID = indx;
        dataS.pro = Math.floor(Math.random() * 10000)
        dataS.vir = Math.floor(Math.random() * 10000)

        return {...dataS};
      });
      setData(data);
    }
    , [])


  return(
    <div style={{background: '#fff'}}>
      <DataGrid
        keyExpr="ID"
        id="сontainer"
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

        <Export enabled={true} allowExportSelectedData={true} />

        <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} showInfo={true} />
        <FilterRow visible={true} />
        <ColumnFixing enabled={true} />
        <HeaderFilter visible={true} />

        <Column
          dataField={'category'}
          caption={'Категория'}
        />
        <Column
          dataField={'pro'}
          caption={'Продажи минус возврат (WB)'}
          cellRender={DiscountCell}
          cssClass="bullet"
          allowGrouping={false}
          alignment="right"
          format="percent"
          dataType="number"

        />
        <Column
          dataField={'vir'}
          caption={'Сумарная выручка (WB)'}
          cellRender={DiscountCell}
          cssClass="bullet"
          allowGrouping={false}
          alignment="right"
          format="percent"
          dataType="number"
        />
      </DataGrid>
    </div>
  )
}