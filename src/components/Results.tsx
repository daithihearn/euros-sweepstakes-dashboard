import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material"
import exp from "constants"
import { getFlagByCountryName } from "helpers/flag"
import { Result } from "models/Score"

interface ResultProps {
    result: Result
}

const Results: React.FC<ResultProps> = ({ result }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: "20%" }}>
                            <Typography variant="h3" component="div">
                                Team
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h3" component="div">
                                Odds
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={"row-winner"}>
                        <TableCell style={{ width: "20%" }}>
                            <Typography variant="h6" component="div">
                                {`${getFlagByCountryName(result.winner.country)} ${result.winner.country}`}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h6" component="div">
                                {result.winner.odds}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow key={"row-runner-up"}>
                        <TableCell style={{ width: "20%" }}>
                            <Typography variant="h6" component="div">
                                {`${getFlagByCountryName(result.runnerUp.country)} ${result.runnerUp.country}`}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h6" component="div">
                                {result.runnerUp.odds}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow key={"row-third-place"}>
                        <TableCell style={{ width: "20%" }}>
                            <Typography variant="h6" component="div">
                                {`${getFlagByCountryName(result.thirdPlace.country)} ${result.thirdPlace.country}`}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h6" component="div">
                                {result.thirdPlace.odds}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow key={"row-fourth-place"}>
                        <TableCell style={{ width: "20%" }}>
                            <Typography variant="h6" component="div">
                                {`${getFlagByCountryName(result.fourthPlace.country)} ${result.fourthPlace.country}`}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h6" component="div">
                                {result.fourthPlace.odds}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Results
