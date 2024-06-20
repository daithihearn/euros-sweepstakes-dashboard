import React, { useMemo } from "react"
import {
    Card,
    Grid,
    CardHeader,
    Avatar,
    CardContent,
    useMediaQuery,
} from "@mui/material"
import { Score } from "models/Score"
import Trophy from "../assets/images/trophy.webp"
import Team from "./Team"
import LeaderBoardRowHeader from "./LeaderBoardRowHeader"

interface LeaderboardProps {
    scores: Score[]
}

const Leaderboard: React.FC<LeaderboardProps> = ({ scores }) => {
    const darkMode = useMediaQuery("(prefers-color-scheme: dark)")

    // Sort the scores by totalScore in descending order
    const sortedScores = useMemo(() => {
        return scores.sort((a, b) => b.totalScore - a.totalScore)
    }, [scores])

    return (
        <Card
            sx={{
                borderRadius: { xs: 0, sm: 2 },
                boxShadow: { xs: 0, sm: 2 },
                p: { xs: 0, sm: 1 },
            }}>
            <CardHeader
                avatar={<Avatar src={Trophy} />}
                title="Leaderboard"
                subheader="5 points are awarded if you team finished in the top 4 and an additional 3 points if you predicted the correct position. *Until we have a final results the bookies odds will be used to calculate the score."
            />
            <CardContent>
                {sortedScores.map(score => (
                    <Card
                        sx={{
                            borderRadius: 0,
                            p: { xs: 0, sm: 1 },
                        }}
                        variant="outlined">
                        <LeaderBoardRowHeader
                            score={score.totalScore}
                            title={score.name}
                            darkMode={darkMode}
                        />

                        <CardContent>
                            <Grid container>
                                <Grid
                                    item
                                    xs={12}
                                    sm={3}
                                    key={score.result.winner.country}>
                                    <Team
                                        country={score.result.winner.country}
                                        odds={score.result.winner.odds}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    sm={3}
                                    key={score.result.runnerUp.country}>
                                    <Team
                                        country={score.result.runnerUp.country}
                                        odds={score.result.runnerUp.odds}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    sm={3}
                                    key={score.result.thirdPlace.country}>
                                    <Team
                                        country={
                                            score.result.thirdPlace.country
                                        }
                                        odds={score.result.thirdPlace.odds}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    sm={3}
                                    key={score.result.fourthPlace.country}>
                                    <Team
                                        country={
                                            score.result.fourthPlace.country
                                        }
                                        odds={score.result.fourthPlace.odds}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                ))}
            </CardContent>
        </Card>
    )
}

export default Leaderboard
