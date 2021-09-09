import { StarRate } from "@material-ui/icons";
import { START, SUCCESS, ERROR } from "../constants/userConstans";

interface userInfoDataStructure {
  id: string;
  fullname: string;
  username: string;
  accountType: string;
  email: string;
  image: string;
  password?: string;
}
const userInfo: userInfoDataStructure =
  localStorage.getItem("userInfo") &&
  (JSON.parse(localStorage.getItem("userInfo")!) || null);
export const userInfoReducer = (state = userInfo, action: any) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

interface loginScreenInterface {
  loading: boolean;
  error?: string;
}

interface actionDataStructure {
  type: string;
  payload?: {};
}

export const loginReducer = (
  state: loginScreenInterface = { loading: false, error: "" },
  action: actionDataStructure
): loginScreenInterface => {
  switch (action.type) {
    case START:
      return { ...state, loading: true, error: "" };
    case SUCCESS:
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      return { ...state, loading: false, error: "" };
    case ERROR:
      return { ...state, loading: false, error: "Wrong username or password." };
    default:
      return { ...state };
  }
};

interface registerScreenStructure {
  loading: boolean;
  error?: string;
  registerd: boolean;
}

interface registerActionDataStructure {
  type: string;
  payload?: object;
}

export const registerReducer = (
  state: registerScreenStructure = { loading: false, registerd: false },
  action: registerActionDataStructure
) => {
  switch (action.type) {
    case START:
      return { ...state, loading: true, registered: false };
    case SUCCESS:
      return { ...state, loading: false, registered: true };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: "Something went wrong.",
        registerd: false,
      };
    default:
      return { ...state };
  }
};
