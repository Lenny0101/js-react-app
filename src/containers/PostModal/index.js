import { connect } from "react-redux";
import PostModal from "../../components/PostModal";
import { submitPost, getPosts } from "../../actions/post";

export default connect(
  state => ({ postReducer: state.postReducer }),
  { submitPost, getPosts }
)(PostModal);
