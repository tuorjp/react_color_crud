/* eslint-disable prettier/prettier */
import { Box } from '@mui/material'
import { DataGrid, GridColDef, ptBR } from '@mui/x-data-grid'
import  { useEffect, useState } from 'react'

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
  },
  {
    field: 'fav_color',
    headerName: 'Favorite color',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
  },
  {
    field: 'fav_movie',
    headerName: 'Favorite movie',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
  },
]

export function TablePage() {
  const [dataTable, setDataTable] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    try{
      setIsLoading(true)
      const response = await fetch('http://localhost:6060/info')
      const data = await response.json()
      setDataTable(data)
    }
    catch(error){
      console.log(error)
    }
    finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
        <Box display="flex" justifyContent="center" p={4} width={800}>
          <DataGrid 
            sx={{height: 300}} 
            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText} 
            rows={dataTable} 
            columns={columns}
            loading={isLoading} 
          />
      </Box>
  )
}
