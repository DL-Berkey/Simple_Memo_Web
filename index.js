let addButton = document.getElementById("add_button");
let memoList = document.getElementById("memo_list");

addButton.addEventListener("click", () => {
    let memo = document.createElement("div");
    memo.innerHTML = "추가된거";
    memo.style.borderBottom = "2px solid #FCF8E8"
    memo.style.marginTop = "5px"

    memoList.appendChild(memo);

    if(memoList.childElementCount == 16) {
        memoList.style.overflow = "scroll"
    }
})