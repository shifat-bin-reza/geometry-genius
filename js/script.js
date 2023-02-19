// receive first values, convert them to number then return them
function getValueOne(getValOne, getField) {
    const getInputValOne = document.getElementById(getValOne);

    if (getField == 'input-field') {
        // get string value
        const getInputValOneString = getInputValOne.value;
        // convert to number
        const getInputValOneNumber = parseFloat(getInputValOneString);

        // return if it is a positive number
        if (getInputValOneString >= '0' && getInputValOneString <= '9') {
            getInputValOne.value = "";
            return getInputValOneNumber;
        } else {
            getInputValOne.value = "";
            return -1;
        }
    } else {
        //get string value
        const getInputValOneString = getInputValOne.innerText;
        // convert to number
        const getInputValOneNumber = parseFloat(getInputValOneString);

        // return if it is a positive number
        if (getInputValOneString >= '0' && getInputValOneString <= '9') {
            return getInputValOneNumber;
        } else {
            return -1;
        }
    }
}

// receive second values, convert them to number then return them
function getValueTwo(getValTwo, getField) {
    const getInputValTwo = document.getElementById(getValTwo);

    if (getField == 'input-field') {
        // get string value
        const getInputValTwoString = getInputValTwo.value;
        // convert to number
        const getInputValTwoNumber = parseFloat(getInputValTwoString);

        if (getInputValTwoString >= '0' && getInputValTwoString <= '9') {
            getInputValTwo.value = "";
            return getInputValTwoNumber;
        } else {
            getInputValTwo.value = "";
            return -1;
        }
    } else {
        //get string value
        const getInputValOneString = getInputValTwo.innerText;
        // convert to number
        const getInputValOneNumber = parseFloat(getInputValOneString);

        // return if it is a positive number
        if (getInputValOneString >= '0' && getInputValOneString <= '9') {
            return getInputValOneNumber;
        } else {
            return -1;
        }
    }
}

function setResult(getIdOfTitle, getIdOfResult, getTableContainer) {
    const getTitle = document.getElementById(getIdOfTitle).innerText;
    const tableContainer = document.getElementById(getTableContainer);

    // increase result serial by 1
    let serialNo = 0;
    serialNo = document.getElementById('table-container').children.length + 1;

    // creating new table row
    const newTr = document.createElement('tr');
    newTr.innerHTML = `
        <th>${serialNo}</th>
        <td>${getTitle}</td>
        <td>${getIdOfResult + ' cm'}<sup>${2}</sup></td>
        <td>
        <button class='bg-sky-500 hover:bg-sky-400 text-white px-3 py-1 rounded-md'>${'Convert to m'}
        <sup>${2}</sup>
        </button>
        </td>
        <td><i class="fa-cross fa-solid fa-xmark"></i></td>
    `;
    tableContainer.appendChild(newTr);

    // remove item if click on cross button
    const crosses = document.getElementsByClassName('fa-cross');
    for (const cross of crosses) {
        cross.addEventListener('click', function () {
            cross.parentNode.parentNode.remove();
        })
    }
}

// Go to the blog page on button click
document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = 'blog.html'
})

// Triangle Area
document.getElementById('btn-triangle').addEventListener('click', function () {
    const getValue1 = getValueOne('triangle-val-1', 'input-field');
    const getValue2 = getValueTwo('triangle-val-2', 'input-field');

    if (getValue1 == -1 || getValue2 == -1) {
        alert('Please Enter Positive Value!');
    } else {
        const Area = 0.5 * getValue1 * getValue2;
        setResult('triangle-title', Area, 'table-container')
    }
})

// Rectangle Area
document.getElementById('btn-rectangle').addEventListener('click', function () {
    const getValue1 = getValueOne('rectangle-val-1', 'input-field');
    const getValue2 = getValueTwo('rectangle-val-2', 'input-field');

    if (getValue1 == -1 || getValue2 == -1) {
        alert('Please Enter Positive Value!');
    } else {
        const Area = getValue1 * getValue2;
        setResult('rectangle-title', Area, 'table-container')
    }
})

// Parallelogram Area
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    const getValue1 = getValueOne('parallelogram-val-1', 'text-field');
    const getValue2 = getValueTwo('parallelogram-val-2', 'text-field');

    if (getValue1 == -1 || getValue2 == -1) {
        alert('Please Enter Positive Value!');
    } else {
        const Area = getValue1 * getValue2;
        setResult('parallelogram-title', Area, 'table-container')
    }
})

// Rhombus Area
document.getElementById('btn-rhombus').addEventListener('click', function () {
    const getValue1 = getValueOne('rhombus-val-1', 'text-field');
    const getValue2 = getValueTwo('rhombus-val-2', 'text-field');

    if (getValue1 == -1 || getValue2 == -1) {
        alert('Please Enter Positive Value!');
    } else {
        const Area = 0.5 * getValue1 * getValue2;
        setResult('rhombus-title', Area, 'table-container')
    }
})

// Pentagon Area
document.getElementById('btn-pentagon').addEventListener('click', function () {
    const getValue1 = getValueOne('pentagon-val-1', 'text-field');
    const getValue2 = getValueTwo('pentagon-val-2', 'text-field');

    if (getValue1 == -1 || getValue2 == -1) {
        alert('Please Enter Positive Value!');
    } else {
        const Area = 0.5 * getValue1 * getValue2;
        setResult('pentagon-title', Area, 'table-container')
    }
})

// Ellipse Area
document.getElementById('btn-ellipse').addEventListener('click', function () {
    const getValue1 = getValueOne('ellipse-val-1', 'text-field');
    const getValue2 = getValueTwo('ellipse-val-2', 'text-field');

    if (getValue1 == -1 || getValue2 == -1) {
        alert('Please Enter Positive Value!');
    } else {
        const Area = 3.1416 * getValue1 * getValue2;
        setResult('ellipse-title', Area, 'table-container')
    }
})

// show the input boxes
function displayBlockId(editBtnId, displayId) {
    document.getElementById(editBtnId).addEventListener('click', function () {
        const displayBlock = document.getElementById(displayId);
        displayBlock.style.display = 'block';
    })
}

// hide the input boxes
function displayNoneId(editBtnId, displayId) {
    document.getElementById(editBtnId).addEventListener('dblclick', function () {
        const displayBlock = document.getElementById(displayId);
        displayBlock.style.display = 'none';
    })
}

// Set new value to inner text
function setNewInnerText(newValue1Id, newValue1, newValue2Id, newValue2) {
    const setParallelogramVal1 = document.getElementById(newValue1Id);
    setParallelogramVal1.innerText = newValue1;
    const setParallelogramVal2 = document.getElementById(newValue2Id);
    setParallelogramVal2.innerText = newValue2;
}

// Get new value for parallelogram
displayBlockId('parallelogram-edit', 'parallelogram-display-none');
displayNoneId('parallelogram-edit', 'parallelogram-display-none');
document.getElementById('parallelogram-set-value').addEventListener('click', function () {

    const getValue1 = getValueOne('parallelogram-input-val-1', 'input-field');
    const getValue2 = getValueTwo('parallelogram-input-val-2', 'input-field')

    if (getValue1 == -1 || getValue2 == -1) {
        alert('Please Enter Positive Value!');
    } else {
        setNewInnerText('parallelogram-val-1', getValue1, 'parallelogram-val-2', getValue2);
    }
})

// Get new value for rhombus
displayBlockId('rhombus-edit', 'rhombus-display-none');
displayNoneId('rhombus-edit', 'rhombus-display-none');
document.getElementById('rhombus-set-value').addEventListener('click', function () {

    const getValue1 = getValueOne('rhombus-input-val-1', 'input-field');
    const getValue2 = getValueTwo('rhombus-input-val-2', 'input-field')

    if (getValue1 == -1 || getValue2 == -1) {
        alert('Please Enter Positive Value!');
    } else {
        setNewInnerText('rhombus-val-1', getValue1, 'rhombus-val-2', getValue2);
    }
})

// Get new value for pentagon
displayBlockId('pentagon-edit', 'pentagon-display-none');
displayNoneId('pentagon-edit', 'pentagon-display-none');
document.getElementById('pentagon-set-value').addEventListener('click', function () {

    const getValue1 = getValueOne('pentagon-input-val-1', 'input-field');
    const getValue2 = getValueTwo('pentagon-input-val-2', 'input-field')

    if (getValue1 == -1 || getValue2 == -1) {
        alert('Please Enter Positive Value!');
    } else {
        setNewInnerText('pentagon-val-1', getValue1, 'pentagon-val-2', getValue2);
    }
})

// Get new value for Ellipse
displayBlockId('ellipse-edit', 'ellipse-display-none');
displayNoneId('ellipse-edit', 'ellipse-display-none');
document.getElementById('ellipse-set-value').addEventListener('click', function () {

    const getValue1 = getValueOne('ellipse-input-val-1', 'input-field');
    const getValue2 = getValueTwo('ellipse-input-val-2', 'input-field')

    if (getValue1 == -1 || getValue2 == -1) {
        alert('Please Enter Positive Value!');
    } else {
        setNewInnerText('ellipse-val-1', getValue1, 'ellipse-val-2', getValue2);
    }
})