let memoList = document.getElementById("memo_list");
let memoLinkedList = new MemoLinkedList();
let memoArea = document.getElementById("memoArea");


function createMemoTitle(container) {
    let memoTitle = document.createElement("h4");

    memoTitle.style.marginLeft = "20px";
    memoTitle.position = "absolute";
    memoTitle.style.left = "0";
    memoTitle.style.top = "0";
    memoTitle.style.fontWeight = "350"
    memoTitle.innerHTML = "메모 " + String(parseInt(container.childElementCount) + 1);

    return memoTitle;
}


function createEditIcon() {
    editIcon = document.createElement("i");

    editIcon.setAttribute("class", "fa-solid fa-pen");
    editIcon.style.color = "#94B49F";

    return editIcon;
}


function createEditButton(editIcon) {
    let editButton = document.createElement("button");

    editButton.style.all = "unset";
    editButton.style.position = "absolute";
    editButton.style.right = "0";
    editButton.style.top = "0";

    editButton.style.marginRight = "15px";

    editButton.appendChild(editIcon);

    return editButton;
}


function createMemo(container) {
    let memo = document.createElement("div");
    let memoTitle = createMemoTitle(container);
    let editIcon = createEditIcon();
    let editButton = createEditButton(editIcon);

    memo.style.height = "42px";
    memo.style.borderBottom = "2px solid #FCF8E8";
    memo.style.marginTop = "5px";
    memo.style.position = "relative";
    // memo.style.overflow = "auto";

    memo.appendChild(memoTitle);
    memo.appendChild(editButton);

    container.appendChild(memo);

    if(container.childElementCount === 14) {
        container.style.overflow = "scroll";
    }

    return String(memoTitle.innerHTML);
}


function createEditTitleInput() {
    let titleInput = document.createElement("input");

    titleInput.setAttribute("class", "titleInput");

    titleInput.style.width = "140px";
    titleInput.style.height = "34px";
    titleInput.style.border = "1px solid #94B49F"
    titleInput.style.position = "absolute"
    titleInput.style.top = "0";
    titleInput.style.left = "20px";

    return titleInput;
}


function editTitle(memo) {
    let editTitleInput = createEditTitleInput()
    memo.appendChild(editTitleInput);
    editTitleInput.focus();
}


document.addEventListener("click", (e) => {
    let className = e.target.className; 

    if(e.target && className) {
        // 메모 추가 버튼을 눌렀을 때 이벤트
        if(className.includes("plus")) {
            let title = createMemo(memoList);
            memoLinkedList.createMemo(title);
            memoArea.innerHTML = memoLinkedList.getNode(title).getMemo();
        }

        // 제목 수정을 눌렀을 때 이벤트
        if(className.includes("fa-pen")) {
            let memo = e.target.parentNode.parentNode;

            if(memo.lastChild.className == "titleInput") {
                let previousValue = memo.firstChild.innerHTML;
                let inputValue = memo.lastChild.value;

                memo.firstChild.innerHTML = "";

                if(inputValue !== "") {
                    if(inputValue.length >= 7 ) {
                        console.log("change")
                        memo.style.height = "fit-content";
                        memo.firstChild.style.float = "";
                    }
                    memo.firstChild.innerHTML = inputValue;
                } else {
                    memo.firstChild.innerHTML = previousValue;
                }

                memo.removeChild(memo.lastChild);
            } else {
                
                editTitle(memo);
            }
        }

        // 메모 지우기를 눌렀을 때 이벤트
        if(className.includes("minus")) {
            let value = memoLinkedList.getAllNode();
            console.log(value);
        }
    }
});

/*
개발해야될 내용!
1. memo title 수정하는 로직 - 메모 첫줄은 제목으로 연동
2. memo 저장하는 로직
3. memo 삭제하는 로직
4. 삭제 후 undo 로직
5. 전반적인 디자인 
6. 안내문구
https://colorhunt.co/palette/fcf8e894b49fecb390df7861
폰트어썸
*/