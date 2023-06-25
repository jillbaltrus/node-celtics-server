import * as nbaApi from "./nba_api.js"

const NbaController = (app) => {
    app.get('/api/teams/:teamId', getTeamById);
    app.get('/api/seasons', getSeasons);
    app.get('/api/games/:teamId/:season', getGamesByTeamAndSeason);
    app.get('/api/players/:teamId/:season', getPlayersByTeamAndSeason);
    app.get('/api/standings/:teamId/:league/:season', getStandingsByTeamAndLeagueAndSeason);
    app.get('/api/games/stats/:gameId', getGameStatsByGame);
    app.get('/api/teams/stats/:teamId/:season', getTeamStatsByTeamAndSeason);
    app.get('/api/players/stats/:gameId', getPlayerStatsByGameId);
    app.get('/api/players/stats/:playerId/:season', getPlayerStatsByPlayerAndSeason);
    app.get('/api/search/players/:teamId/:season/:searchTerm', getPlayersByTeamSeasonAndSearch);
    app.get('/api/search/players/:teamId/:season', getPlayersByTeamAndSeason);
}

const getTeamById = async (req, res) => {
    const teamId = req.params.teamId;
    const team = await nbaApi.getTeamById(teamId);
    res.json(team.data.response);
}

const getSeasons = async (req, res) => {
    const seasons = await nbaApi.getSeasons();
    res.json(seasons.data.response);
}

const getGamesByTeamAndSeason = async (req, res) => {
    const teamId = req.params.teamId;
    const season = req.params.season;
    const games = await nbaApi.getGamesByTeamAndSeason(teamId, season);
    res.json(games.data.response);
}

const getPlayersByTeamAndSeason = async (req, res) => {
    const teamId = req.params.teamId;
    const season = req.params.season;
    const players = await nbaApi.getPlayersByTeamAndSeason(teamId, season);
    res.json(players.data.response);
}

const getStandingsByTeamAndLeagueAndSeason = async (req, res) => {
    const teamId = req.params.teamId;
    const season = req.params.season;
    const league = req.params.league;
    const standings = await nbaApi.getStandingsByTeamAndSeason(teamId, season, league);
    res.json(standings.data.response);
}

const getGameStatsByGame = async (req, res) => {
    const gameId = req.params.gameId;
    const gameStats = await nbaApi.getGameStatsByGame(gameId);
    res.json(gameStats.data.response);
}

const getTeamStatsByTeamAndSeason = async (req, res) => {
    const teamId = req.params.teamId;
    const season = req.params.season;
    const teamStats = await nbaApi.getTeamStatsByTeamAndSeason(teamId, season);
    res.json(teamStats.data.response);
}

const getPlayerStatsByGameId = async (req, res) => {
    const gameId = req.params.gameId;
    const playerStats = await nbaApi.getPlayerStatsByGameId(gameId);
    res.json(playerStats.data.response);
}

const getPlayerStatsByPlayerAndSeason = async (req, res) => {
    const playerId = req.params.playerId;
    const season = req.params.season;
    const playerStats = await nbaApi.getPlayerStatsByPlayerAndSeason(playerId, season);
    res.json(playerStats.data.response);
}

const getPlayersByTeamSeasonAndSearch = async (req, res) => {
    const searchTerm = req.params.searchTerm;
    const teamId = req.params.teamId;
    const season = req.params.season;
    const players = await nbaApi.getPlayersByTeamSeasonAndSearch(teamId, season, searchTerm);
    res.json(players.data.response);
}

export default NbaController
