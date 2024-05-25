import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import { lightTheme, darkTheme } from "Themes"
import Dashboard from "pages/Dashboard"
import { Box, CssBaseline, createTheme, useMediaQuery } from "@mui/material"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
    const queryClient = new QueryClient()

    const theme = React.useMemo(
        () =>
            createTheme({
                ...(prefersDarkMode ? darkTheme : lightTheme),
            }),
        [prefersDarkMode],
    )
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <Box sx={{ display: "flex" }}>
                    <CssBaseline />
                    <Dashboard />
                </Box>
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default App
