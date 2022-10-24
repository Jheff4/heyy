import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Box, InputBase, Badge, Menu, Avatar, MenuItem } from '@mui/material'
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

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}));

const Navbar = () => {

const [open, setOpen] = useState(false);

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
          <Avatar src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400" sx={{width: 30, height: 30}} onClick={e => setOpen(true)}/>
        </Icons>
        <UserBox onClick={e => setOpen(true)}>
          <Avatar src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400" sx={{width: 30, height: 30}}/>
          <Typography>Etinosa</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar