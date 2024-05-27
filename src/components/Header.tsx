import { Card, CardMedia, Stack, Typography } from "@mui/material"
import HeaderImage from "../assets/images/Euros Header.jpeg"

const Header = () => {
    return (
        <Card
            sx={{
                borderRadius: { xs: 0, sm: 2 },
                boxShadow: { xs: 0, sm: 2 },
            }}>
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
