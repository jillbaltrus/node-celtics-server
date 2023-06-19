import axios from "axios";

const BASE_URL = `https://api-nba-v1.p.rapidapi.com`

export const getTeamById = (teamId) => {
    return axios({
        method: "GET",
        url: BASE_URL + `/teams`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        },
        params: {
            id: teamId
        },
    });
}

export const getSeasons = () => {
    return axios({
        method: "GET",
        url: BASE_URL + `/seasons`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    });
}

export const getGamesByTeamAndSeason = (teamId, season) => {
    return axios({
        method: "GET",
        url: BASE_URL + `/games`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        },
        params: {
            team: teamId,
            season: season
        },
    });
}

export const getPlayersByTeamAndSeason = (teamId, season) => {
    return axios({
        method: "GET",
        url: BASE_URL + `/players`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        },
        params: {
            team: teamId,
            season: season
        },
    });
}

export const getStandingsByTeamAndSeason = (teamId, season, league) => {
    return axios({
        method: "GET",
        url: BASE_URL + `/standings`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        },
        params: {
            team: teamId,
            season: season,
            league: league
        },
    });
}

export const getGameStatsByGame = (gameId) => {
    return axios({
        method: "GET",
        url: BASE_URL + `/games/statistics`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        },
        params: {
            id: gameId
        },
    });
}

export const getTeamStatsByTeamAndSeason = (teamId, season) => {
    return axios({
        method: "GET",
        url: BASE_URL + `/teams/statistics`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        },
        params: {
            id: teamId,
            season: season
        },
    });
}

export const getPlayerStatsByGameId = (gameId) => {
    return axios({
        method: "GET",
        url: BASE_URL + `/players/statistics`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        },
        params: {
            id: gameId
        },
    });
}

export const getPlayerStatsByPlayerAndSeason = (playerId, season) => {
    return axios({
        method: "GET",
        url: BASE_URL + `/players/statistics`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        },
        params: {
            id: playerId,
            season: season
        },
    });
}

export const getPlayersByTeamAndSearch = (teamId, search) => {
    return axios({
        method: "GET",
        url: BASE_URL + `/players`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        },
        params: {
            search: search,
            team: teamId
        },
    });
}

export const getPlayersByTeamSeasonAndSearch = (teamId, season, search) => {
    return axios({
        method: "GET",
        url: BASE_URL + `/players`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        },
        params: {
            search: search,
            team: teamId,
            season: season
        },
    });
}
