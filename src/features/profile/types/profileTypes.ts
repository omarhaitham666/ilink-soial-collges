///////////// Base Data Type ///////////

export interface ProfileBaseDataInterface {

id:number
name:string
userName:string
avatar?:string    
coverImage?:string
jobTitle:string
bio?:string
connectionsCount:number

}

///////// overview Type //////////

export interface overviewInterface {
    
description?:string
location?:string
education?:string
jobTitle?:string
skill?:string[]
activity?:string

}

///////////// about type ////////

export interface aboutInterface {

fullName?:string
userName?:string
emailAddress?:string
location?:string
phone?:string
date_of_birth?:string
jobTitle?:string
education?:string
experienceLevel?:string
department?:string

}

//////////  posts type //////

export interface postsInterface {
content?:string
img?:string
}

////////// projects type ///////

export interface projectsInterface {
img?:string
category?:string 
calendar?:number
title?:string
description?:string
tools?:string[]
link?:string
}

////////// goals type ////////////

export interface goalsInterface {
  id: number;
  title: string;
  description: string;
  category: "professional" | "education" | "personal";
  targetDate?: string;
}