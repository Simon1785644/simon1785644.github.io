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
        <Card.Title>福島核廢水：核災廢水與核電廠廢水哪個更可怕？</Card.Title>
        <Card.Text>
          日本福島第一核電站事故發生已有12年，日本政府與管有核電站的東京電力公司凖備排放積存的核廢水，
          引發中國官方與鄰國民間團體的強烈抗議，一些太平洋島國也表達憂慮。
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
        <Card.Title>Yemen Crisis: The children of a forgotten war</Card.Title>
        <Card.Text>
          If suffering had an address, it might be al-Rasheed Street, 
          in Taiz, a Yemeni city ringed by mountains and rebel Houthi fighters. 
          On this narrow street of rough-hewn homes, the young can't escape a grinding conflict the world tends to forget. 
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
          美東時間22日下午3時，美國海岸防衛隊少將毛格（John Mauger）表示，
          泰坦號發生了「災難性的內爆」，艙內5人全數遇難。
        </Card.Text>
        <Card.Link>https://zh.wikipedia.org/zh-tw/%E6%B3%B0%E5%9D%A6%E8%99%9F%E6%BD%9B%E6%B0%B4%E5%99%A8%E4%BA%8B%E6%95%85</Card.Link>
      </Card.Body>
    </Card>
      </Col>
  )
}

const Home = () => {
  return (
    <div>
      <header className="Header">
        <p style={{color:"white", margin:"10px"}}>“If Men were angels, no government would be necessary.”— James Madison</p>
      </header>                       
      <h1 style={{color:"white", backgroundColor:"#cc3300", borderRadius:"30px", margin:"20px"}}>
        International News</h1>
      <ThemeProvider>
        <Page>
          <Cards/>
        </Page>
      </ThemeProvider>
    </div>
  );

}

export default Home;
