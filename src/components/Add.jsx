import {
    Tooltip,
    Fab,
    Modal,
    Box,
    Typography,
    styled,
    Avatar,
    TextField,
    Stack,
    ButtonGroup,
    Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
    DateRange,
} from "@mui/icons-material";
import { useState } from "react";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
});

const Add = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip
                title="Add"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", sm: 30 },
                }}
                onClick={() => setOpen(true)}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        width: 400,
                        height: 280,
                        padding: 3,
                        borderRadius: 5,
                    }}
                    bgcolor={"background.default"}
                    color={"text.primary"}
                >
                    <Typography variant="h6" color="gray" textAlign="center">
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            sx={{ width: 40, height: 40 }}
                        />
                        <Typography fontWeight={500} variant="span">
                            Remy
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%", marginBottom: 2 }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} marginBottom={2}>
                        <EmojiEmotions color="primary" />
                        <Image color="primary" />
                        <PersonAdd color="primary" />
                        <VideoCameraBack color="primary" />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        aria-label="outlined primary button group"
                        variant="contained"
                    >
                        <Button>Post</Button>
                        <Button sx={{ width: "100%" }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
};

export default Add;
