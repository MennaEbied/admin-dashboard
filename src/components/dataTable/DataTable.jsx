import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { userColumns,userRows} from "../../dataTableSource";
import { Link } from "react-router-dom";


const paginationModel = { page: 0, pageSize: 5 };
const DataTable = () => {

  const actionColumn=[{field: "action", headerName: "Action", width:200, renderCell:()=>{
    return(
      <div className="cellAction">
        <Link to="/users/test" style={{textDecoration :"none"}}>
          <div className="viewButton">View</div>
        </Link>
        <div className="deleteButton">Delete</div>
      </div>
    )
  }}]
  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      
      <DataGrid
        className="dataGrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ 
          border: 0,
          '&.MuiDataGrid-cell': { backgroundColor: '#f0f0f0' }
         }}
      />
    
    </div>
  )
}

export default DataTable