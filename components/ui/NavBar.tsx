import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NextLink from "next/link";

export const NavBar = () => {
  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
        >
          <MenuOutlinedIcon/>
        </IconButton>

        <NextLink style={{textDecoration: 'none'}} href='/' passHref>
          <Typography  variant='h6' color='white'>Cookie Master</Typography>
        </NextLink>
        <div style={{flex: 1}}/>
        <NextLink style={{textDecoration: 'none'}}  href='/theme-changer' passHref>
          <Typography variant='h6' color='white'>Cambiar tema</Typography>
        </NextLink>
      </Toolbar>
    </AppBar>
  )
}
