/* eslint-disable prettier/prettier */
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { api } from '../../services/api'

const newPeopleFormSchema = yup.object({
  name: yup.string().required(),
  favColor: yup.string().required(),
  favMovie: yup.string().required()
})

type NewPeopleFormInputs = yup.InferType<typeof newPeopleFormSchema>

export function Home() {
  const { control, reset, handleSubmit, formState: { isSubmitting } } = useForm<NewPeopleFormInputs>(
      {
        resolver: yupResolver(newPeopleFormSchema),
      }
    )

  async function submitData(data: NewPeopleFormInputs) {
    // console.log(data)
    try {
      const { name, favColor, favMovie} = data
      await api.post('/info', {
        name,
        favColor,
        favMovie
      })
    } catch (error) {
      console.log(error)
    }
    reset()
  }

  return (
    <Box 
      display='flex'
      bgcolor='#222338'
      p={6}
      mt={5}
      sx={{borderRadius: 2}}
    >
      <form onSubmit={handleSubmit(submitData)}>
        <Box 
          display='flex' 
          flexDirection='column'
          gap={2} 
        >
          <Box width={1}>
            <Controller 
              name='name'
              control={control}
              render={({
                field: {onChange}
              }) => (
                <TextField
                  label='Nome'
                  onChange={onChange}
                />
              )}
            />
          </Box>
          <Box width={1}>
            <Controller 
              name='favColor'
              control={control}
              render={({
                field: {onChange}
              }) => (
                <TextField
                  label='Cor favorita'
                  onChange={onChange}
                />
              )}
            />
          </Box>
          <Box width={1}>
            <Controller 
              name='favMovie'
              control={control}
              render={({
                field: {onChange}
              }) => (
                <TextField
                  label='Filme favorito'
                  onChange={onChange}
                />
              )}
            />
          </Box>
          <Box display='flex' justifyContent='center'>
            <Button type='submit' variant='contained' disabled={isSubmitting}>
              Enviar
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  )
}
