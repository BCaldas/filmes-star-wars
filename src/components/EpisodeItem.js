import React from "react";

export default class EpisodeItem extends React.Component {
  render() {
    const {episode, onFavoriteClick} = this.props;
    return (
      <div>
        <p>Título: {episode.title}</p>
        <p>Diretor: {episode.director}</p>
        <p>Produtor: {episode.producer}</p>
        <p>Favorito: {episode.favorito ? 'Sim' : 'Não'}</p>
        <button
          onClick={() => onFavoriteClick({filmeId: episode.episode_id, favorito: episode.favorito ? 0 : 1})}>
          {episode.favorito ? 'Remover dos Favoritos' : 'Favoritar'}
        </button>
      </div>
    );
  }
}