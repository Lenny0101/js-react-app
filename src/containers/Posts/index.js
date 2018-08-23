import { connect } from "react-redux";
import Posts from "../../components/Posts";
import { getPosts } from "../../actions/post";

export default connect(
  state => ({ postReducer: state.postReducer }),
  { getPosts }
)(Posts);
