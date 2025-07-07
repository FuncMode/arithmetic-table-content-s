(() => {
    const values = {
        baseInput: 0,
        selectOp: '+',
        maxInput: 0,
    };

    const handleInput = (elementId, event, key) => {
        document.querySelector(elementId).addEventListener(event, (e) => {
            const { value } = e.target;
            values[key] = key === 'selectOp' ? value : Number(value);
            validateInput();
        });
    };

    handleInput('#baseNumber', 'input', 'baseInput');
    handleInput('#arithmetic', 'change', 'selectOp');
    handleInput('#maximumNumber', 'input', 'maxInput');

    const element = (el) => document.querySelector(el);
    const showElement = (el, displayValue) => element(el).style.display = displayValue;
    const showSetText = (el, textValue) => element(el).textContent = textValue;
    const resetContent = (el) => element(el).innerHTML = '';
    const setInvalid = (el) => {
        element(el).className = 'invalid';
        setTimeout(() => element(el).className = '', 2000);
    };

    function validateInput() {
        const { baseInput, maxInput } = values;

        if(!baseInput && !maxInput) {
            setInvalid('#baseNumber');
            setInvalid('#maximumNumber');
            showElement('#content', 'block');
            showSetText('#content', `- no enter value, please try again! -`);
            return;
        }

        if(baseInput && !maxInput) {
            disableSelectOperator(true);
            showElement('#btn', 'none');
            setInvalid('#maximumNumber');
            showElement('#content', 'block');
            showSetText('#content', `- please enter value in (maximum) number! -`);
            return;
        }

        if(!baseInput && maxInput) {
            disableSelectOperator(true);
            showElement('#btn', 'none');
            setInvalid('#baseNumber');
            showElement('#content', 'block');
            showSetText('#content', `- please enter value in (base) number! -`);
            return;
        }

        disableSelectOperator(false);
        showElement('#btn', 'block');
        showSetText('#content', `- Table of (${baseInput}) to (${maxInput}) -`);
    }

    function disableSelectOperator(value) {
        element('#arithmetic').disabled = value;
    }

    element('#btn').addEventListener('click', generateTable);
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') generateTable();
    });

    function generateTable() {
        const { baseInput, selectOp, maxInput } = values;

        if(!baseInput && !maxInput) {
            setInvalid('#baseNumber');
            setInvalid('#maximumNumber');
            showElement('#content', 'block');
            showSetText('#content', `- no enter value, please try again! -`);
            return;
        }

        if(baseInput && !maxInput) {
            disableSelectOperator(true);
            showElement('#btn', 'none');
            setInvalid('#maximumNumber');
            showElement('#content', 'block');
            showSetText('#content', `- please enter value in (maximum) number! -`);
            return;
        }

        if(!baseInput && maxInput) {
            disableSelectOperator(true);
            showElement('#btn', 'none');
            setInvalid('#baseNumber');
            showElement('#content', 'block');
            showSetText('#content', `- please enter value in (base) number! -`);
            return;
        }

        showElement('.spinner', 'block');
        resetContent('.child-table');
        clearInput();


        const worker = new Worker('./worker.js');

        worker.postMessage({
            base: baseInput,
            op: selectOp,
            max: maxInput
        });

        worker.onmessage = (e) => {
            const fragment = document.createDocumentFragment();

            for (let i = 0, len = e.data.length; i < len; i++) {
                const p = document.createElement('p');
                p.textContent = e.data[i];
                fragment.appendChild(p);
            }
            
            element('.child-table').appendChild(fragment);  
            showElement('.spinner', 'none');
            worker.terminate(); // cleanup
        };
        
        worker.onerror = (e) => {
            console.error('Worker error:', e.message);
            showSetText('#content', '- Error occurred while generating table -');
            showElement('.spinner', 'none');
            worker.terminate();
        };
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