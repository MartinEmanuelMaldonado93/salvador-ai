'use server';
import { useServerStore } from "./storeOpenAi";

export async function setServerState(user_client_session : string ) {
    console.log('setServerState', user_client_session);
    user_client_session && useServerStore.setState({user_name: user_client_session});
}