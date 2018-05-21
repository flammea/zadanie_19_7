import {connect} from 'react-redux';
import CommentsForm from './CommentsForm';

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentsForm);