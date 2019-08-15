import { createMuiTheme } from '@material-ui/core/styles'

const defaultTheme = createMuiTheme()
const values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const theme = createMuiTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: key => `@media (min-width:${values[key]}px)`,
  },
  overrides: {
    MuiAppBar: {
      root: {
        zIndex: defaultTheme.zIndex.drawer + 1,
      },
    },
    MuiDrawer: {
      root: {
        width: '240px',
      },
      paper: {
        width: '240px',
      },
    },
  },
})
