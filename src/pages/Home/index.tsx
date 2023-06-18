/* eslint-disable prettier/prettier */
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

const newPeopleFormSchema = yup.object({
  test: yup.string().required()
})

type NewPeopleFormInputs = yup.InferType<typeof newPeopleFormSchema>

export function Home() {
  const {control, handleSubmit } = useForm<NewPeopleFormInputs>(
      {
        resolver: yupResolver(newPeopleFormSchema),
      }
    )

  function onSubmit(data: NewPeopleFormInputs) {
    console.log(data)
  }

  return (
    <Box>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Box display='flex' flexDirection='column'>
          <Controller 
            name='test'
            control={control}
            render={({
              field: {onChange}
            }) => (
              <TextField
                onChange={onChange}
              />
            )}
          />
          <Button type='submit'>Submit</Button>
        </Box>
      </form>
    </Box>
  )
}
