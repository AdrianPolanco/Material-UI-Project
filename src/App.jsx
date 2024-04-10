import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Add from "./components/Add";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import { ThemeProvider } from "@mui/material";

function App() {
    const [mode, setMode] = useState("light");

    const theme = createTheme({
        palette: {
            mode,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box bgcolor={"background.default"} color={"text.primary"}>
                <Navbar />
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-between"
                >
                    <Sidebar setMode={setMode} mode={mode} />
                    <Feed />
                    <Rightbar />
                </Stack>
                <Add />
            </Box>
        </ThemeProvider>
    );
}

export default App;
