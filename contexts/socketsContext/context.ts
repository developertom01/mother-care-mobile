import React from "react";
import { Chat } from "../../generated/graphql";

export const ChatContext = React.createContext<Chat[]>([])
export const ISConnectedContext = React.createContext<boolean>(false)