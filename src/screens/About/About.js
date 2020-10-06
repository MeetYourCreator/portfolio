import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  aboutContainer: {
    display: 'flex',
    flexDirection: 'column',
    jhustifyContent: 'center',
    backgroundColor: 'blue'
  },

  press: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    backgroundColor: 'yellow'
  },

  pressBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  image: {
    display: 'flex',
    width: 700,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
  }

})

export default useStyles;