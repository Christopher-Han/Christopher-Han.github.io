import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

function Nav(props) {
  console.log(props);
  var sections = props.sections
  return(
    <AppBar>
      <Toolbar>
        {
          sections.map(function(section, index) {
            return <Button href={'#' + section.name} key={index}>{section.name}</Button>
          })
        }
      </Toolbar>
    </AppBar>
  );
}
export default Nav;
