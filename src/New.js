import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Grid,
    Paper,
    Tabs,
    Tab,
    Button,
    Box,
    TextField,
    IconButton,
} from "@mui/material";
import { PlayArrow, Refresh } from "@mui/icons-material";
import MonacoEditor from "react-monaco-editor";

function New() {
    const [code, setCode] = useState("// Write your code here...\n\n\n\n\n\n\n\n");

    const editorOptions = {
        selectOnLineNumbers: true,
        minimap: { enabled: false },
    };

    const handleEditorChange = (newValue) => {
        setCode(newValue);
    };

    return (
        <Box>
            {/* Header */}
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Zealous
                    </Typography>
                    <Typography variant="body1" style={{ marginRight: "1rem" }}>
                        jothinathannagarajan@gmail.com
                    </Typography>
                    <Button variant="contained" color="error">
                        Log out
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Content */}
            <Container maxWidth="xl" style={{ marginTop: "1rem" }}>
                <Grid container spacing={2} style={{ height: "calc(100vh - 64px)" }}>
                    {/* Left Panel */}
                    <Grid item xs={12} md={6} lg={6} style={{ height: "100%" }}>
                        <Paper
                            variant="outlined"
                            style={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            {/* Header Section */}
                            <Box
                                sx={{
                                    p: 2,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    borderBottom: "1px solid lightgray",
                                }}
                            >
                                <Typography variant="h6">Section-2</Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                >
                                    02:23 <Typography variant="body2">Aa 🌙</Typography>
                                </Typography>
                            </Box>

                            {/* Tabs Section */}
                            <Tabs
                                value={0}
                                variant="scrollable"
                                scrollButtons="auto"
                                textColor="primary"
                                indicatorColor="primary"
                            >
                                <Tab label="DESCRIPTION" />
                                <Tab label="TEST CASE" />
                                <Tab label="HINTS" />
                                <Tab label="SOLUTION" />
                            </Tabs>

                            {/* Content Section (Scrollable) */}
                            <Box
                                sx={{ p: 2, flex: 1, overflow: "auto" }}
                            >
                                <Typography variant="h6" gutterBottom>
                                    1. For Loop
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {/* Long content */}
                                    <strong>Sample Test Cases</strong>
                                    <br />
                                    Test case 1
                                    <br />
                                    Command line arguments: 2 8
                                    <br />
                                    APowerN: = 256
                                    <br />
                                    Test case 2
                                    <br />
                                    Command line arguments: 10 5
                                    <br />
                                    APowerN: = 100000
                                    <br />
                                    {/* Repeating content for scrolling */}
                                    {[...Array(20)].map((_, i) => (
                                        <div key={i}>
                                            APowerN: = 256
                                            <br />
                                            Test case {i + 3}
                                            <br />
                                            Command line arguments: 10 5
                                            <br />
                                            APowerN: = 100000
                                            <br />
                                        </div>
                                    ))}
                                    <br />
                                    Hint: You can use a for loop to multiply A with itself N
                                    number of times.
                                    <br />
                                    Variable aPowerN can be used to store the computed value of
                                    AN inside the for loop.
                                    <br />
                                    <strong>Note:</strong> Please don't change the package name.
                                </Typography>
                                <TextField
                                    fullWidth
                                    label="sample test case"
                                    variant="outlined"
                                    sx={{ mt: 2 }}
                                />
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Right Panel */}
                    <Grid item xs={12} md={6} lg={6} style={{ height: "100%" }}>
                        <Paper
                            variant="outlined"
                            style={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            {/* Header for Code Editor */}
                            <Box
                                sx={{
                                    p: 2,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    borderBottom: "1px solid lightgray",
                                }}
                            >
                                <Typography variant="h6">Code Editor</Typography>
                                <Box>
                                    <IconButton color="primary">
                                        <Refresh />
                                    </IconButton>
                                    <IconButton color="primary">
                                        <PlayArrow />
                                    </IconButton>
                                </Box>
                            </Box>

                            {/* Monaco Editor Section */}
                            <Box sx={{ flex: 1}}>
                                <MonacoEditor
                                    width="100%"
                                    height="100%"
                                    language="python"
                                    theme="vs-light"
                                    value={code}
                                    options={editorOptions}
                                    onChange={handleEditorChange}
                                />
                            </Box>

                            {/* Buttons Section */}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    p: 2,
                                    borderTop: "1px solid lightgray",
                                }}
                            >
                                <Button variant="contained" color="warning">
                                    Reset
                                </Button>
                                <Button variant="contained" color="primary">
                                    Submit
                                </Button>
                                <Button variant="contained" color="success">
                                    Next
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}

export default New;
