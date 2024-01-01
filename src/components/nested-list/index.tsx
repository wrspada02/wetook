import { useCallback, useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AddIcon from '@mui/icons-material/Add';
import { List, ListItem, ListItemButton } from "@mui/material";
import { NestedListProps } from "./interfaces/NestedListProps";

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
      <ArrowDropDownIcon style={{ color: '#737373' }} />
     ) : (
      <ArrowDropUpIcon style={{ color: '#737373' }} />
     )}
     <span className="uppercase text-xs text-secondary">{props.titleHeader}</span>
    </div>
    {props.isThereAddIconButton && (
     <AddIcon style={{ color: 'white' }} className="cursor-pointer" />
    )}
   </header>

   {isOpen && (
    <List className="animate-extendToBottom">
     {props.items.map((item, index) => (
      <ListItem disablePadding key={index}>
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