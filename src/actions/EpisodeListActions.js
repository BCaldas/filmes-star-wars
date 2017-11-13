import SWRequest from "./../SWRequest";

export const ON_EPISODES_CHANGE = "ON_EPISODES_CHANGE";

export const onEpisodesChange = episodes => ({
    type: ON_EPISODES_CHANGE,
    payload: {
        episodes
    }
});

export const fetchAll = () => dispatch => {
    SWRequest
        .fetchAll()
        .then(episodes => dispatch(onEpisodesChange(episodes)))
        .catch(e => alert("Erro ao obter a lista de episódios:" + e.message));
};

export const handleFavoriteChange = ep => dispatch => {
    SWRequest
        .setAsFavorite(ep)
        .then(() => SWRequest.fetchAll())
        .then(episodes => dispatch(onEpisodesChange(episodes)))
        .catch(e => alert("Erro ao mudar: " + e.message));
};