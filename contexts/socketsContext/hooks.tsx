import React from "react";
import { ChatContext, ISConnectedContext } from "./context";

export const useChats = () => React.useContext(ChatContext)
export const useIsSocketConnected = () => React.useContext(ISConnectedContext)