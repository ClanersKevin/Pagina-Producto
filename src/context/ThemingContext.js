import React, { createContext } from "react";
import { createTheme, styled } from "@mui/material/styles";
import { Grid, Typography, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IosShareIcon from "@mui/icons-material/IosShare";

export const ThemingContext = createContext();

// 👇 ctrl + f para cambiar ".clanersDefault" por ".clanersHalloween"
const ThemingProvider = (props) => {
  const BTNbuyNow = styled(Button)(({ theme }) => ({
    backgroundColor: theme.clanersDefault.ColorSecondary,
    color: theme.clanersDefault.ColorPrimary,
    font: theme.clanersDefault.fontButtonCar,
    borderRadius: theme.clanersDefault.borderRadius,
    minWidth: theme.clanersDefault.minWidthAddCar,
    borderColor: theme.clanersDefault.ColorPrimary,
    ":hover": {
      backgroundColor: theme.clanersDefault.ColorSecondary,
      color: theme.clanersDefault.ColorPrimary,
      borderColor: theme.clanersDefault.ColorPrimary,
    },
  }));

  const BTNaddCar = styled(Button)(({ theme }) => ({
    backgroundColor: theme.clanersDefault.ColorPrimary,
    color: theme.clanersDefault.ColorSecondary,
    font: theme.clanersDefault.fontButtonCar,
    borderRadius: theme.clanersDefault.borderRadius,
    minWidth: theme.clanersDefault.minWidthAddCar,
    ":hover": {
      backgroundColor: theme.clanersDefault.ColorPrimary,
      color: theme.clanersDefault.ColorSecondary,
    },
  }));

  const ShareButton = styled(IosShareIcon)(({ theme }) => ({
    fontSize: theme.clanersDefault.fontSizeHeartShare,
    color: theme.clanersDefault.ColorPrimary,
  }));

  const HeartMarked = styled(FavoriteIcon)(({ theme }) => ({
    fontSize: theme.clanersDefault.fontSizeHeartShare,
    color: theme.clanersDefault.ColorPrimary,
  }));

  const HeartUnmarked = styled(FavoriteBorderIcon)(({ theme }) => ({
    fontSize: theme.clanersDefault.fontSizeHeartShare,
    color: theme.clanersDefault.ColorPrimary,
  }));

  const TextReadMore = styled(Typography)(({ theme }) => ({
    font: theme.textReadMore.font,
    color: theme.clanersDefault.ColorPrimary,
    marginTop: theme.textReadMore.marginTop,
    marginBottom: theme.textReadMore.marginBottom,
  }));

  const TextDiscount = styled(Typography)(({ theme }) => ({
    font: theme.textDiscount.font,
    color: theme.clanersDefault.ColorPrimary,
  }));

  const TextZeroInteres = styled(Typography)(({ theme }) => ({
    font: theme.textZeroInteres.font,
    color: theme.clanersDefault.ColorPrimary,
    textAlign: theme.textZeroInteres.textAlign,
  }));

  const BodyProduct = styled(Grid)(({ theme }) => ({
    direction: "row",
    backgroundColor: "#010101",
    color: "#FFF",
  }));

  const theme = createTheme({
    clanersDefault: {
      // 👇Cambia los colores para ver los cambios
      ColorPrimary: "#00FF7F",
      ColorSecondary: "#000",

      borderRadius: "0",
      minWidthAddCar: "90%",
      fontButtonCar: "normal normal 500 1.25em Roboto",

      fontSizeHeartShare: "40px",
    },
    clanersHalloween: {
      ColorPrimary: "orange",
      ColorSecondary: "#000",

      borderRadius: "0",
      minWidthAddCar: "90%",
      fontSizeButtonCar: "20px",

      fontSizeHeartShare: "40px",
    },
    textReadMore: {
      font: "normal normal 500 0.875em Roboto",
      marginTop: "16px",
      marginBottom: "16px",
    },
    textDiscount: {
      font: "normal normal 300 20px Roboto",
    },
    textZeroInteres: {
      font: "normal normal 700 16px Roboto",
      textAlign: "end",
    },
  });

  return (
    <ThemingContext.Provider
      value={{
        BodyProduct,
        BTNbuyNow,
        BTNaddCar,
        ShareButton,
        HeartMarked,
        HeartUnmarked,
        TextReadMore,
        TextDiscount,
        TextZeroInteres,
        theme,
      }}
    >
      {props.children}
    </ThemingContext.Provider>
  );
};

export default ThemingProvider;
