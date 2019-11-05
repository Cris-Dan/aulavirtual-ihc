import React from 'react';
import { AuthUserContext } from '../Session';
import { withAuthorization } from '../Session';
import HomePageBase from './index';
const HomePage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div >
                {console.log(authUser)}
                <HomePageBase idUsuario={authUser} />
            </div>
        )}
    </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);