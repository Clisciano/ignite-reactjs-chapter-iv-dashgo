import { Stack, Box, Link, Icon, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({title, children}: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" my="6" color="gray.400" fontSize="small">{title}</Text>
       {children} 
    </Box>    
  );
}