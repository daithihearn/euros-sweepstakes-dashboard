import { Avatar, Box, Stack, Typography } from "@mui/material"
import { getFlagByCountryName } from "helpers/flag"

const Team = ({ country, odds }: { country: string; odds: string }) => {
    return (
        <Box>
            <Stack
                direction="row"
                justifyContent="evenly"
                alignItems="center"
                spacing={1}>
                <Avatar sx={{ backgroundColor: "inherit" }}>
                    <Typography variant="h1">
                        {getFlagByCountryName(country)}
                    </Typography>
                </Avatar>
                <Stack direction="column">
                    <Typography variant="body1">{country}</Typography>
                    <Typography variant="body2">{odds}</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Team
