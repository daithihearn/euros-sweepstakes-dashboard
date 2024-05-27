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
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    p: 1,
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
                    <Container sx={{ p: 1 }}>
                        <Results result={res.data} />
                    </Container>
                )}
                <Container sx={{ p: 1 }}>
                    <Leaderboard scores={scores.data || []} />
                </Container>
            </Container>
        </Box>
    )
}

export default function Dashboard() {
    return <DashboardContent />
}
