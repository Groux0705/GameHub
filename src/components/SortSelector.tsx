import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import useGameQueryStore from "../store";

export interface SortOrder {
  value: string;
  label: string;
}

const SortSelector = () => {
  const ordering = useGameQueryStore((s) => s.gameQuery.ordering);
  const setOrderText = useGameQueryStore((s) => s.setOrderText);

  // 前面加一个-是用于反转排序的
  const sortOrderList: SortOrder[] = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order By: {ordering || "Relevence"}
      </MenuButton>
      <MenuList>
        {sortOrderList.map((sortOrder) => (
          <MenuItem
            onClick={() => setOrderText(sortOrder.value)}
            key={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
