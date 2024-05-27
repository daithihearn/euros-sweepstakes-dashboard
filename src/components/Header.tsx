import { Card, CardMedia, Stack, Typography } from "@mui/material"
import HeaderImage from "../assets/images/Euros Header.jpeg"

const Header = () => {
    return (
        <Card>
            <CardMedia
                component="img"
                alt="Euro 2024 Sweepstakes"
                image={HeaderImage}
            />
            <Stack
                direction="row"
                alignItems="center"
                spacing={3}
                p={2}
                useFlexGap>
                <Typography variant="h3">Euro 2024 Sweepstakes</Typography>
            </Stack>
        </Card>
    )
}

export default Header
