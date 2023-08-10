import {
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import { menuOptions } from "@/constants";
import { useCallback, useState } from "react";

interface menuOption {
  label: string;
  routePath: string;
}
export interface NavbarProps {
  menuOptions: menuOption[];
  onOptionClick: (id:string) => void;
  selectedSectionId?:string | null;
}

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedSectionId,setSelectedSectionId] = useState<string | null>(null);

  const handleOptionClick=useCallback((id:string)=>{
    setSelectedSectionId(id);
  },[]);

  return isMobile ? (
    <MobileNavbar menuOptions={menuOptions} onOptionClick={handleOptionClick}  selectedSectionId={selectedSectionId}/>
  ) : (
    <DesktopNavbar menuOptions={menuOptions} onOptionClick={handleOptionClick} selectedSectionId={selectedSectionId}/>
  );
}
