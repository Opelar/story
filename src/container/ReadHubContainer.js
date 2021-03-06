import { connect } from 'react-redux';
import { getReadHub } from '../action/readHubAction';
import RecommendPage from '../component/Recommend/Recommend.jsx';

const mapStateToProps = state => {
  return { readHubList: state.get('readHubList') };
};

const mapDispatchToProps = dispatch => ({
  getReadHubHot: ({ fromReadHub, pageSize }) =>
    dispatch(getReadHub({ fromReadHub, pageSize }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendPage);
