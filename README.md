<!DOCTYPE html>
<html lang="ko">

<html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <tatle>LOL 메인화면</tatle>
      <script type="text/javascript" src="js/test.js"> </script>
      <script type="text/javascript" src="JS/search.js" defer> </script>
      <script type="text/javascript" src="JS/data_type.js"> </script>
      <script type="text/javascript" src="js/pop_up.js"> </script>
      <script type="text/javascript" src="js/popup_close.js"></script>
      
    


     

        <style>
            table {
            font-size: 20pt;
            color: white;
            }
            </style>

<meta name=“author” content=“20210975”>
<metaname= content=“computer”></metaname>
<base href="http://127.0.0.1:5500">




<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"> defer </script>




    </head>
    

    <body style="background-color: black;" onload="pop_up();" > 

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">

              <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    <img src="IMAGE/LOGO.png" alt="Logo" width="70" height="50" class="d-inline-block align-text-top">
                    LOL
                  </a>
                </div>
              </nav>
  

              <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">홈페이지</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">유저평가</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">게임정보</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">영웅정보</a
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            다운로드 링크
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://www.leagueoflegends.com/ko-kr/">롤공식웹사이트</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <form class="d-flex" role="search" onsubmit="return googleSearch()">
          <input class="form-control me-2" id="search_input" name="q" type="search" placeholder="키워드 입력" aria-label="Search">
          <button class="btn btn-outline-success" id="searc_btn" type="submit">검색하기</button>

          <a href="login/login.html" class="btn btn-outline-success" id="login_btn">로그인 하기</a>
          <button class="btn btn-outline-success" type="submit" onclick="location.href='join.html'">회원가입</button>

        </form>

      </div>
    </nav>
  </div>
</nav>

        
        
        <div style="display: flex; justify-content: center;">
            <a href="https://www.leagueoflegends.com/ko-kr/how-to-play/" target="_blank"> <img src="IMAGE/LOGO.png" width="200" height="60"> </a>
        <h2 style="font-size: 24px; font-weight: bold; font-style: italic; color: white;"> 게임정보 기본정보 챔피언 패치노트 새소식 등 (메뉴정보 입력)</h2>
       
        </div>
         
        <hr>
        
        <div style="display: flex; justify-content: center;">
            <a href="https://www.tottenhamhotspur.com/kr/" target="_blank"> <img src="IMAGE/MAIN.png" width="1200" height="768"> </a>


            
        </div>
        <div style="display: flex; justify-content: center;">
          <table border="1">
              <caption>인기캐릭터</caption>
              <tbody>
              <tr bgcolor="red">
              <td width="80" rowspan="2">사이온</td>
              <td>아리</td>
              <td>가렌</td>
              <td>가렌2</td>
              <td>가렌3</td>
              </tr>
              <tr bgcolor="grey">
              <td colspan="7"><a href="https://www.leagueoflegends.com/ko-kr/" target="_blank"> 롤 웹사이트 접속하기 </a></td>
      <!-- <td> 태그가 열리고 닫히는 사이에 링크를 추가하여 "롤 웹사이트 접속하기"라는 텍스트가 링크가 되도록 하였습니다.-->
              <tr>
              <td bgcolor="blue"><b>카직스</b></td>
              <td>루시안</td>
              <td>루시안2</td>
              <td colspan="2"><img src="IMAGE/바이1.png" width="100" height="50"> <font size="13">바이1, 2</font></td>
              </tr>
              </tbody>
              </table>
              </div>
        <hr>
        <div style="display: flex; justify-content: center;">
        <h3 style="font-size: 24px; font-weight: bold; font-style: italic; color: white; font-family: '굴림';">라이엇 게임 회사 정보 2024x월 작성됨</h3>
    </div>
   
       
    </body>
</html>