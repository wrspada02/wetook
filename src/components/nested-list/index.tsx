import { useCallback, useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AddIcon from '@mui/icons-material/Add';
import { List, ListItem, ListItemButton, Tooltip } from "@mui/material";
import { NestedListProps } from "./interfaces/NestedListProps";
import {v4 as uuid } from 'uuid';

export function NestedList(props: NestedListProps) {
 const [isOpen, setIsOpen] = useState<boolean>(false);

 const handleShowList = useCallback(() => {
  setIsOpen(!isOpen);
 }, [isOpen]);

 return (
  <article className="pt-3">
   <header className="flex items-center justify-between">
    <div className="flex items-center gap-x-2 cursor-pointer" onClick={handleShowList}>
     {isOpen ? (
      <Tooltip title="Close List">
        <ArrowDropDownIcon style={{ color: '#737373' }} />
      </Tooltip>
     ) : (
      <Tooltip title="Open List">
        <ArrowDropUpIcon style={{ color: '#737373' }} />
      </Tooltip>
     )}
     <span className="uppercase text-xs text-secondary">{props.titleHeader}</span>
    </div>
    {props.isThereAddIconButton && (
      <Tooltip title="Add Contact">
        <AddIcon style={{ color: 'white' }} className="cursor-pointer" />
      </Tooltip>
    )}
   </header>
   {isOpen && (
    <List className="animate-extendToBottom z-10">
     {props.items.map((item) => (
      <ListItem disablePadding key={uuid()}>
       <ListItemButton className="!px-0">
        {item}
       </ListItemButton>
      </ListItem>
     ))}
    </List>
   )}
  </article>
 );
}