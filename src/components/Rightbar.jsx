import {
    Box,
    Typography,
    Avatar,
    AvatarGroup,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Divider,
} from "@mui/material";
import { itemData } from "../data";

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={300} mt={2} mb={2}>
                <Typography variant="h6" fontWeight={100}>
                    Online Friends
                </Typography>
                <AvatarGroup
                    max={4}
                    sx={{
                        justifyContent: "start",
                        "& .MuiAvatar-root": {
                            width: 60,
                            height: 60,
                        },
                    }}
                >
                    <Avatar
                        alt="Remy Sharp"
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        sx={{ width: 60, height: 60 }}
                    />
                    <Avatar
                        alt="Travis Howard"
                        src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        sx={{ width: 60, height: 60 }}
                    />
                    <Avatar
                        alt="Agnes Walker"
                        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        sx={{ width: 60, height: 60 }}
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        sx={{ width: 60, height: 60 }}
                    />
                    <Avatar
                        alt="Travis Howard"
                        src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        sx={{ width: 60, height: 60 }}
                    />
                    <Avatar
                        alt="Agnes Walker"
                        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        sx={{ width: 60, height: 60 }}
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        sx={{ width: 60, height: 60 }}
                    />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100}>
                    Last Photos
                </Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Typography variant="h6" fontWeight={100}>
                    Last Conversations
                </Typography>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {
                                        " — I'll be in your neighborhood doing errands this…"
                                    }
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Travis Howard"
                                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {
                                        " — Wish I could come, but I'm out of town this…"
                                    }
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Cindy Baker"
                                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {
                                        " — Do you have Paris recommendations? Have you ever…"
                                    }
                                </>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Rightbar;
