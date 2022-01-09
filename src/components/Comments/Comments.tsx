import { Link, Route, useParams } from "react-router-dom";

import NewCommentForm from "../NewCommentForm/NewCommentForm";

const Comments: React.FC = () => {
    const { petId } = useParams<{ petId: string }>();
    return (
        <div>
            Comments
            <Route path={`/details/${petId}`} exact>
                <Link to={`/details/${petId}/comments/add`}>Add</Link>
            </Route>
            <Route path={`/details/${petId}/comments/add`}>
                <NewCommentForm petId={petId} />
            </Route>
        </div>
    )
}

export default Comments
