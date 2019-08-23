export const loadingStyle = defaultTheme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: defaultTheme.spacing(10),
  },
  progress: {
    margin: defaultTheme.spacing(2),
  },
});


export const coverStyle = defaultTheme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin:defaultTheme.spacing(2),
    padding: defaultTheme.spacing(4),
  },   
});

export const unavailableStyle = defaultTheme => ({
  root: {
    margin: defaultTheme.spacing(2),
    padding: defaultTheme.spacing(4),
  },   
});