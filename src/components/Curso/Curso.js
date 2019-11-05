import React from 'react';
import { AuthUserContext } from '../Session';
import { withAuthorization } from '../Session';
import CursoPageBase from './index';
const CursoPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div >
                <CursoPageBase />
            </div>
        )}
    </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(CursoPage);