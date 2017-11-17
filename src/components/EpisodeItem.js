import React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

export default class EpisodeItem extends React.Component {
  render() {
    const {episode, onFavoriteClick} = this.props;
    const card = {
      height: '700px',
      width: '300px',
      float: 'left',
      marginRight: '10px',
      marginBottom: '10px'
    };

    const titleStyle = {
      fontWeight: 'bold'
    };

    const backGround = {
      backgroundColor: 'lightblue'
    };

    const poster = '../../public/img/episode' + episode.episode_id + '.jpg';

    const title = 'Episode ' + episode.episode_id;

    return (
      <div style={card}>
        <Card style={backGround}>
          <CardHeader
            title={title}
            textStyle={titleStyle}/>

          <CardMedia
            overlay={<CardTitle title={episode.title}/>}
          >
            <img src={poster} alt=""/>
          </CardMedia>

          <CardText>
            <p>Diretor: {episode.director}</p>
            <p>Produtor: {episode.producer}</p>
            <p>Favorito: {episode.favorito ? 'Sim' : 'Não'}</p>
          </CardText>

          <CardActions>
            <RaisedButton label={episode.favorito ? 'Remover dos Favoritos' : 'Favoritar'}
                          onClick={() => onFavoriteClick({
                            filmeId: episode.episode_id,
                            favorito: episode.favorito ? 0 : 1
                          })}
                          backgroundColor="#4169E1"/>

          </CardActions>
        </Card>
      </div>
    );
  }
}