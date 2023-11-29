const con = document.querySelector('.Content')

const addRowBtn = document.getElementById('add')
addRowBtn.addEventListener('click', () => addNewRow())
const saveBtn = document.getElementById('save')
saveBtn.addEventListener('click', () => saveRaws())

const firstClose = document.querySelector('.btn_close')
firstClose.addEventListener('click', () => deleteRow(firstClose.id))

const firstDown = document.querySelector('.btn_down')
firstDown.addEventListener('click', () => moveDown(firstDown.id))

const firstUp = document.querySelector('.btn_up')
firstUp.addEventListener('click', () => moveUp(firstUp.id))

function addNewRow(){
    let lastRow = con.lastElementChild
    const rowClone = lastRow.cloneNode(true)
    rowClone.id = Number(lastRow.id) + 1
    con.append(rowClone)
    let closeTemp = rowClone.querySelector('.btn_close')
    closeTemp.id = rowClone.id
    closeTemp.addEventListener('click', () => deleteRow(closeTemp.id))
    let tempDown = rowClone.querySelector('.btn_down')
    tempDown.id = rowClone.id
    tempDown.addEventListener('click', () => moveDown(tempDown.id))
    let tempUp = rowClone.querySelector('.btn_up')
    tempUp.id = rowClone.id
    tempUp.addEventListener('click', () => moveUp(tempUp.id))
}

function deleteRow(id){
    let removeRow = document.getElementById(id)
    removeRow.remove()
}

function moveDown(id){
    const count = con.querySelectorAll('.Object')
    let downElem = document.getElementById(id)
    if (downElem == count[Number(count.length) - 1]){
        return
    }
    else{
        let upElem = downElem.nextElementSibling
        console.log(downElem, upElem, con)
        con.insertBefore(upElem, downElem)
    }
}

function moveUp(id){
    const count = con.querySelectorAll('.Object')
    let upElem = document.getElementById(id)
    if (upElem == count[0]){
        return
    }
    else{
        let downElem = upElem.previousElementSibling
        con.insertBefore(upElem, downElem)
    }
}

function saveRaws(){
    let savedObjects = '{';
    const objectItems = document.querySelectorAll('.Object')
    objectItems.forEach((item) => {
    const firstInputValue = item.querySelector('.key').value;
    const secondInputValue = item.querySelector('.value').value;
    savedObjects += `${firstInputValue}:${secondInputValue},`;
    });
    savedObjects += '}';
    const text = document.createElement('p')
    text.textContent = JSON.stringify(savedObjects, null, 1)
    con.append(text)
}