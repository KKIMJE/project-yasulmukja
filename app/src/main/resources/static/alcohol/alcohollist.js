const lightBtn = document.querySelector('.category-sort-div');
const filterBtn = document.querySelector('.filter')
var itemDiv = document.querySelector(".alclist-item-div")
const preBtn = document.querySelector(".pre-btn")
const nextBtn = document.querySelector(".next-btn")
let pageNumber = document.querySelector(".page-number")
var pageBtnDiv = document.querySelector(".page-btn-div")
// var listDiv = document.querySelector(".alcohol-list-div")


let targetArr = [];
let categoryTargetNo = 0;
let filterTargetNo;
let pageSize = 10;
let pageNo = 1;
let pageCount = 10; // 페이징에 나타낼 페이지 수
var totalPageSize = 0; // 전체 페이지 사이즈
var totalAlcoholCount;

// 도수별 정렬
function degreeSort(alcoholArr) {
  alcoholArr.sort((a, b) => {
    return a.degree - b.degree;
  })
}

// 가나다순 정렬
function alphabeticalOrderSort(alcoholArr) {
  alcoholSortArr = alcoholArr.sort((a, b) => {
    let x = a.alcoholName.toLowerCase();
    let y = b.alcoholName.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  })
}

// list 생성
function createdList(listArr) {
  targetArr = [];
  $('.alcohol-list-div div').empty()
  for (let alcohol of listArr) {
    let div = document.createElement("div")
    div.classList.add("card")
    div.classList.add("border")
    div.classList.add("border-1")
    div.classList.add("rounded-3")
    div.classList.add("shadow-lg")
    // div.classList.add("border-dark")
    div.classList.add("x-card-border")
    div.innerHTML = `
    <a class="alc-link" href="alcoholdetail.html?no=${alcohol.alcoholDetailNo}">
    <img src="${alcohol.img}" class="card-img-top">
    <div class="card-body">
    <p class="card-text">
    <ul>
    <li>${alcohol.alcoholName}</li>
    <li class="alchol-degree-value">${alcohol.degree}%</li>
    </ul>
    </p>
    </div>
    </a>
    `
    itemDiv.appendChild(div)
    targetArr.push(alcohol)
  }
}



function paging(totalAlcoholCount, pageSize, pageCount, currentPage, targetNo) {
  console.log("currentPage : " + currentPage);
  console.log(totalAlcoholCount);

  totalAlcoholPage = Math.ceil(totalAlcoholCount / pageSize) // 총 페이지 수\
  console.log(totalAlcoholPage);

  if (totalAlcoholPage < pageCount) {
    pageCount = totalAlcoholPage;
  }

  let pageGroup = Math.ceil(currentPage / pageCount) // 페이지 그룹
  let last = pageGroup * pageCount // 화면에 보여질 마지막 페이지 번호

  if (last > totalAlcoholPage) {
    last = totalAlcoholPage
  }


  let first = last - (pageCount - 1); //화면에 보여질 첫번째 페이지 번호
  let next = last + 1;
  let prev = first - 1;

  if (last % pageCount != 0) {
    first = currentPage
    last = totalAlcoholPage
  }

  let pageHtml = "";

  if (prev > 0) {
    pageHtml += "<li><a href='#' id='prev'> 이전 </a></li>";
  }

  console.log(first);
  console.log(last);

  //페이징 번호 표시
  for (var i = first; i <= last; i++) {
    if (currentPage == i) {
      pageHtml +=
        "<li class='on'><a href='#' id='" + i + "'>" + i + "</a></li>";
    } else {
      pageHtml += "<li><a href='#' id='" + i + "'>" + i + "</a></li>";
    }
  }

  if (last < totalAlcoholPage) {
    pageHtml += "<li><a href='#' id='next'> 다음 </a></li>";
  }

  $(".pagination-ul").html(pageHtml)

  //페이징 번호 클릭 이벤트
  $(".pagination-ul li a").click(function() {
    let $id = $(this).attr("id");
    selectedPage = $(this).text();

    if ($id == "next") selectedPage = next;
    if ($id == "prev") selectedPage = prev;



    //페이징 표시 재호출
    paging(totalAlcoholCount, pageSize, pageCount, selectedPage, targetNo);

    if (targetNo == 0) {
      allList()
    } else {
      targetList(targetNo)
    }
  });
}




// 주류 페이지 수
function AlcoholPageSize(targetNo) {
  console.log(targetNo)
  if (targetNo == 0) {
    fetch("/alcohol/size")
      .then(response => {
        return response.text()
      })
      .then(size => {
        totalAlcoholCount = size
        paging(totalAlcoholCount, pageSize, pageCount, 1, targetNo)
      });
  } else {
    fetch(`/alcohol/targetSize?targetNo=${targetNo}`)
      .then(response => {
        return response.text()
      })
      .then(size => {
        totalAlcoholCount = size
        paging(totalAlcoholCount, pageSize, pageCount, 1, targetNo)
      });
  }
}

// 전체 list 생성
function allList() {
  AlcoholPageSize(0);
  fetch(`/alcohol/list?pageSize=${pageSize}&pageNo=${pageNo}`)
    .then(function(response) {
      return response.json()
    })
    .then(function(alcohols) {
      createdList(alcohols);
    })
}

// target list 생성
function targetList(targetNo) {
  pageNumber.innerHTML = "1";
  fetch(`/alcohol/targetList?targetNo=${targetNo}&pageSize=${pageSize}&pageNo=${pageNo}`)
    .then(function(response) {
      return response.json()
    })
    .then(function(alcohols) {
      createdList(alcohols);
      console.log(targetArr);
      if (totalPageSize == 1) {
        nextBtn.classList.add("page-btn-act")
      }
    })
}


// 카테고리 버튼
lightBtn.addEventListener("click", function(e) {

  console.log(totalPageSize);
  categoryTargetNo = e.target.value;
  AlcoholPageSize(categoryTargetNo);
  // let totalPageSize;
  targetArr = [];
  pageNo = 1;


  if (e.target == e.currentTarget) {
    return;
  } else {
    e.currentTarget.querySelector('.act').classList.toggle('act');
    e.target.classList.toggle('act');

    $('.alcohol-list-div div').empty();

    AlcoholPageSize(categoryTargetNo)

  }
  console.log(totalPageSize);
});

// 필터 버튼
filterBtn.addEventListener("click", function(e) {
  if (e.target == e.currentTarget) {
    return;
  } else {
    e.currentTarget.querySelector('.filterAct').classList.toggle('filterAct');
    e.target.classList.toggle('filterAct');

    filterTargetNo = e.target.value

    console.log(filterTargetNo);

    if (filterTargetNo == 0) {
      degreeSort(targetArr);
      createdList(targetArr);
    }
    if (filterTargetNo == 1) {
      alphabeticalOrderSort(targetArr);
      createdList(targetArr);
    }
  }
})
