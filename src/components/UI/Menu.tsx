import React, { FC, SetStateAction, useState } from "react";
import { List, ListItem, ListItemText, Menu, MenuItem } from "@mui/material";
import styled from "styled-components";

interface HeaderProps {
  setSelectedIndexMenu: React.Dispatch<SetStateAction<number>>;
  selectedIndexMenu: number;
  menuOptions: string[];
}

const MenuStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header: FC<HeaderProps> = ({
  menuOptions,
  setSelectedIndexMenu,
  selectedIndexMenu,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  //materialUi functions
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndexMenu(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <MenuStyled>
      <h2>TodoList</h2>
      <List component="nav" sx={{ bgcolor: "background.paper" }}>
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText primary={menuOptions[selectedIndexMenu]} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndexMenu}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </MenuStyled>
  );
};

export default Header;
