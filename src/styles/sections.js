
export const headerStyle = defaultTheme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: defaultTheme.spacing(2),
    textAlign: 'center',
    color: defaultTheme.palette.text.secondary,
  },
  avatar: {
    width: 60,
    height: 60,
  }
}); 

export const languagesStyle = defaultTheme =>({
  item: {
    margin: defaultTheme.spacing(1),
  },
  progress: {
    margin: defaultTheme.spacing(1),
  },
  text: {
    verticalAlign: 'super',
  },    
});

export const experienceStyle = defaultTheme => ({
  workItem: {
    fontWeight: 500
  },
  stepper: {
    paddingLeft: 0,
    paddingRight: 0
  },
  stepContent: {
    marginTop: 0
  },  
});

export const certificationsStyle = defaultTheme => ({
  avatar: {
    borderRadius: 0,
  },
  certification: {
    fontWeight: '500'
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0
  }, 
});

export const skillsStyle = defaultTheme => ({
  item: {
    marginTop: defaultTheme.spacing(1),
    marginBottom: defaultTheme.spacing(1),
  },
  text: {
    verticalAlign: 'super',
  }
});

export const technicalSkillsStyle = defaultTheme => ({
  chip: {
    margin: '0.25rem',
  },
});

export const contactStyle = defaultTheme => ({
  text: {
    verticalAlign: 'super',
    marginLeft: defaultTheme.spacing(1)
  },
});

export const jobDetailStyle = defaultTheme => ({
  main: {
    marginTop: '0.5rem'
  }
});