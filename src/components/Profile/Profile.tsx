import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileItemPropsType} from "../../redux/reducers/profile-reducer";

export type ProfilePropsType = {
  profile: ProfileItemPropsType | null
  //setUserProfile:(profile:ProfileItemPropsType)=>void
  getProfileTC: (userId: string) => void
  updateStatusTC: (status: string) => void
  status: string
  isOwner:boolean
  saveFile:(file:File)=>void

}

export const Profile = (props: ProfilePropsType) => {

  return (
    <div>
      <ProfileInfo saveFile={props.saveFile} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}/>
      <MyPostsContainer/>
    </div>
  );
};
