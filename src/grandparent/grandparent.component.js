import React from 'react';
import Parent from '../parent/parent.component';

const GrandParent = ({profile, updateProfile}) => {
    return <Parent profile={profile} updateProfile={updateProfile}/>
}

export default GrandParent;