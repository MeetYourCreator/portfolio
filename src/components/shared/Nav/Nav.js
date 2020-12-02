import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    listStyle: 'none',
    fontFamily: 'Bungee Inline',
    fontSize: 12,
    marginBottom: 10,
    letterSpacing: '2px'

  },

  navLink: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    color: 'white',
    outline: 'none',
    textDecoration: 'none',

  },

  '@media (max-width: 415px)': {
    navContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      listStyle: 'none',
      fontFamily: 'Bungee Inline',
      fontSize: 10,
      letterSpacing: '2px'

    },

    navLink: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      color: 'white',
      outline: 'none',
      textDecoration: 'none',

    },

  }
})

export default useStyles;