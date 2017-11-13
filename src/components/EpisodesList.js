import React from "react";
import episodeItem from "./EpisodeItem";

class EpisodesList extends React.Component {
    render() {
        const {episodes, handleFavorite} = this.props;

        return (
            <div>
                {
                    episodes.map(episode => <EpisodeItem
                        key={episode.episode_id} episode={episode} onFavoriteClick={handleFavorite}/>)
                }
            </div>
        );
    }
}
