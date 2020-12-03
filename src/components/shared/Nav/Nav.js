import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    listStyle: 'none',
    fontFamily: 'Bungee Inline',
    fontSize: 12,
    marginBottom: 10,
    letterSpacing: '2px'

  },

  navLink: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 0,
    marginRight: 3,
    color: 'white',
    outline: 'none',
    textDecoration: 'none',

  },

  '@media (max-width: 505px)': {
    navContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      listStyle: 'none',
      fontFamily: 'Bungee Inline',
      fontSize: 7,
      letterSpacing: '2px'

    },

    navLink: {
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: 0,
      paddingRight: 0,
      color: 'white',
      outline: 'none',
      textDecoration: 'none',

    },

  }
})

export default useStyles;