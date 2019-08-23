import { createMuiTheme } from '@material-ui/core/styles';
import { paletteStyle } from './theme';
import { coverStyle, loadingStyle, unavailableStyle } from './components';
import { headerStyle, languagesStyle, experienceStyle, certificationsStyle, skillsStyle, technicalSkillsStyle, contactStyle, jobDetailStyle } from './sections';

const defaultTheme = createMuiTheme();

// A custom theme for this app
const theme = createMuiTheme({
  palette: paletteStyle(defaultTheme),
  loading: loadingStyle(defaultTheme),
  unavailable: unavailableStyle(defaultTheme), 
  header: headerStyle(defaultTheme),  
  technicalSkills: technicalSkillsStyle(defaultTheme),
  skills: skillsStyle(defaultTheme),
  languages: languagesStyle(defaultTheme),
  contact: contactStyle(defaultTheme),
  jobDetail: jobDetailStyle(defaultTheme),
  experience: experienceStyle(defaultTheme),
  certifications: certificationsStyle(defaultTheme),
  cover: coverStyle(defaultTheme)
});

export default theme;