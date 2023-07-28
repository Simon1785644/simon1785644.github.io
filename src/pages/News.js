import {useContext, createContext} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';

const theme = {
  light: {
    backgroundColor: "white",
    color: "black"
  },
  dark: {
    backgroundColor: "black",
    color: "white"
  }
}

const themeContext = createContext(theme.light);

const useTheme = () => {
  return useContext(themeContext);
}

const ThemeProvider=({children}) => {
  return (
    <themeContext.Provider value={theme}>
      {children}
    </themeContext.Provider>
  )
}

const Page = ({children}) => {
  return (
    <Container className="vh-100">
      {children}
    </Container>
  )
}

const Cards = () => {
  return (
      <Row className="h-100 justify-content-between align-items-center">
        <News1 isLight={false}/>
        <News2 isLight={true}/>
        <News3 isLight={false}/>     
      </Row>
    )
}

const News1 = ({isLight}) => {
  let theme = useTheme();
  if(isLight){
    theme = theme.light;
  }else{
    theme = theme.dark;
  }
  return (
    <Col>
      <Card style={theme}>
      <Card.Body>
        <Card.Title>福島核廢水專題</Card.Title>
        <Card.Text>
          核災廢水與核電廠廢水哪個更可怕？
        </Card.Text>
        <Card.Link>https://www.bbc.com/zhongwen/trad/science-66264193</Card.Link>
      </Card.Body>
    </Card>
      </Col>
  )
}

const News2 = ({isLight}) => {
  let theme = useTheme();
  if(isLight){
    theme = theme.light;
  }else{
    theme = theme.dark;
  }
  return (
    <Col>
      <Card style={theme}>
      <Card.Body>
        <Card.Title>Yemen Crisis</Card.Title>
        <Card.Text>
          The children of a forgotten war
        </Card.Text>
        <Card.Link>https://www.bbc.co.uk/news/world-middle-east-66258171</Card.Link>
      </Card.Body>
    </Card>
      </Col>
  )
}

const News3 = ({isLight}) => {
  let theme = useTheme();
  if(isLight){
    theme = theme.light;
  }else{
    theme = theme.dark;
  }
  return (
    <Col>
      <Card style={theme}>
      <Card.Body>
        <Card.Title>2023年泰坦號潛水器事故</Card.Title>
        <Card.Text>
          鐵達尼號觀光潛水器「泰坦（Titan）」事故引發全球關注。
        </Card.Text>
        <Card.Link>https://udn.com/news/story/123561/7255341</Card.Link>
      </Card.Body>
    </Card>
      </Col>
  )
}

const News = () => {
  return (
    <div>               
      <h1 style={{color:"white", backgroundColor:"#cc3300", margin:"10px"}}>
        These Major World Events</h1>
      <span>
      “If Men were angels, no government would be necessary. <br/>
        If angels were to govern men, neither external nor internal controls on government would be necessary. <br/>
        In framing a government which is to be administered by men over men, <br/>
        the great difficulty lies in this: you must first enable the government to control the governed; <br/>
        and the next place, oblige it to control itself.”— James Madison
        <img src="https://images.gr-assets.com/authors/1213974226p2/63859.jpg" alt="Madison" />
      </span>
      <ThemeProvider>
        <Page>
          <Cards/>
        </Page>
      </ThemeProvider>
    </div>
  );

}

export default News;
