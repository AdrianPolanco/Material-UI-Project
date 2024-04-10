import {
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Switch,
} from "@mui/material";
import {
    Home,
    Article,
    Group,
    Store,
    Person,
    Settings,
    AccountBox,
    ModeNight,
} from "@mui/icons-material";

const Sidebar = ({ setMode, mode }) => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#pages">
                            <ListItemIcon>
                                <Article />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#groups">
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#marketplace">
                            <ListItemIcon>
                                <Store />
                            </ListItemIcon>
                            <ListItemText primary="Marketplace" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#friends">
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#settings">
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <ModeNight />
                            </ListItemIcon>
                            <Switch
                                onChange={() =>
                                    setMode(mode === "light" ? "dark" : "light")
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Sidebar;
