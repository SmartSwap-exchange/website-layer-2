import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from './component/header' 
import Home from './pages/home' 
import Welcome from './pages/welcome' 
import Screen01 from './pages/screen01' 
import Screen02 from './pages/screen02' 
import Screen03 from './pages/screen03' 
import Gs from './theme/globalStyles';
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'  
  
function App() {   

  const [isDark,setDarkTheme] = useState(true);
  const selectedTheme = theme(isDark);

  function setTheme(flag){
    setDarkTheme(flag);    
  }

  return (
    <Router> 
    <ThemeProvider theme={selectedTheme}>
      <section className='bodySection clearfix'>
        <Gs.GlobalStyle />  
          <Header isDarkTheme={isDark} setTheme={setTheme}  />  
            <Switch>
              <Route path="/" exact> <Home isDarkTheme={isDark}  />  </Route>  
              <Route path="/welcome" exact> <Welcome isDarkTheme={isDark}  />  </Route>  
              <Route path="/screen01" exact> <Screen01 isDarkTheme={isDark}  />  </Route>  
              <Route path="/screen02" exact> <Screen02 isDarkTheme={isDark}  />  </Route>  
              <Route path="/screen03" exact> <Screen03 isDarkTheme={isDark}  />  </Route>  
            </Switch> 
        </section>
    </ThemeProvider>
    </Router> 
  );
}


const RightBX = styled.div`
  width:calc(100% - 240px);  background-image:url('${(props) => props.theme.RBXbg}'); background-repeat:no-repeat; background-position:top left; background-size:cover ; min-height:100vh;

`
export default App;