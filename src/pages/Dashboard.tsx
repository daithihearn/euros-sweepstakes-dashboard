import React from "react"
import Box from "@mui/material/Box"
import { Container, Grid } from "@mui/material"
import { useScores } from "hooks/useScores"
import Leaderboard from "components/Leaderboard"
import Results from "components/Results"
import { useResult } from "hooks/useResult"
import Header from "components/Header"

const DashboardContent: React.FC = () => {
    const scores = useScores(10000)
    const res = useResult(10000)

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                height: "100vh",
                overflow: "auto",
            }}>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    p: { xs: 0, sm: 1 }, // No padding on extra small screens
                }}>
                <Container sx={{ p: { xs: 0, sm: 1 } }}>
                    <Header />
                </Container>

                <Container sx={{ p: { xs: 0, sm: 1 } }}>
                    <Grid container spacing={{ xs: 0, sm: 1 }}>
                        <Grid item xs={12} sm={9} sx={{ p: { xs: 0, sm: 1 } }}>
                            <Leaderboard scores={scores.data || []} />
                        </Grid>

                        <Grid item xs={12} sm={3} sx={{ p: { xs: 0, sm: 1 } }}>
                            {res.data && <Results result={res.data} />}
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </Box>
    )
}

export default function Dashboard() {
    return <DashboardContent />
}
