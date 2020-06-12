import API from "../config/axios";

const userActions = {
  GET_USERS: "GET_USERS",
  GETTING_USERS: "GETTING_USERS",
  GET_USERS_ERROR: "GET_USERS_ERROR",
};

export const getUsers = () => {
  return function (dispatch) {
    dispatch({ type: userActions.GETTING_USERS });
    API.get("/")
      .then(({data}) => {
        console.log("DATA ARRIVED FOR USERS", data);
        dispatch({type: userActions.GET_USERS, payload: { data: data.results }})
      })
      .catch((err) => {
        console.error("ERROR OCURRED WHILE GETTING USERS", err);
        dispatch({
          type: userActions.GET_USERS_ERROR,
          payload: { errorMessage: err.message },
        });
      });
  };
};

const initState = {
  data: [],
  loading: false,
  error: null,
};
export default function (state = initState, action) {
  switch (action.type) {
    case userActions.GETTING_USERS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case userActions.GET_USERS:
      return {
        ...state,
        data: action.payload.data,
        error: null,
        loading: false,
      };
    case userActions.GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.errorMessage,
        data: [],
      };
    default:
      return state;
  }
}
