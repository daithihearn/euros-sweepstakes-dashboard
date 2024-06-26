export interface Team {
    country: string
    odds: string
}
export interface Score {
    name: string
    result: Result
    totalScore: number
}
export interface Result {
    winner: Team
    runnerUp: Team
    thirdPlace: Team
    fourthPlace: Team
}
