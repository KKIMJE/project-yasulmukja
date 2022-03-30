// category-tab
const lightBtn = document.querySelector('.store-category-sort');
lightBtn.addEventListener("click",function(e){
  if (e.target == e.currentTarget) {
    return;
  } else {
    e.currentTarget.querySelector('.act').classList.toggle('act');
    e.target.classList.toggle('act');
  }
});

// next, pre button
const next = document.querySelector('.next-store');
const pre = document.querySelector('.pre-store');

let storeAll = document.querySelectorAll('.store-contents-imgCard');
let cursor = 1;
const endPage = storeAll.length;

for (let i=1; i < storeAll.length; i++) {
  storeAll[i].style.display = "none";
}

next.addEventListener("click", () => {

  if (cursor == endPage) {
    console.log("range out");
  } else if (cursor == 0) {
      cursor += 1;
      if (storeAll[cursor].style.display == "none") {
        storeAll[cursor].style.display = "flex"
      }
      for (let i=cursor+1; i < endPage; i++) {
        storeAll[i].style.display = "none";
      }
      for (let i=cursor-1; i < cursor; i--) {
        if (i == -1) {
          break;
        };
        storeAll[i].style.display = "none";
      }
      cursor += 1;
      console.log("cursor : " + `${cursor}`);
    } else {
      if (storeAll[cursor].style.display == "none") {
        storeAll[cursor].style.display = "flex"
      }
      for (let i=cursor+1; i < endPage; i++) {
        storeAll[i].style.display = "none";
      }
      for (let i=cursor-1; i < cursor; i--) {
        if (i == -1) {
          break;
        };
        storeAll[i].style.display = "none";
      }
      cursor += 1;
      console.log("cursor : " + `${cursor}`);
    }
});

pre.addEventListener("click", () => {
  if (cursor == endPage) {
    cursor -= 2;
    if (-1 < cursor) {
      if (storeAll[cursor].style.display == "none") {
        storeAll[cursor].style.display = "flex"
      }
      for (let i=cursor+1; i < endPage; i++) {
        storeAll[i].style.display = "none";
      }
      for (let i=cursor-1; i < cursor; i--) {
        if (i == -1) {
          break;
        };
        storeAll[i].style.display = "none";
      }
      console.log("cursor : " + `${cursor}`);
    } else {
      console.log("range out")
    }
  } else {
    if (0 < cursor) {
      cursor -= 1;
      console.log(cursor + "oo")
      if (cursor == 1) {
        storeAll[cursor].style.display = "none"
        storeAll[cursor-1].style.display = "flex"
        return;
      }

      if (storeAll[cursor].style.display == "none") {
        storeAll[cursor].style.display = "flex"
      }
      for (let i=cursor+1; i < endPage; i++) {
        storeAll[i].style.display = "none";
      }
      for (let i=cursor-1; i < cursor; i--) {
        if (i == -1) {
          break;
        };
        storeAll[i].style.display = "none";
      }
      console.log("cursor : " + `${cursor}`);
    } else {
      console.log("range out")
    }
  }
});