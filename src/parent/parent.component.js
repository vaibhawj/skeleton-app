import React from 'react';
import Name from '../children/name.component';
import Phone from '../children/phone.component';

const Parent = ({profile, updateProfile}) => {
    return (
        <div>
            <Name profile={profile} updateProfile={updateProfile}/>
            <br />
            <br />
            <Phone profile={profile} updateProfile={updateProfile}/>
        </div>
    )
}

export default Parent;