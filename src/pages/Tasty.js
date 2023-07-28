import 'assets/css/tasty.css';

const Food = () => {
    return (
        <>
            <section class="section_yunchen">
            <div class="container">
                <div class="text">
                    <h2>洋城義大利餐廳</h2>
                    <p>義式風味料理，從開胃菜到甜點一應俱全。</p>
                    <div class="btn_more">
                        <a href="https://www.yunchenpasta.com.tw/" target="_blank" rel="noreferrer noopener">前往官網</a>                        
                    </div>
                </div>
                <div class="pic">
                    <img src="images/tastybanner1.png" alt="banner" style={{maxWidth:"1200px"}} />
                </div>
            </div>
            </section>
            <div class="wrap">
                <div class="item">
                    <img src="images/SpaghettiWithSmokeDuke.jpg" alt="pasta1" style={{maxWidth:"501px", maxHeight:"384px"}}/>
                    <div class="txt">
                        <h2>人氣推薦</h2>
                        <p>宜蘭煙燻雞胸義大利麵</p>
                    </div>
                </div>
                <div class="item">
                    <img src="images/BasilPestoSpaghetti.jpg" alt="pasta2"/>
                    <div class="txt">
                        <h2>漁夫蛤蠣義大利麵</h2>
                        <p>新鮮蛤蠣/經典青醬</p>
                    </div>
                </div>
                <div class="item">
                    <img src="images/VegetableRisottoWithCreamSauce.jpg" alt="Risotto"/>
                    <div class="txt">
                        <h2>陽光庭園蔬菜燉飯</h2>
                        <p>季節時蔬/特調白醬</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Food;
