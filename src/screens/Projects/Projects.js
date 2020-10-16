import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  projectsContainer: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  zIndex: -1,
  objectFit: 'cover',
  width: '100w',
    pointerEvents: 'none',
    backgroundColor: 'blue',
    color: 'white',
    wdith: '100vw',
    height: '100vh'
  },
  
  
  project: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottom: '5px solid black',
    borderTop: '5px solid black',
  },

  projectInfo: {
  
  },
  
  video: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  }
})

export default useStyles;