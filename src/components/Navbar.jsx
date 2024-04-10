import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    styled,
    InputBase,
    Badge,
    Avatar,
    Menu,
    MenuItem,
} from "@mui/material";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: { display: "flex" },
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.down("sm")]: { display: "flex" },
}));
//ToolBar gives some padding to the AppBar
//Sticky position shows the header even when you scroll down the page
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar
            position="sticky"
            onClick={() => {
                if (open) setOpen(false);
            }}
        >
            <StyledToolbar>
                <Typography
                    variant="h6"
                    sx={{ display: { xs: "none", sm: "block" } }}
                >
                    LAMA DEV
                </Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search>
                    <InputBase placeholder="Search..."></InputBase>
                </Search>
                <Icons>
                    <Badge badgeContent={2} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        sx={{ width: 40, height: 40 }}
                        onClick={() => setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={() => setOpen(true)}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        sx={{ width: 40, height: 40 }}
                    />
                    <Typography variant="span">Remy</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;
