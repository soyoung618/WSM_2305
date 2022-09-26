//현재 구하자
let now = new Date();
//현재 년
let year = now.getFullYear();

//현재 월
let month = now.getMonth();  //0~11
month++;

const setCalender =(year,month)=>{
    //1일이 무슨 요일?
    let firstDate= new Date(year,month-1,1);
    let firsDay = firstDate.getDay();

    //말일은 며칠?
    let lastDate = new Date(year, month ,0).getDate();  //2022년 10월 0일 =2022년 9월 말일


    //제목 표시하자
    const setTitle =(year, month)=>{
        //console.log(`${year}년 ${month}월`)
        //let title_year =document.getElementById("title_year");
        title_year.innerHTML=year;     //니꼴라스 says
        //let title_montyh =document.getElementById("title_month");
        title_month.innerHTML=month;
    }
    setTitle(year,month);

    const dateGridContainerDiv = document.getElementsByClassName("date-grid-container")[0];
    //1~akfdlfRkwl gird-item 만들자
    for (let i=1; i<=lastDate;i++){
        //요소 만들자
        let newDiv =document.createElement("div");
        //class에 grid-itme 넣자
        newDiv.classList.add("grid-item");
        //text에 숫자 넣자
        newDiv.innerHTML=i;
        //부모에 newDiv 달자
        dateGridContainerDiv.appendChild(newDiv);
    }

    //1일에 해당하는 div를 grid-colum-start: 요일 +1;
    let firstDateDiv =dateGridContainerDiv.getElementsByClassName("grid-item")[0];
    firstDateDiv.style.gridColumnStart = firsDay+1;
}
year=1980;
month=3;
setCalender(year,month);

