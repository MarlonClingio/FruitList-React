import { actionsTypes } from "../Constants/frutas"

const INITIAL_STATE = {
  frutas: [
    { id: 1, nome: "Uva", quantidade: 21 },
    { id: 2, nome: "Maçã", quantidade: 9 },
    { id: 3, nome: "Laranja", quantidade: 17 },
    { id: 4, nome: "Abacate", quantidade: 13 },
  ]
}

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADICIONAR_FRUTA:
      return { frutas: [...state.frutas, { ...action.payload }] }
    case actionsTypes.REMOVER_FRUTA:
      return { frutas: state.frutas.filter(x => x.id !== action.payload.id) }
    default:
      return state;
  }
}

export { reducers }