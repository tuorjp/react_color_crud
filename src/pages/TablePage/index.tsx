/* eslint-disable prettier/prettier */
import { Box } from '@mui/material'
import { DataGrid, GridColDef, ptBR } from '@mui/x-data-grid'
import { useQuery } from '@tanstack/react-query'
import { usePeopleInfo } from '../../hooks/usePeopleInfo'

// interface PersonInfo {
//   id: number
//   name: string
//   fav_color: string
//   fav_movie: string
// }

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
  // const [dataTable, setDataTable] = useState<PersonInfo[]>([])
  // const [isLoading, setIsLoading] = useState(false)

  const getPeopleInfo = usePeopleInfo()

  const { isLoading, data } = useQuery({
    queryKey: ['peopleInfo'],
    queryFn: getPeopleInfo,
    staleTime: 60*1000 // 1 min staleTime
  })

  // async function getPeopleInfo() {
  //   try {
  //     const res = await fetch('http://localhost:6060/info')
  //     const peopleInfo = res.json()
  //     return peopleInfo
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const getData = async () => {
  //   try{
  //     const response = await fetch('http://localhost:6060/info')
  //     const data = await response.json()
  //     setDataTable(data)
  //   }
  //   catch(error){
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
        <Box display="flex" justifyContent="center" p={4} width={1200}>
          <DataGrid 
            sx={{height: 300}} 
            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText} 
            rows={data || []} 
            columns={columns}
            loading={isLoading}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
          />
      </Box>
  )
}
