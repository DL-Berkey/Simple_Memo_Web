export default class MemoManager {
    //private field 선언
    #selectedMemo;

    constructor(memoData, titleSpace, memoSpace) {
        this.#selectedMemo = null;
        this.memoData = memoData;
        this.titleSpace = titleSpace;
        this.memoSpace = memoSpace;
    }


    setSelectedMemo(node) {
        this.#selectedMemo = node;
        this.titleSpace.innerHTML = node.getTitle();
        this.memoSpace.value = node.getMemo(); 
    }
    
    
    getSelectedMemo() {
        return this.#selectedMemo;
    }


    getTitleFromTitleSpace() {
        return this.titleSpace.innerText;
    }


    getMemoFromMemoSpace() {
        return this.memoSpace.value;
    }

    saveMemo() {
        
    }
}