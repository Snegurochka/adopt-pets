import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectComments, selectCommentsIsLoading } from "../../store/selectors/comments";

import styles from "./Comments.module.css";

// components
import NewCommentForm from "../NewCommentForm/NewCommentForm";
import Spinner from "../Spinner/Spinner";
import CommentItem from "../CommentItem/CommentItem";

interface IProps {
    uid: string
}

const Comments: React.FC<IProps> = ({ uid }) => {
    const { petId } = useParams<{ petId: string }>();
    const match = useRouteMatch();

    const comments = useSelector(selectComments);
    const isLoading = useSelector(selectCommentsIsLoading);

    return (
        <div className={styles.wrapper}>
            <h2>Comments</h2>
            {isLoading ? <Spinner /> : ''}
            {comments ? (
                comments.map((comment) => <CommentItem comment={comment} />)
            ) :
                (<p>there is no comments yet</p>)
            }

            <Route path={`${match.path}`} exact>
                <Link className="btn" to={`${match.url}/comments/add`}>Add</Link>
            </Route>
            <Route path={`${match.path}/comments/add`}>
                <NewCommentForm petId={petId} />
            </Route>
        </div>
    )
}

export default Comments
