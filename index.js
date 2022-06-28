let addButton = document.getElementById("add_button");
let memoList = document.getElementById("memo_list");

function createMemoTitle(container) {
    let memoTitle = document.createElement("h4");

    memoTitle.style.marginLeft = "20px";
    memoTitle.style.float = "left";
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
    editButton.style.float = "right";
    editButton.style.marginRight = "15px"

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

    memo.appendChild(memoTitle);
    memo.appendChild(editButton);

    container.appendChild(memo);

    if(container.childElementCount == 14) {
        container.style.overflow = "scroll"
    }
}


addButton.addEventListener("click", () => {
    createMemo(memoList);
})