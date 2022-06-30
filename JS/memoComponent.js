function createMemoTitle(title) {
    let memoTitle = document.createElement("h4");

    memoTitle.style.marginLeft = "20px";
    memoTitle.position = "absolute";
    memoTitle.style.left = "0";
    memoTitle.style.top = "0";
    memoTitle.style.fontWeight = "350"
    memoTitle.innerHTML = title;

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


function createMemoTitleEditer() {
    let titleEditer = document.createElement("input");

    titleEditer.setAttribute("class", "titleEditer");

    titleEditer.style.width = "140px";
    titleEditer.style.height = "34px";
    titleEditer.style.border = "1px solid #94B49F"
    titleEditer.style.position = "absolute"
    titleEditer.style.top = "0";
    titleEditer.style.left = "20px";

    return titleEditer;
}


function editTitle(component) {
    let titleEditer = createMemoTitleEditer();
    component.appendChild(titleEditer);
    titleEditer.focus();
}

// memoComponent 생성
class MemoComponent {
    constructor(memoList) {
        this.memoList = memoList;
        this.memoLinkedList = new MemoLinkedList();
    }


    createComponent() {
        let memoNode = this.memoLinkedList.createMemo("메모");

        let memo = document.createElement("div");
        let memoTitle = createMemoTitle(memoNode.getTitle());
        let editIcon = createEditIcon();
        let editButton = createEditButton(editIcon);

        memo.style.height = "42px";
        memo.style.borderBottom = "2px solid #FCF8E8";
        memo.style.marginTop = "5px";
        memo.style.position = "relative";

        memo.appendChild(memoTitle);
        memo.appendChild(editButton);

        return {
            "component": memo,
            "node": memoNode,
        };
    }


    editComponent(component) {
        let memoNode = memoLinkedList.getMemo(component.firstChild.innerHTML);
        console.log("제목",component.firstChild.innerHTML)
    
        //제목 수정 로직
        if(component.lastChild.className === "titleEditer") {
            let inputValue = component.lastChild.value;
    
            if(inputValue !== "") {
                memoNode.setTitle(inputValue);
                if(inputValue.length >= 6) {
                    component.firstChild.innerHTML =memoNode.getShortTitle();
                } else {
                    component.firstChild.innerHTML = memoNode.getTitle();
                }
            }
            memoArea.innerHTML = memoNode.getMemo();
            component.removeChild(component.lastChild);
        } else {
            // 제목 수정창을 생성
            editTitle(component);
        }
    }

    test() {
        let value = this.memoLinkedList.getAllNode();
        console.log(value);
    }
}