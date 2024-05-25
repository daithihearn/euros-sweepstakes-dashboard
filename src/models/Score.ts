export interface Team {
    country: string
    flag: string
    score: number
}
export interface Score {
    name: string
    teams: Team[]
    totalScore: number
}
