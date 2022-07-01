let memoList = document.getElementById("memo_list");
let titleArea = document.getElementById("titleArea");
let memoArea = document.getElementById("memoArea");


let memoData = new MemoLinkedList();
let memoComponent = new MemoComponent(memoData);
let memoManager = new MemoManager(memoData, titleArea, memoArea);

// click event listener
document.addEventListener("click", (e) => {
    let className = e.target.className; 

    if(className === "") {
        return;
    }

    // 메모 추가
    if(className.includes("plus")) {
        let component = memoComponent.createComponent();
    
        memoList.appendChild(component["component"]);
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
            memoComponent.addDeleteIcon(memo);
        })
        return;
    }

    if(className.includes("xmark")) {
        let memo = e.target.parentNode.parentNode;
        memoList.removeChild(memo);
        memoComponent.deleteComponent(memo);
        memoList.childNodes.forEach((memo, _) => {
            memoComponent.addDeleteIcon(memo);
        })
        return
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
        memoManager.getSelectedMemo().setMemo(memoManager.getMemoToMemoArea());
        memoManager.setSelectedMemo(memoData.getNode(title));
    }
});

/*
개발해야될 내용!
1. memo title 수정하는 로직 - 메모 첫줄은 제목으로 연동 - clear
2. memo 저장하는 로직 - clear
3. memo 삭제하는 로직
4. 삭제 후 undo 로직
5. 전반적인 디자인 
6. 안내문구
7. edit 시 title 공백으로 전환
8. 메모 순서 드래그 앤 드랍으로 변경가능
9. textarea의 빨간 밑줄 
10. memoLinkedList selectedNode - clear
11. 같은 이름이 있을때 저장안됨!
12. 스크롤추가시 자동으로 아래쪽으로 내려가기
13. memoLinkedList 이름 수정
14. editComponent 수정 => 전반적인 구조 수정!
15. loadData saveData 만들기! => local starage
16. const로 리팩토링
https://colorhunt.co/palette/fcf8e894b49fecb390df7861
폰트어썸

구조 개편
타이틀로 구분하는게 아니라


*/