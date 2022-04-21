import * as actions from 'store/actions';
import * as servicioServices from 'services/servicio';

const servicioState = {
  servicios: [],
  currentService: {},
};

export const createService = (payload) => async (dispatch) => {
  try {
    const [currentService] = await servicioServices.createService(payload);
    dispatch({
      type: actions.CREATE_SERVICE,
      payload: { currentService },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getServicesByUser = (idCorePersona) => async (dispatch) => {
  try {
    const [currentService] = await servicioServices.getServicesByUser(
      idCorePersona,
    );
    dispatch({
      type: actions.GET_SERVICES_BY_USER,
      payload: { currentService },
    });
  } catch (error) {
    console.log(error);
  }
};

const handlers = {
  [actions.CREATE_SERVICE]: (state, { currentService }) => ({
    ...state,
    currentService,
  }),
  [actions.GET_SERVICES_BY_USER]: (state, { currentService }) => ({
    ...state,
    currentService,
  }),
};

export const servicioReducer = (state = servicioState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action.payload) : state;
};
