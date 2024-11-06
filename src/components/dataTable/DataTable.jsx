import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { userColumns,userRows} from "../../dataTableSource"


const paginationModel = { page: 0, pageSize: 5 };
const DataTable = () => {

  const actionColumn=[{field: "action", headerName: "Action", width:200, renderCell:()=>{
    return(
      <div className="cellAction">
        <div className="viewButton">View</div>
        <div className="deleteButton">Delete</div>
      </div>
    )
  }}]
  return (
    <div className="dataTable">
       <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
    </div>
  )
}

export default DataTable