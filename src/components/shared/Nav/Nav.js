import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    listStyle: 'none',
    fontFamily: 'Bungee Inline',
    fontSize: 10,
    letterSpacing: '2px'

  },

  navLink: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    color: 'white',
    outline: 'none',
    textDecoration: 'none',

  },

  '@media (max-width: 415px)': {
    navContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      listStyle: 'none',
      fontFamily: 'Bungee Inline',
      fontSize: 10,
      letterSpacing: '2px'

    },

    navLink: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 20,
      color: 'white',
      outline: 'none',
      textDecoration: 'none',

    },

  }
})

export default useStyles;