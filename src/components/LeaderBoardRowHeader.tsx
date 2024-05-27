import { Avatar, Box, Stack, Typography } from "@mui/material"

const LeaderBoardRowHeader = ({
    score,
    title,
    darkMode,
}: {
    score: number
    title: string
    darkMode: boolean
}) => {
    return (
        <Box sx={{ p: 1 }}>
            <Stack
                direction="row"
                justifyContent="evenly"
                alignItems="center"
                spacing={1}>
                <Avatar
                    variant="rounded"
                    sx={{ backgroundColor: `${darkMode ? "white" : "black"}` }}>
                    <Typography variant="h1">{score}</Typography>
                </Avatar>
                <Stack direction="column">
                    <Typography variant="h3">{title}</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

export default LeaderBoardRowHeader
