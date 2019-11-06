import React from 'react';
import { AuthUserContext } from '../Session';
import { withAuthorization } from '../Session';
import Selector from './Selector';
class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (<AuthUserContext.Consumer>
            {authUser => (
                <div >
                   
                    <Selector idUsuario={authUser.uid} cursoId={this.props.match.params.curso} />
                </div>
            )}
        </AuthUserContext.Consumer>)
    }




}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);