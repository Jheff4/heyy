import React from 'react'
import { AppBar, Toolbar, Typography, Box, InputBase, Badge, Avatar } from '@mui/material'
import { Diversity1, Mail, Notifications } from '@mui/icons-material'
import { styled } from '@mui/system'

const StyledToolbar = styled(Toolbar) ({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}));

const Icons = styled(Box) ({
  display: "flex",
  gap: "20px",
  alignItems: "center"
});

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant="h6" sx= {{ display: {xs: 'none', sm: 'block' }}}>HEYY</Typography>
        <Diversity1 sx= {{ display: {xs: 'block', sm: 'none' }}}/>
        <Search><InputBase placeholder="search"/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{width: 30, height: 30}}/>
        </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar