import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import { Container } from "@mui/material"
import { useScores } from "hooks/useScores"
import Leaderboard from "components/Leaderboard"
import Results from "components/Results"
import { useResult } from "hooks/useResult"

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
            <Paper
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                    p: 2,
                }}>
                <Container>
                    <Typography
                        variant="h1"
                        component="h1"
                        align="center"
                        gutterBottom>
                        Euros Sweepstakes
                    </Typography>
                </Container>

                {res.data && (
                    <Container sx={{ p: 2 }}>
                        <Results result={res.data} />
                    </Container>
                )}
                <Container sx={{ p: 2 }}>
                    <Leaderboard scores={scores.data || []} />
                </Container>
            </Paper>
        </Box>
    )
}

export default function Dashboard() {
    return <DashboardContent />
}
