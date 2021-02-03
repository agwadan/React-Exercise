export const reducer = (state, action) => {

  console.log(state, action);
  if (action.type === 'ADD_ITEM') {

    const newPeople = [
      ...state.people,
      action.payLoad
    ]
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added'
    };
  }

  if (action.type === 'NO_VALUE') {
    console.log('Please enter a value');
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please enter a name'
    };
  }

  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false };
  }

  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter((person) => person.id !== action.payLoad);
    return { ...state, people: newPeople }
  }
  throw new Error('No matching action type');
}