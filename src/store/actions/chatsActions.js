
import {GET_CHATS, CREATE_GROUP, GET_GROUP_PROFILE} from "../constants";

import instance from '../axios-docs';


export function getChats() {
    return {
        type: GET_CHATS,
        payload: instance.get("/v1/chats/",{})
    };
}

export function createGroup(name, description) {
    return {
        type: CREATE_GROUP,
        payload: instance.post("/groups",{name,description})
    };
}

export function getGroupProfile(id) {
    return {
        type: GET_GROUP_PROFILE,
        //payload: instance.get("/groups/",{id})
        payload: instance.get(`/groups/${id}`)
    };
}