import MemoLinkedList from "./memoData.js"
import MemoComponent from "./memoComponent.js"
import MemoManager from "./memoManager.js"
import ListManager from "./listManager.js"
import {db} from "./dbManager.js"


let memoList = document.getElementById("memo_list");
let trashList = document.getElementById("trash_list"); // 삭제 요망
let titleSpace = document.getElementById("titleSpace");
let memoSpace = document.getElementById("memoSpace");
let trashButton = document.getElementById("trash_button")


let memoData = new MemoLinkedList();
let memoComponent = new MemoComponent(memoData);
let memoManager = new MemoManager(memoData, titleSpace, memoSpace);
let listManager = new ListManager(memoList, trashList);

// click event listener
document.addEventListener("click", (e) => {
    let className = e.target.className; 

    if(className === "") {
        return;
    }

    // 메모 추가
    if(className.includes("plus")) {
        let component = memoComponent.createComponent();
    
        listManager.addMemoList(component["component"]);
        memoManager.setSelectedMemo(component["node"]);

        if(memoList.childElementCount === 14) {
            memoList.style.overflow = "scroll";
        }
        return;
    }
    
    // 제목 수정
    if(className.includes("fa-pen")) {
        let memo = e.target.parentNode.parentNode;
        memoManager.setSelectedMemo(memoComponent.addTitleEditer(memo));
        return;
    }
    
    // 메모 삭제 메뉴
    if(className.includes("minus")) {
        memoList.childNodes.forEach((memo, _) => {
            if(memo.lastChild.className === "titleEditer") {
                memoComponent.addTitleEditer(memo);
            }
            memoComponent.addDeleteIcon(memo);
        })
        return;
    }

    if(className.includes("xmark")) {
        let memo = e.target.parentNode.parentNode;
        listManager.removeMemoList(memo);
        memoComponent.deleteComponent(memo);
        memoList.childNodes.forEach((memo, _) => {
            memoComponent.addDeleteIcon(memo);
        })
        return;
    }

    // 메모를 누름
    if(className.includes("memo")) {
        let title = "";

        if(className === "memo") {
            title = e.target.firstChild.innerHTML;
        } else {
            title = e.target.parentNode.firstChild.innerHTML;
        }
        if(memoManager.getSelectedMemo() === memoData.getNode(title)) {
            return;
        }
        memoManager.getSelectedMemo().setMemo(memoManager.getMemoFromMemoSpace());
        memoManager.setSelectedMemo(memoData.getNode(title));
    }
});

trashButton.addEventListener("click", (e) => {
    console.log("clicked!")
    let store = db.transaction("memos", "readwrite").objectStore("memos");
    let addRequest = store.add({
        id: 1,
        memoTitle: "title",
        memoContent: "content"
    });
    addRequest.addEventListener("success", (e) => {
        console.log(e)
    })
})