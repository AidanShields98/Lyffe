import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { IconButton } from '@mui/material';
export default function DropdownMenu() {
  return (
    <PopupState variant="popover" popupId="menu">
      {(popupState) => (
        <React.Fragment>
          <IconButton variant="contained" {...bindTrigger(popupState)}> 
          <TableRowsIcon sx={{ fontSize: "35px", marginTop: '0' }} />
          </IconButton>
        
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Login</MenuItem>
            <MenuItem onClick={popupState.close}>SignUp</MenuItem>
            {/* <MenuItem onClick={popupState.close}>Logout</MenuItem> */}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
