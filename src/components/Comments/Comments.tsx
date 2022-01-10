import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import styles from "./Comments.module.css";
import NewCommentForm from "../NewCommentForm/NewCommentForm";

const Comments: React.FC = () => {
    const { petId } = useParams<{ petId: string }>();
    const match = useRouteMatch();
    return (
        <div className={styles.wrapper}>
            <h2>Comments</h2>
            <p>there is no comments yet</p>
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
