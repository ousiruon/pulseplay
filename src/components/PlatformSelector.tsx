import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlateform from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const {data, error} = usePlateform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} marginX={10}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
