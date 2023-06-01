import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from 'next/link';
import { SlMenu } from "react-icons/sl";


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <SlMenu style={{width:40,color:'black',height:60,marginLeft:10}} onClick={handleClick}/>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <Link href={'/'}><MenuItem  onClick={handleClose}>Home</MenuItem> </Link>  
      <Link href={'/publicacoes'}><MenuItem  onClick={handleClose}>Publicações</MenuItem> </Link>  
      <Link href={'/projetos'}><MenuItem  onClick={handleClose}>Projetos</MenuItem> </Link>  
      <Link href={'/sobreMim'}><MenuItem  onClick={handleClose}>Sobre Mim</MenuItem> </Link>  
      </Menu>
    </div>
  );
}
