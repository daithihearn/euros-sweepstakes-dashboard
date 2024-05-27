import React from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Grid,
    Tooltip,
} from "@mui/material"
import { Score } from "models/Score"
import { getFlagByCountryName } from "helpers/flag"

interface LeaderboardProps {
    scores: Score[]
}

const Leaderboard: React.FC<LeaderboardProps> = ({ scores }) => {
    // Sort the scores by totalScore in descending order
    const sortedScores = scores.sort((a, b) => b.totalScore - a.totalScore)

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: "20%" }}>
                            <Typography variant="h3" component="div">
                                Name
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h3" component="div">
                                Teams
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h3" component="div">
                                Score
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedScores.map((score, index) => (
                        <TableRow key={"row" + index}>
                            <TableCell style={{ width: "20%" }}>
                                <Typography variant="h6" component="div">
                                    {score.name}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Grid container spacing={1}>
                                    <Grid
                                        item
                                        xs={3}
                                        key={score.result.winner.country}>
                                        <Tooltip
                                            title={`${score.result.winner.country}`}
                                            arrow>
                                            <Typography
                                                variant="h6"
                                                component="div"
                                                align="center"
                                                gutterBottom
                                                noWrap>
                                                {getFlagByCountryName(
                                                    score.result.winner.country,
                                                )}
                                            </Typography>
                                        </Tooltip>
                                    </Grid>

                                    <Grid
                                        item
                                        xs={3}
                                        key={score.result.runnerUp.country}>
                                        <Tooltip
                                            title={`${score.result.runnerUp.country}`}
                                            arrow>
                                            <Typography
                                                variant="h6"
                                                component="div"
                                                align="center"
                                                gutterBottom
                                                noWrap>
                                                {getFlagByCountryName(
                                                    score.result.runnerUp
                                                        .country,
                                                )}
                                            </Typography>
                                        </Tooltip>
                                    </Grid>

                                    <Grid
                                        item
                                        xs={3}
                                        key={score.result.thirdPlace.country}>
                                        <Tooltip
                                            title={`${score.result.thirdPlace.country}`}
                                            arrow>
                                            <Typography
                                                variant="h6"
                                                component="div"
                                                align="center"
                                                gutterBottom
                                                noWrap>
                                                {getFlagByCountryName(
                                                    score.result.thirdPlace
                                                        .country,
                                                )}
                                            </Typography>
                                        </Tooltip>
                                    </Grid>

                                    <Grid
                                        item
                                        xs={3}
                                        key={score.result.fourthPlace.country}>
                                        <Tooltip
                                            title={`${score.result.fourthPlace.country}`}
                                            arrow>
                                            <Typography
                                                variant="h6"
                                                component="div"
                                                align="center"
                                                gutterBottom
                                                noWrap>
                                                {getFlagByCountryName(
                                                    score.result.fourthPlace
                                                        .country,
                                                )}
                                            </Typography>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant="h3" component="div">
                                    {score.totalScore}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Leaderboard
