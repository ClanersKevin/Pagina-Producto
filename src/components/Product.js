import React, { useState, useContext } from "react";
import { ThemingContext } from "../context/ThemingContext";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  Link,
  ListItemText,
} from "@mui/material";
import KueskiPay from "../img/KueskiPay.png";
import ClanCoins from "../img/ClanCoins.png";
import MenuShare from "./MenuShare";
import Data from "../data.json";
import { ThemeProvider } from "@mui/material/styles";

function Product(props) {
  const {
    BodyProduct,
    BTNbuyNow,
    BTNaddCar,
    HeartMarked,
    HeartUnmarked,
    TextReadMore,
    TextDiscount,
    TextZeroInteres,
    theme,
  } = useContext(ThemingContext);

  /* const [list, setList] = useState([]);
    useEffect(() => {
      axios({
        method: "GET",
        url: "../data.json",
      })
        .then((response) => {
          setList(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }, [setList]); */

  const [active, setActive] = useState(false);
  const title = Data[0].title;
  const description = Data[0].description;
  const ratingAge = Data[0].rating_age;
  const videoGamePoster = Data[0].video_game_poster;
  const priceOriginal = parseInt(Data[0].priceOriginal, 10);
  const priceWithDiscount = parseInt(
    Data[0].priceWithDiscount.substring(
      0,
      Data[0].priceWithDiscount.length - 3
    ),
    10
  );
  const discount = Data[0].discount;
  const pennies = Data[0].priceWithDiscount.substring(
    Data[0].priceWithDiscount.length - 2,
    Data[0].priceWithDiscount.length
  );

  const formatForPrice = (amount) => {
    return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  const formatForDiscount = (amount) => {
    return "$" + amount.toLocaleString("en-US");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <BodyProduct
          container
        >
          <Grid
            className="TitleGame"
            item
            padding="16px"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Typography style={{ font: "normal normal 400 20px Roboto" }}>
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            marginBottom="16px"
            xs={12}
          >
            <Grid
              className="HeartSide"
              item
              container
              direction="column"
              justifyContent="space-between"
              xs={1}
              sm={1}
              md={2}
              lg={2}
              xl={2}
            >
              <Grid item container justifyContent="center">
                <Button
                  onClick={(e) => {
                    setActive(!active);
                    props.add_favorite(Data[0]);
                  }}
                >
                  {active ? <HeartMarked /> : <HeartUnmarked />}
                </Button>
              </Grid>
              <Grid
                className="RatingAge"
                item
                container
                alignItems="flex-end"
                justifyContent="center"
              >
                <Card sx={{ maxHeight: "100%", maxWidth: "100%" }}>
                  <CardMedia
                    component="img"
                    image={ratingAge}
                    alt="RatingAge"
                  />
                </Card>
              </Grid>
            </Grid>
            <Grid
              className="PosterSide"
              item
              container
              margin="16px"
              padding="16px"
              xs={8}
              sm={8}
              md={8}
              lg={8}
              xl={8}
            >
              <Card sx={{ height: "100%", width: "100%" }}>
                <CardMedia
                  component="img"
                  image={videoGamePoster}
                  alt="VideogamePoster"
                />
              </Card>
            </Grid>
            <Grid
              className="ShareSide"
              item
              container
              alignItems="flex-start"
              justifyContent="center"
              xs={1}
              sm={1}
              md={2}
              lg={2}
              xl={2}
            >
              <MenuShare />
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent="space-around"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Grid item container justifyContent="space-evenly">
              <Grid
                className="LeftText"
                item
                container
                direction="column"
                alignItems="flex-start"
                xs={5}
                sm={4}
                md={5}
                lg={5}
                xl={5}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="left"
                  alignItems="baseline"
                  marginBottom="4px"
                >
                  <Typography
                    style={{
                      color: "#8F8F8F",
                      font: "normal normal 500 14px Roboto",
                      marginRight: "24px",
                    }}
                  >
                    <del>{formatForPrice(priceOriginal)}</del>
                  </Typography>
                  <TextDiscount>-{discount}</TextDiscount>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="left"
                  marginBottom="4px"
                >
                  <Typography
                    style={{
                      color: "#FFFFFF",
                      font: "normal normal 2.188em Roboto",
                    }}
                  >
                    {formatForDiscount(priceWithDiscount)}
                  </Typography>
                  <Typography style={{ color: "#FFFFFF" }}>
                    .{pennies}
                  </Typography>
                </Grid>
                <Typography style={{ color: "#FFFFFF", marginBottom: "16px" }}>
                  Incluye I.V.A
                </Typography>
              </Grid>
              <Grid
                className="RightText"
                item
                container
                xs={5}
                sm={6}
                md={5}
                lg={5}
                xl={5}
              >
                <Grid
                  item
                  container
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <Grid
                    item
                    container
                    justifyContent="flex-end"
                    alignItems="baseline"
                  >
                    <Typography>Págalo con</Typography>
                    <Card
                      sx={{
                        backgroundColor: "#010101",
                        height: "16px",
                        width: "80px",
                        marginLeft: "4px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={KueskiPay}
                        alt="KueskiPay"
                      />
                    </Card>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-end"
                >
                  <Grid
                    item
                    container
                    direction="row"
                    spacing={1}
                    justifyContent="flex-end"
                  >
                    <Grid item sx={{  }}>
                      <Typography>a</Typography>
                    </Grid>
                    <Grid item>
                      <Typography style={{ color: "#00FFFF" }}>
                        4 quincenas
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>de</Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    justifyContent="flex-end"
                    xs={12}
                    sm={7}
                    md={7}
                    lg={6}
                    xl={4}
                  >
                    <TextZeroInteres>$200, ¡con 0% interés!</TextZeroInteres>
                    <Link
                      href="https://www.google.com"
                      target="_blank"
                      style={{
                        font: "normal normal 700 16px Roboto",
                        color: "#06BDFC",
                        textDecoration: "underline",
                      }}
                    >
                      <b>Conoce más</b>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                className="ButtonClanCoins"
                item
                container
                xs={10.7}
                sm={10.7}
                md={10.7}
                lg={10.7}
                xl={10.7}
              >
                <Button
                  variant="outlined"
                  style={{
                    backgroundColor: "#000",
                    color: "#FFF",
                    height: "36px",
                    width: "155px",
                    borderColor: "#FFF",
                    borderRadius: "0",
                    padding: "0",
                  }}
                >
                  <Grid
                    item
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                  >
                    <Typography
                      style={{ font: "normal normal 700 14px Roboto" }}
                    >
                      +12
                    </Typography>
                    <Typography
                      style={{ font: "normal normal 300 14px Roboto" }}
                    >
                      CLANCOINS
                    </Typography>
                    <CardMedia
                      component="img"
                      image={ClanCoins}
                      alt="ClanCoins"
                      style={{ height: "100%", width: "20%" }}
                    />
                  </Grid>
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              paddingTop="2rem"
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <BTNaddCar onClick={() => props.add_cart(Data[0])}>
                AGREGAR AL CARRITO
              </BTNaddCar>
              <BTNbuyNow
                variant="outlined"
                style={{
                  marginTop: "0.5em",
                }}
              >
                COMPRAR AHORA
              </BTNbuyNow>
            </Grid>
            <Grid marginTop="2em">
              <Grid
                item
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                padding="5%"
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
              >
                <Grid item container direction="column" alignItems="center">
                  <Grid container direction="column" alignItems="left">
                    <Typography
                      style={{
                        font: "normal normal 300 1.25em Roboto",
                        marginBottom: "16px",
                      }}
                    >
                      DESCRIPCIÓN
                    </Typography>
                  </Grid>
                  <Typography
                    style={{
                      font: "normal normal 300 0.875em Roboto",
                      textAlign: "justify",
                    }}
                  >
                    "{description}"
                  </Typography>
                  <Grid item container>
                    <Link
                      href="https://www.youtube.com"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <TextReadMore>LEER MÁS</TextReadMore>
                    </Link>
                  </Grid>
                  <Grid container direction="column" alignItems="start">
                    <Typography
                      style={{
                        font: "normal normal 300 1.25em Roboto",
                        marginBottom: "1em",
                      }}
                    >
                      REQUISITOS DEL SISTEMA
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="row"
                    xs={12}
                    sm={6}
                    md={12}
                    lg={12}
                    xl={12}
                  >
                    <Grid item container direction="column">
                      <Typography
                        style={{ font: "normal normal 700 0.75em Roboto" }}
                      >
                        MÍNIMO:
                      </Typography>
                      {Data[0].minSpecs.map(function (element, index) {
                        return (
                          <Grid key={index} container>
                            <ListItemText
                              key={index}
                              primaryTypographyProps={{
                                fontFamily: "Roboto",
                                fontSize: "0.875em",
                                fontWeight: 300,
                              }}
                              primary={element}
                            />
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                  <Grid item container direction="row" marginBottom="1em">
                    <Grid item container direction="column">
                      <Typography
                        style={{
                          font: "normal normal 700 0.75em Roboto",
                          marginTop: "32px",
                        }}
                      >
                        RECOMENDADO:
                      </Typography>
                    </Grid>
                    {Data[0].RecomendSpecs.map(function (element, index) {
                      return (
                        <Grid key={index} container>
                          <ListItemText
                            key={index}
                            primaryTypographyProps={{
                              fontFamily: "Roboto",
                              fontSize: "0.875em",
                              fontWeight: 300,
                            }}
                            primary={element}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </BodyProduct>
      </ThemeProvider>
    </>
  );
}

export default Product;
