import React from 'react';

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false
    }

    activateEditMode (){
        this.setState({editMode: true});
    }
    deactivateEditMode (){
        this.setState({editMode: false});
    }

    render() {
        let {status} = this.props;
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{status}</span>
                    </div>
                    :
                    <div>
                        <input value={status} onBlur={this.deactivateEditMode.bind(this)} autoFocus={true}/>
                    </div>}
            </div>
        );
    }
}