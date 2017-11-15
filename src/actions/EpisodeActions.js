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
    .then(({data}) => dispatch(onEpisodesChange(data)))
    .catch(e => alert("Erro ao obter a lista de episódios: " + e.message));
};

export const handleFavoriteChange = ep => dispatch => {
  SWRequest
    .setAsFavorite(ep)
    .then(() => {
      console.log("Chegou");
      return SWRequest.fetchAll();
    })
    .then(({data}) => dispatch(onEpisodesChange(data)))
    .catch(e => alert("Erro ao mudar: " + e.message));
};