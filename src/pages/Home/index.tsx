/* eslint-disable prettier/prettier */
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object({
  test: yup.string().required()
})

interface DefaultValues {
  test: string
}

const defaultValues: DefaultValues = {
  test: ''
}

export function Home() {
  const {control, handleSubmit } = useForm(
      {
        resolver: yupResolver(schema),
        defaultValues
      }
    )

  function onSubmit(data: DefaultValues) {
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
