(() => {
    // storing inputNumber and select operators
    const values = {
        baseInput: 0,
        selectOp: '+',
        maxInput: 0,
    };

    // get input and select opeartor value
    const handleInput = (elementId, event, key) => {
        document.querySelector(elementId).addEventListener(event, (e) => {
            // get element value once action trigger
            const { value } = e.target;

            // store to object if argument match in the key of obj 
            values[key] = key === 'selectOp' ? value : Number(value);
            // console.log(`${typeof values['base']} ${values['op']} ${typeof values['max']}`)
            validateInput();
        });
    };

    // start getting input user once action trigger
    handleInput('#baseNumber', 'input', 'baseInput');
    handleInput('#arithmetic', 'change', 'selectOp');
    handleInput('#maximumNumber', 'input', 'maxInput');


    /* Elements helper */
    // for all element
    const element = (el) => document.querySelector(el);
    const showElement = (el, displayValue) => element(el).style.display = displayValue;
    const showSetText = (el, textValue) => element(el).textContent = textValue;
    const resetContent = (el) => element(el).innerHTML = '';
    const setInvalid = (el) => {
        element(el).className = 'invalid';

        setTimeout(() => element(el).className = '', 2000);
    };

    // to validate number to display or not
    function validateInput() {
        // obj values
        const { baseInput, maxInput } = values;

        // if no enter value
        if(!baseInput && !maxInput) {
            setInvalid('#baseNumber');
            setInvalid('#maximumNumber');
            showElement('#content', 'block');
            showSetText('#content', `- no enter value, please try again! -`);
            return;
        }

        // if no enter value in max
        if(baseInput && !maxInput) {
            disableSelectOperator(true);
            showElement('#btn', 'none');
            setInvalid('#maximumNumber');
            showElement('#content', 'block');
            showSetText('#content', `- please enter value in (maximum) number! -`);
            return;
        }

        // if no enter value in base
        if(!baseInput && maxInput) {
            disableSelectOperator(true);
            showElement('#btn', 'none');
            setInvalid('#baseNumber');
            showElement('#content', 'block');
            showSetText('#content', `- please enter value in (base) number! -`);
            return;
        }

        // if valid just display
        disableSelectOperator(false);
        showElement('#btn', 'block');
        showSetText('#content', `- Table of (${baseInput}) to (${maxInput}) -`);
    };

    function disableSelectOperator(value) {
        element('#arithmetic').disabled = value;
    }
    /* for click and Enter User */
    element('#btn').addEventListener('click', generateTable);
    document.addEventListener('keydown', (e) => {

        if(e.key === 'Enter') generateTable();
    });

    async function generateTable() {
        const { baseInput, selectOp, maxInput } = values;


        // if no enter value
        if(!baseInput && !maxInput) {
            setInvalid('#baseNumber');
            setInvalid('#maximumNumber');
            showElement('#content', 'block');
            showSetText('#content', `- no enter value, please try again! -`);
            return;
        }

        // if no enter value in max
        if(baseInput && !maxInput) {
            disableSelectOperator(true);
            showElement('#btn', 'none');
            setInvalid('#maximumNumber');
            showElement('#content', 'block');
            showSetText('#content', `- please enter value in (maximum) number! -`);
            return;
        }

        // if no enter value in base
        if(!baseInput && maxInput) {
            disableSelectOperator(true);
            showElement('#btn', 'none');
            setInvalid('#baseNumber');
            showElement('#content', 'block');
            showSetText('#content', `- please enter value in (base) number! -`);
            return;
        }

        // show spinner loading if valid
        showElement('.spinner', 'block');
        // reset first before insert
        resetContent('.child-table');
        // clear input when done generate table
        clearInput();

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < maxInput; i++) {
            // loading effect
            await delay(0);

            const p = document.createElement('p');
            p.textContent = createTableRow(baseInput, selectOp, i); 
            fragment.appendChild(p);
        };

        showElement('.spinner', 'none');
        element('.child-table').appendChild(fragment);

    };

    function createTableRow(baseInput, selectOp, i) {
        const symbol = selectOp === '*' ? 'x' : selectOp;
        // inital value
        let result = 0;

        // if user select divide to prevent infinity
        if(selectOp === '/') {
            result = i === 0 ? '(Cannot divide by zero)' : (baseInput / i).toFixed(2);
        } else {
            result = eval(`${baseInput} ${selectOp} ${i}`);
        }

        return `${baseInput} ${symbol} ${i} = ${result}`;
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function clearInput() {
        element('#baseNumber').value = '';
        element('#maximumNumber').value = '';
        values['baseInput'] = 0;
        values['maxInput'] = 0;
        disableSelectOperator(true);
        showElement('#btn', 'none');
    }

    disableSelectOperator(true);
    showElement('#content', 'block');
    showSetText('#content', '- table will appear here -');
})(); 