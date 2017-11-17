import {connect} from "react-redux";
import EpisodesList from "../components/EpisodesList";
import {handleFavoriteChange, fetchAll} from "../actions/EpisodeActions";

const mapStateToProps = state => {
  return state.episodesList;
};
const mapDispatchToProp = dispatch => ({
  init: () => dispatch(fetchAll()),
  handleFavorite: ep => dispatch(handleFavoriteChange(ep))
});

export default connect(mapStateToProps, mapDispatchToProp)(EpisodesList);