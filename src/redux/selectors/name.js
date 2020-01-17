export const getNameStore = store => store.name;

export const getNameText = store =>
  getNameStore(store) ? getNameStore(store).name : 'No Name';