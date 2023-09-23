enum Routes {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  HOME = "HOME",
  TAB = "TAB",
  NOTIFICATION = "NOTIFICATION",
  CHATS = "CHATS",
  SETTINGS = "SETTINGS",
  DOCTOR_DETAIL = "DOCTOR-DETAIL",
}

export type RouteRootStackParamList = {
  [Routes.LOGIN]: undefined;
  [Routes.REGISTER]: undefined;
  [Routes.HOME]: undefined;
  [Routes.TAB]: undefined;
  "DOCTOR-DETAIL": { id: string };
};

export default Routes;
