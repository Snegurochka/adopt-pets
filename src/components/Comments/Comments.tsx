import { FC, memo } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectComments, selectCommentsIsLoading } from "../../store/selectors/comments";
import { selectCurrentUser } from "../../store/selectors/user";

import { AppRoute } from "../../const";
import styles from "./Comments.module.css";

// components
import NewCommentForm from "../NewCommentForm/NewCommentForm";
import Spinner from "../Spinner/Spinner";
import CommentItem from "../CommentItem/CommentItem";


const Comments: FC = memo(() => {
    const { petId } = useParams<{ petId: string }>();
    const match = useRouteMatch();

    const comments = useSelector(selectComments);
    const user = useSelector(selectCurrentUser);
    const isLoading = useSelector(selectCommentsIsLoading);

    return (
        <div className={styles.wrapper}>
            <h2>Comments and Questions</h2>
            {isLoading ? <Spinner /> : ''}
            {comments.length ? (
                comments.map((comment) => <CommentItem comment={comment} />)
            ) :
                (<p>There are no comments and questions yet.</p>)
            }

            <Route path={`${match.path}`} exact>
                {user
                    ? <Link className="btn" to={`${match.url}${AppRoute.COMMENT_ADD}`}>Add</Link>
                    : <Link className="btn" to={AppRoute.AUTH}>Add</Link>}
            </Route>
            <Route path={`${match.path}${AppRoute.COMMENT_ADD}`}>
                <NewCommentForm petId={petId} />
            </Route>
        </div>
    )
});

export default Comments
