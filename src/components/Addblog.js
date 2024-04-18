
import { Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'


const Addblog = () => {
    
  return (
    <div>
      <Stack
      component="form"
      sx={{
        marginTop: '40px',
        marginLeft: '38%',
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
        <Typography variant='h3'>ADD BLOG</Typography><br></br>
        <TextField id="outlined-basic" label="Blog Name" variant="outlined" /><br></br>
        <TextField id="outlined-basic" label="Description" variant="outlined" /><br></br>
        <TextField id="outlined-basic" label="Author Name" variant="outlined" /><br></br>
        <Button variant="contained">Submit</Button>
        </Stack>
    </div>
  )
}

export default Addblog
