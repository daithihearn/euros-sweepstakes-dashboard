import React from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
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
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Teams</TableCell>
                        <TableCell>Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedScores.map((score, index) => (
                        <React.Fragment key={index}>
                            {score.teams.map((team, teamIndex) => (
                                <TableRow key={teamIndex}>
                                    {teamIndex === 0 && (
                                        <TableCell rowSpan={score.teams.length}>
                                            {score.name}
                                        </TableCell>
                                    )}
                                    <TableCell>
                                        <Tooltip title={team.country} arrow>
                                            <Avatar
                                                src={team.flag}
                                                alt={`${team.country} flag`}
                                            />
                                        </Tooltip>
                                    </TableCell>
                                    <TableCell>{team.score}</TableCell>
                                </TableRow>
                            ))}
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Leaderboard
