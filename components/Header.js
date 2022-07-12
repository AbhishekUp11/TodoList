import React from "react";

// styled components for the header
import {
  HeaderView,
  HeaderTitle,
  HeaderButton,
  colors,
} from "./../styles/appStyles";

// Icons using expo vector icons
import { Entypo } from "@expo/vector-icons";

const Header = ({ handleClearTodos }) => {
  return (
    <HeaderView>
      <HeaderTitle>My Todo</HeaderTitle>
      <HeaderButton onPress={handleClearTodos}>
        <Entypo name="trash" size={28} color={colors.tertiary} />
      </HeaderButton>
    </HeaderView>
  );
};

export default Header;