import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    listStyle: 'none',
    fontFamily: 'Bungee Inline',
    fontSize: 20,
    letterSpacing: '2px'

  },

  navLink: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 50,
    color: 'white',
    outline: 'none',
    textDecoration: 'none',

  }

})

export default useStyles;