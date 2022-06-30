let memoLinkedList = new MemoLinkedList();
let memoComponent = new MemoComponent();


let memoList = document.getElementById("memo_list");
let memoArea = document.getElementById("memoArea");

// click event listener
document.addEventListener("click", (e) => {
    let className = e.target.className; 
    let memo = e.target.parentNode.parentNode;

    if(e.target && className) {
        // 메모 추가 버튼을 눌렀을 때 이벤트
        if(className.includes("plus")) {
            let component = memoComponent.createComponent();

            memoList.appendChild(component["component"]);
            memoArea.innerHTML = component["node"].getMemo();

            if(memoList.childElementCount === 14) {
                memoList.style.overflow = "scroll";
            }
        }

        // 제목 수정을 눌렀을 때 이벤트
        if(className.includes("fa-pen")) {
            memoComponent.editComponent(memo);
        }

        // 메모 지우기를 눌렀을 때 이벤트
        if(className.includes("minus")) {
            memoComponent.test();
        }
    }
});

/*
개발해야될 내용!
1. memo title 수정하는 로직 - 메모 첫줄은 제목으로 연동 - clear
2. memo 저장하는 로직
3. memo 삭제하는 로직
4. 삭제 후 undo 로직
5. 전반적인 디자인 
6. 안내문구
7. edit 시 title 공백으로 전환
8. 메모 순서 드래그 앤 드랍으로 변경가능
9. textarea의 빨간 밑줄 
10. memoLinkedList selectedNode 삭제
https://colorhunt.co/palette/fcf8e894b49fecb390df7861
폰트어썸
*/