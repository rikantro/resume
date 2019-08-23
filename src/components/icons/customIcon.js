import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Storage  from '@material-ui/icons/Storage';
import AllInclusive from '@material-ui/icons/AllInclusive';
import Adb from '@material-ui/icons/Adb';

import AngularIcon from '../icons/angular';
import NodeJsIcon from '../icons/node';
import DatabaseIcon from '../icons/database';
import GitIcon from '../icons/git';
import JavaIcon from '../icons/java';
import ReactIcon from '../icons/react';
import AWSIcon from '../icons/aws';
import JavascriptIcon from './javascript';
import XamarinIcon from './xamarin';
import DotNetIcon from './dotnet';
import AtlassianIcon from './atlassian';

const useStyles = makeStyles(theme => ({
  icon: {
    marginLeft: '5px',
    marginRight: '-8px'
  },
}));

const select = (icon, classes) => {

  switch(icon) {    
    case 'android':   return <Adb className={classes.icon}/>
    case 'angular':   return <AngularIcon className={classes.icon}/>;
    case 'atlassian': return <AtlassianIcon className={classes.icon}/>;
    case 'aws':       return <AWSIcon className={classes.icon}/>
    case 'ci':        return <AllInclusive className={classes.icon}/>
    case 'db':        return <DatabaseIcon className={classes.icon}/>
    case 'dotnet':    return <DotNetIcon className={classes.icon}/>;
    case 'git':       return <GitIcon className={classes.icon}/>
    case 'java':      return <JavaIcon className={classes.icon}/>    
    case 'js':        return <JavascriptIcon className={classes.icon}/>        
    case 'node':      return <NodeJsIcon className={classes.icon}/>;
    case 'nosql':     return <Storage className={classes.icon}/>;
    case 'react':     return <ReactIcon className={classes.icon}/>
    case 'xamarin':   return <XamarinIcon className={classes.icon}/>

    default:
      return null;
  }

};


export default function CustomIcon(props) {

  const { icon } = props;
  const classes = useStyles();

  return (<React.Fragment>{select(icon, classes)}</React.Fragment>);
}