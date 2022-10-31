import { Box, Fab, Modal, styled, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon} from "@mui/icons-material"

const Add = () => {
  const [open, setOpen] = useState(false);

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  })

  return (
    <>
      <Tooltip title="Add" sx={{position: "fixed", bottom: 20, left: {xs: "calc(50% - 25px)", md: 30}}}>
        <Fab color="primary" aria-label="add" onClick={ e => setOpen(true) }>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={ e => setOpen(false) }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={200} borderRadius={5} bgcolor="whitesmoke">
          <Typography variant='h6' color="gray" textAlign="center">
            Create post
          </Typography>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add