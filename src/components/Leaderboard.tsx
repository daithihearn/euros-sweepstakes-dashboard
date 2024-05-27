import React from "react"
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

const getColor = (value: number, isDarkMode: boolean) => {
    const max = 32
    const min = 0

    // Ensure value is within bounds
    value = Math.max(min, Math.min(max, value))

    const greenValue = Math.floor((value / max) * 255)
    const redValue = 255 - greenValue

    // Adjust the brightness
    const brightnessAdjustment = isDarkMode ? -0.3 : 0.4

    const adjustBrightness = (colorComponent: number) => {
        return Math.max(
            0,
            Math.min(
                255,
                colorComponent + colorComponent * brightnessAdjustment,
            ),
        )
    }

    const adjustedRedValue = adjustBrightness(redValue)
    const adjustedGreenValue = adjustBrightness(greenValue)
    const adjustedBlueValue = adjustBrightness(100)

    return `rgb(${adjustedRedValue}, ${adjustedGreenValue}, ${adjustedBlueValue})`
}

const Leaderboard: React.FC<LeaderboardProps> = ({ scores }) => {
    const darkMode = useMediaQuery("(prefers-color-scheme: dark)")

    // Sort the scores by totalScore in descending order
    const sortedScores = scores.sort((a, b) => b.totalScore - a.totalScore)

    return (
        <Card>
            <CardHeader
                avatar={<Avatar src={Trophy} />}
                title="Leaderboard"
                subheader="*The bookies odds will be used until the final result"
            />
            <CardContent>
                {sortedScores.map(score => (
                    <Card
                        sx={{
                            bgcolor: getColor(
                                score.totalScore.valueOf(),
                                darkMode,
                            ),
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
                                    xs={3}
                                    key={score.result.winner.country}>
                                    <Team
                                        country={score.result.winner.country}
                                        odds={score.result.winner.odds}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={3}
                                    key={score.result.runnerUp.country}>
                                    <Team
                                        country={score.result.runnerUp.country}
                                        odds={score.result.runnerUp.odds}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs={3}
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
                                    xs={3}
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
