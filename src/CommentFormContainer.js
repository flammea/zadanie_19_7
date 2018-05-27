import {connect} from 'react-redux';
import CommentForm from './CommentForm';
import {addComment} from './actions';


const mapDispatchToProps = dispatch => ({
  text: (commentText) => dispatch(addComment(commentText)) 
});

export default connect(null, mapDispatchToProps)(CommentForm);
