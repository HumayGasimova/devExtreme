import React,{
   Component
} from 'react';
import List from "./list";
import Form from "./form";

import DataGrid, { Column, FilterRow, HeaderFilter, SearchPanel } from 'devextreme-react/data-grid';
import { SelectBox, CheckBox } from 'devextreme-react';
import { customers } from './data.js';

export class App extends Component {
   render(){
      return(
         <div className="abc">
                 <DataGrid
                        dataSource={customers}
                        columns={['CompanyName', 'City', 'State', 'Phone', 'Fax']}
                        showBorders={true}
                  />
         </div>
      );
   }
}

export default App