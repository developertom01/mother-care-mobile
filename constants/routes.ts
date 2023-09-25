enum Routes {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  HOME = "HOME",
  TAB = "TAB",
  NOTIFICATION = "NOTIFICATION",
  //
  CHATS = "CHATS",
  CHAT_MESSAGING = "CHAT-MESSAGING",

  SETTINGS = "SETTINGS",
  DOCTOR_DETAIL = "DOCTOR-DETAIL",
}

export type RouteRootStackParamList = {
  [Routes.LOGIN]: undefined;
  [Routes.REGISTER]: undefined;
  [Routes.HOME]: undefined;
  [Routes.TAB]: undefined;
  [Routes.DOCTOR_DETAIL]: { id: string };
  [Routes.CHATS]: { id: string };
  [Routes.CHAT_MESSAGING]: { id: string };
};

export default Routes;
