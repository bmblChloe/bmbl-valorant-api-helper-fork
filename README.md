# Valorant API Helper

Provides types for maps, agents, weapons sprays, flexes, player cards, player titles, bundles and seasons along with functions to get all data:

- getWeapons()
- getMaps()
- getAgents()
- getSprays()
- getFlexes()
- getPlayerCards()
- getPlayerTitles()
- getBundles()
- getSeasons()
- getCompetitiveSeasons()

Also provides functions to Log into a riot account:
*Riot has made changes to the auth flow, currently these functions may not work*
- login()
- login2FA()
- getEntitlementsToken();

Also provides functions about currently logged in player:
- getRegion()
- getPlayerInfo()
- getPlayerLoadout()
