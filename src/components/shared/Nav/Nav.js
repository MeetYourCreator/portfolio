import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    listStyle: 'none',
    fontFamily: 'Bebas Neue',
    fontSize: 12,
    marginBottom: 10,
    letterSpacing: '4px'

  },

  navLink: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 30,
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
      fontFamily: 'Bebas Neue',
      fontSize: 7,
      letterSpacing: '4px'

    },

    navLink: {
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: 5,
      paddingRight: 5,
      color: 'white',
      outline: 'none',
      textDecoration: 'none',

    },

  }
})

export default useStyles;