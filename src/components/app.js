import React,{
   Component
} from 'react';
import List from "./list";
import Form from "./form";
import './app.scss';

import DataGrid, { Column, FilterRow, HeaderFilter, SearchPanel, Pager, Paging  } from 'devextreme-react/data-grid';
import { SelectBox, CheckBox } from 'devextreme-react';
import { customers } from './data.js';

export class App extends Component {
   render(){
      return(
         <div>
                 <DataGrid
                        dataSource={customers}
                        columns={['CompanyName', 'City', 'State', 'Phone', 'Fax']}
                        showBorders={true}
                  />
                  <div className="space"/>
                  <DataGrid
                        dataSource={customers}
                        showBorders={true}
                        >
                        <Paging defaultPageSize={10} />
                        <Pager
                        showPageSizeSelector={true}
                        allowedPageSizes={[5, 10, 20]}
                        showInfo={true} />

                        <Column dataField={'CompanyName'} />
                        <Column dataField={'City'} />
                        <Column dataField={'State'} />
                        <Column dataField={'Phone'} />
                        <Column dataField={'Fax'} />
                  </DataGrid>
                  <div className="space"/>
         </div>
      );
   }
}

export default App