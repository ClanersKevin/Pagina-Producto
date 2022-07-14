import React, { useState, useContext } from "react";
import { ThemingContext } from "../context/ThemingContext";
import { Button, Menu, MenuItem, ListItemIcon } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

function MenuShare() {
  const { ShareButton, theme } = useContext(ThemingContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const shareUrl = "https://github.com/ClanersKevin";

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <ShareButton />
        </Button>
      </ThemeProvider>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FacebookShareButton
              url={shareUrl}
              quote={"Mi comentario"}
              hashtag={["#MiHashtag"]}
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FacebookMessengerShareButton
              appId="1194224687808081"
              url={shareUrl}
              quote={"Mi comentario"}
              hashtag={["#MiHashtag"]}
            >
              <FacebookMessengerIcon size={40} round={true} />
            </FacebookMessengerShareButton>
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <TwitterShareButton
              url={shareUrl}
              title={"Mi comentario"}
              hashtags={["MiHashtag1", "MiHashtag2"]}
            >
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <WhatsappShareButton url={shareUrl} title={"Mi comentario"}>
              <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <EmailShareButton
              url={shareUrl}
              subject={"Mi asunto"}
              body={"Mi comentario"}
              openShareDialogOnClick={true}
              onClick={() => {}}
            >
              <EmailIcon size={40} round={true} />
            </EmailShareButton>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </>
  );
}

export default MenuShare;
