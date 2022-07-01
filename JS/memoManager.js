class MemoManager {
    //private field 선언
    #selectedMemo;

    constructor(memoData, titleArea, memoArea) {
        this.memoLinkedList = memoData;
        this.#selectedMemo = null;
        this.titleArea = titleArea;
        this.memoArea = memoArea;
    }

    
    // setMemoToMemoArea(node) {
    //     this.memoArea.value = node.getMemo();
    // }


    setSelectedMemo(node) {
        this.#selectedMemo = node;
        this.titleArea.innerHTML = node.getTitle();
        this.memoArea.value = node.getMemo(); 
    }


    getMemoToMemoArea() {
        return this.memoArea.value;
    }


    getSelectedMemo() {
        return this.#selectedMemo;
    }
}