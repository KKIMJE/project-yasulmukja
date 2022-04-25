// import { partyList } from '../common/api/apiList.js';

var pcbody = document.querySelector(".comment-container")

// URL에서 쿼리스트링(query string)을 추출한다.
var arr = location.href.split("?"); 

if (arr.length == 1) {
    alert("요청 형식이 올바르지 않습니다.")
    throw "URL 형식 오류!";
}

var qs = arr[1];

// 쿼리 스트링에서 모임번호 값을 추출한다.
var params = new URLSearchParams(qs);
var no = params.get("no");

if (no == null) {
    alert("게시물 번호가 없습니다.");
    throw "파라미터 오류!";
}

var pTitle = document.querySelector(".party-title");
var pNickname = document.querySelector(".leader-profile span");
var pNickname2 = document.querySelector(".nickname");
var pAlcoholType = document.querySelector(".ptype");
var pDate = document.querySelector(".pdate");
var pAlcoholLimit = document.querySelector(".plimit");
var pFee = document.querySelector(".pfee");
var pMember = document.querySelector(".pmember");
//var pCommentContent = document.querySelector(".comment-content");
// var pcNickname = document.querySelector(".people-name");

  // 서버에서 데이터 가져오기
fetch(`/party/get?no=${no}`)
.then(function(response) {
    return response.json();
})
.then(function(result) {
    // 모임 게시판 상세 정보를 화면에 출력한다.
    if (result.status == "fail") {
        window.alert("서버 요청 오류!");
        console.log(result.data);
        return;
    }
    console.log(result)
    var party = result.data;

    pTitle.innerHTML = party.title;
    pNickname.innerHTML = party.nickName;
    pAlcoholType.innerHTML = party.alcoholType;
    pDate.innerHTML = party.meetingDate;
    pAlcoholLimit.innerHTML = party.alcoholLimit;
    pFee.innerHTML = `${party.partyFee}원`;
    pMember.innerHTML = `${party.maxMember}명`;

    pNickname2.innerHTML = party.nickName;

    for (var partyComment of party.partyComments) {
            pcbody.innerHTML += 
            `<div class="party-comment-fst">
                <div>
                    <img class="profile-img people" src="img/profile_sumi.jpg">
                </div>
                <div>
                    <div class="comment-text">
                        <p class="people-name">젠틀맨이다</p>
                        <div class="comment-content">
                            ${partyComment.partyCommentContents}
                        </div>
                    </div>
                    <div class="comment-footer">
                        <p class="comment-datetime">${partyComment.commentDate}</p>
                        <div class="comment-option">
                            <button type="button">
                                <i class="fa-solid fa-triangle-exclamation"></i>
                                <span>&nbsp;신고</span>
                            </button>
                        </div>
                    </div>
            </div>`;
    }
});


/*****************
참여요청 모달
*****************/
$(".button-join").click(function () {
    Swal.fire({
        icon: 'success',
        text: '참여요청이 완료되었습니다.',
        showCancelButton:false,
        confirmButtonColor:'#90d483',
        cancelButtonColor: '#90d483',
        confirmButtonText:'확인',
    })
    .then((result) => {
        if(result.isConfirmed) {
        // 방장에게 참여요청 보내는 코드 적기
        }
    })
});

/************
댓글 insert
************/
$(".btn-complete").click(function () {

    var pComment = document.querySelector("textarea[name=comment]");

    if (pComment.value == "") {
        alert("내용을 입력해주세요.");
        return;
    } 

    var cf = new FormData(document.forms.namedItem("commentform"));
    
    fetch("/partyComment/add", {
        method: "POST",
        body: new URLSearchParams(cf)
    }).then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(result) {
        console.log(result);
        if (result.status == "success") {
            alert("성공");
        } else {
            alert("실패");
        }
    });
});




    /*<div>
        <img class="profile-img people" src="img/profile_sumi.jpg">
    </div>
    <div>
        <div class="comment-text">
            <p class="people-name">젠틀맨이다</p>
            <div class="comment-content">오우 강남에 미인이 나타나셨다.
                라ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ
            </div>
        </div>
        <div class="comment-footer">
            <p class="comment-datetime">2022-01-01 22:13:10</p>
            <div class="comment-option">
                <button type="button" class="">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <span>&nbsp;신고</span>
                </button>
            </div>
        </div>*/