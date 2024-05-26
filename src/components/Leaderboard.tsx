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
                    <TableRow style={{ backgroundColor: "#f5f5f5" }}>
                        <TableCell style={{ width: "20%" }}>
                            <Typography variant="h6" component="div">
                                Name
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h6" component="div">
                                Teams
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h6" component="div">
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
                                    {score.teams.map((team, teamIndex) => (
                                        <Grid item xs={3} key={teamIndex}>
                                            <Tooltip
                                                title={`${team.country}: ${team.score}`}
                                                arrow>
                                                <Typography
                                                    variant="h6"
                                                    component="div"
                                                    align="center"
                                                    gutterBottom
                                                    noWrap>
                                                    {team.flag}
                                                </Typography>
                                            </Tooltip>
                                        </Grid>
                                    ))}
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
