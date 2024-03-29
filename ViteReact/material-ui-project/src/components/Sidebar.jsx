import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";
const Sidebar = ({selectedCategory,setSelectedCategory}) => {
    const handleSelectedCategory = (category) =>{
        setSelectedCategory(category.name);
    }
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        return (
          <button
          key={category.name}
            className="category-btn"
            style={{
              backgroundColor: category.name === selectedCategory && "#FC1503",
              color: "whitesmoke",
            }}
            onClick={() => {handleSelectedCategory(category)}}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: selectedCategory === category.name ? "1" : "0.8",
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
