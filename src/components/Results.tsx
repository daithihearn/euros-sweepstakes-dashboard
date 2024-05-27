import { Card, CardContent, Stack } from "@mui/material"
import { Result } from "models/Score"
import Team from "./Team"

interface ResultProps {
    result: Result
}

const Results: React.FC<ResultProps> = ({ result }) => {
    return (
        <Card>
            <CardContent>
                <Stack direction="column" spacing={2}>
                    <Team
                        country={result.winner.country}
                        odds={result.winner.odds}
                    />
                    <Team
                        country={result.runnerUp.country}
                        odds={result.runnerUp.odds}
                    />
                    <Team
                        country={result.thirdPlace.country}
                        odds={result.thirdPlace.odds}
                    />
                    <Team
                        country={result.fourthPlace.country}
                        odds={result.fourthPlace.odds}
                    />
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Results
