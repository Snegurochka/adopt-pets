import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectComments } from "../../store/selectors/comments";

import styles from "./Comments.module.css";

// components
import NewCommentForm from "../NewCommentForm/NewCommentForm";

interface IProps {
    uid: string
}

const Comments: React.FC<IProps> = ({ uid }) => {
    const { petId } = useParams<{ petId: string }>();
    const match = useRouteMatch();

    const comments = useSelector(selectComments);

    return (
        <div className={styles.wrapper}>
            <h2>Comments</h2>
            {comments ? (
                comments.map((comment) => (comment.title))
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
