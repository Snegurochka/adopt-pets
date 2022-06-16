import React from 'react'
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../../components/Layout/Layout'
import { AppStateType } from '../../store/reducers';

const Account: React.FC = () => {
    const { user } = useSelector((s: AppStateType) => s.user);
    return (
        <Layout typeContent="page" header="My account">
            {user
                ? (<div>
                    <Link to="/favorite">Favorites</Link>
                </div>)
                :
                <Redirect to='/' />
            }
        </Layout>
    )
}

export default Account