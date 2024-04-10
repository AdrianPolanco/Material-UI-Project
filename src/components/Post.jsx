import {
    Box,
    Card,
    CardHeader,
    CardMedia,
    CardActions,
    Typography,
    Avatar,
    CardContent,
    IconButton,
    Checkbox,
} from "@mui/material";
import { MoreVert, Favorite, Share, FavoriteBorder } from "@mui/icons-material";

const Post = () => {
    return (
        <Box flex={4} p={2}>
            <Card sx={{ margin: 5 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="https://images.pexels.com/photos/2150347/pexels-photo-2150347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Cascade"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun
                        meal to cook together with your guests. Add 1 cup of
                        frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                    />
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    );
};

export default Post;
