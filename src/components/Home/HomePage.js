import React from 'react';
import { AuthUserContext } from '../Session';
import { withAuthorization } from '../Session';
import HomePageBase from './index';
import Selector from './Selector';
const HomePage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div >
                {console.log(authUser)}
                <Selector idUsuario={authUser.uid} />
            </div>
        )}
    </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);