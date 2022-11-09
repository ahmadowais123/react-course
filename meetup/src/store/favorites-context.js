import { createContext, useState } from "react";

// CrateContext return an object that has the Provider property on it
// Hence why we can set it in the JSX that we return FavoritesContext.Provider

// This provider components needs to be wrapped around all the components that 
// are going to use it. We will use it in index.js to wrap it around the whole app so
// everyone has access.
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  isFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {

  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: itemIsFavoriteHandler
  };

  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}

export default FavoritesContext;