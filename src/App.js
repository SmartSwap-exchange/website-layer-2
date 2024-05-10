import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Header from './component/header' 
import Home from './pages/home' 
import Welcome from './pages/welcome' 
import Screen01 from './pages/screen01' 
import Screen02 from './pages/screen02' 
import Screen03 from './pages/screen03' 
import Screen04 from './pages/screen04' 
import CrosschainExpediteSolution from './pages/CrosschainExpediteSolution' 
import SmartVaults from './pages/SmartVaults' 
import Gs from './theme/globalStyles';
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'  
  
function App() {   

  const [isDark,setDarkTheme] = useState(true);
  const selectedTheme = theme(isDark);
  const [toggleState,setToggleState] = useState(false);
  const [toggleStateSidebar,setoggleStateSidebar] = useState(false);

  function setTheme(flag){
    setDarkTheme(flag);    
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <section className='bodySection clearfix'>
        <Gs.GlobalStyle />  
        <Router> 
        {window.location.pathname !== '/crosschain-expedite-solution' &&
        window.location.pathname !== '/smart-vaults' ? ( 
        <Header isDarkTheme={isDark} setTheme={setTheme} setToggleState={()=>setToggleState(!toggleState)} setoggleStateSidebar={()=>setoggleStateSidebar(!toggleStateSidebar)} toggleState={toggleState} toggleStateSidebar={toggleStateSidebar} />  
        ) : null}
          <Switch>
            <Route path="/" exact> <Home isDarkTheme={isDark} toggleState={toggleState} setoggleStateSidebar={()=>setoggleStateSidebar(!toggleStateSidebar)} toggleStateSidebar={toggleStateSidebar} setToggleState={()=>setToggleState(!toggleState)}/>  </Route>  
            <Route path="/welcome" exact> <Welcome isDarkTheme={isDark}  />  </Route>  
            <Route path="/screen01" exact> <Screen01 isDarkTheme={isDark}  />  </Route>  
            <Route path="/screen02" exact> <Screen02 isDarkTheme={isDark}  />  </Route>  
            <Route path="/screen03" exact> <Screen03 isDarkTheme={isDark}  />  </Route>  
            <Route path="/vaults" exact> <Screen04 isDarkTheme={isDark} toggleState={toggleState} setoggleStateSidebar={()=>setoggleStateSidebar(!toggleStateSidebar)} toggleStateSidebar={toggleStateSidebar} setToggleState={()=>setToggleState(!toggleState)}  />  </Route>  
            <Route path="/crosschain-expedite-solution" exact> <CrosschainExpediteSolution isDarkTheme={isDark}  />  </Route>  
            <Route path="/smart-vaults" exact> <SmartVaults isDarkTheme={isDark}  />  </Route>  
          </Switch> 
        </Router>
        
        </section>
    </ThemeProvider>
  );
}


const RightBX = styled.div`
  width:calc(100% - 240px);  background-image:url('${(props) => props.theme.RBXbg}'); background-repeat:no-repeat; background-position:top left; background-size:cover ; min-height:100vh;

`
export default App;