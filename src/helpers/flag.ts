export const getFlagByCountryName = (countryName: string) => {
    switch (countryName.toLowerCase()) {
        case "albania":
            return "🇦🇱"
        case "andorra":
            return "🇦🇩"
        case "armenia":
            return "🇦🇲"
        case "austria":
            return "🇦🇹"
        case "azerbaijan":
            return "🇦🇿"
        case "belarus":
            return "🇧🇾"
        case "belgium":
            return "🇧🇪"
        case "bosnia and herzegovina":
            return "🇧🇦"
        case "bulgaria":
            return "🇧🇬"
        case "croatia":
            return "🇭🇷"
        case "cyprus":
            return "🇨🇾"
        case "czech republic":
            return "🇨🇿"
        case "denmark":
            return "🇩🇰"
        case "estonia":
            return "🇪🇪"
        case "finland":
            return "🇫🇮"
        case "france":
            return "🇫🇷"
        case "georgia":
            return "🇬🇪"
        case "germany":
            return "🇩🇪"
        case "greece":
            return "🇬🇷"
        case "hungary":
            return "🇭🇺"
        case "iceland":
            return "🇮🇸"
        case "ireland":
            return "🇮🇪"
        case "italy":
            return "🇮🇹"
        case "kazakhstan":
            return "🇰🇿"
        case "kosovo":
            return "🇽🇰"
        case "latvia":
            return "🇱🇻"
        case "liechtenstein":
            return "🇱🇮"
        case "lithuania":
            return "🇱🇹"
        case "luxembourg":
            return "🇱🇺"
        case "malta":
            return "🇲🇹"
        case "moldova":
            return "🇲🇩"
        case "monaco":
            return "🇲🇨"
        case "montenegro":
            return "🇲🇪"
        case "netherlands":
            return "🇳🇱"
        case "north macedonia":
            return "🇲🇰"
        case "norway":
            return "🇳🇴"
        case "poland":
            return "🇵🇱"
        case "portugal":
            return "🇵🇹"
        case "romania":
            return "🇷🇴"
        case "russia":
            return "🇷🇺"
        case "san marino":
            return "🇸🇲"
        case "serbia":
            return "🇷🇸"
        case "slovakia":
            return "🇸🇰"
        case "slovenia":
            return "🇸🇮"
        case "spain":
            return "🇪🇸"
        case "sweden":
            return "🇸🇪"
        case "switzerland":
            return "🇨🇭"
        case "turkey":
            return "🇹🇷"
        case "ukraine":
            return "🇺🇦"
        case "united kingdom":
            return "🇬🇧"
        case "england":
            return "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
        case "scotland":
            return "🏴󠁧󠁢󠁳󠁣󠁴󠁿"
        case "wales":
            return "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
        default:
            return "🏳️" // default to white flag if not found
    }
}
