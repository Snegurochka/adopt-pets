import { FC } from 'react'
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { selectCurrentUser } from '../../store/selectors/user';

import Layout from '../../components/Layout/Layout'
import { AppRoute } from '../../const';

const Account: FC = () => {
    const user = useSelector(selectCurrentUser);
    return (
        <Layout typeContent="page" header="My account">
            {user
                ? (<div>
                    <Link to={AppRoute.FAVORITES}>Favorites</Link>
                </div>)
                :
                <Redirect to='/' />
            }
        </Layout>
    )
}

export default Account