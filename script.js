// (() => {
//     // storing inputNumber and select operators
//     const values = {
//         baseInput: 0,
//         selectOp: '+',
//         maxInput: 0,
//     };

//     // get input and select opeartor value
//     const handleInput = (elementId, event, key) => {
//         document.querySelector(elementId).addEventListener(event, (e) => {
//             // get element value once action trigger
//             const { value } = e.target;

//             // store to object if argument match in the key of obj 
//             values[key] = key === 'selectOp' ? value : Number(value);
//             // console.log(`${typeof values['base']} ${values['op']} ${typeof values['max']}`)
//             validateInput();
//         });
//     };

//     // start getting input user once action trigger
//     handleInput('#baseNumber', 'input', 'baseInput');
//     handleInput('#arithmetic', 'change', 'selectOp');
//     handleInput('#maximumNumber', 'input', 'maxInput');


//     /* Elements helper */
//     // for all element
//     const element = (el) => document.querySelector(el);
//     const showElement = (el, displayValue) => element(el).style.display = displayValue;
//     const showSetText = (el, textValue) => element(el).textContent = textValue;
//     const resetContent = (el) => element(el).innerHTML = '';
//     const setInvalid = (el) => {
//         element(el).className = 'invalid';

//         setTimeout(() => element(el).className = '', 2000);
//     };

//     // to validate number to display or not
//     function validateInput() {
//         // obj values
//         const { baseInput, maxInput } = values;

//         // if no enter value
//         if(!baseInput && !maxInput) {
//             setInvalid('#baseNumber');
//             setInvalid('#maximumNumber');
//             showElement('#content', 'block');
//             showSetText('#content', `- no enter value, please try again! -`);
//             return;
//         }

//         // if no enter value in max
//         if(baseInput && !maxInput) {
//             disableSelectOperator(true);
//             showElement('#btn', 'none');
//             setInvalid('#maximumNumber');
//             showElement('#content', 'block');
//             showSetText('#content', `- please enter value in (maximum) number! -`);
//             return;
//         }

//         // if no enter value in base
//         if(!baseInput && maxInput) {
//             disableSelectOperator(true);
//             showElement('#btn', 'none');
//             setInvalid('#baseNumber');
//             showElement('#content', 'block');
//             showSetText('#content', `- please enter value in (base) number! -`);
//             return;
//         }

//         // if valid just display
//         disableSelectOperator(false);
//         showElement('#btn', 'block');
//         showSetText('#content', `- Table of (${baseInput}) to (${maxInput}) -`);
//     };

//     function disableSelectOperator(value) {
//         element('#arithmetic').disabled = value;
//     }
//     /* for click and Enter User */
//     element('#btn').addEventListener('click', generateTable);
//     document.addEventListener('keydown', (e) => {

//         if(e.key === 'Enter') generateTable();
//     });

//     async function generateTable() {
//         const { baseInput, selectOp, maxInput } = values;


//         // if no enter value
//         if(!baseInput && !maxInput) {
//             setInvalid('#baseNumber');
//             setInvalid('#maximumNumber');
//             showElement('#content', 'block');
//             showSetText('#content', `- no enter value, please try again! -`);
//             return;
//         }

//         // if no enter value in max
//         if(baseInput && !maxInput) {
//             disableSelectOperator(true);
//             showElement('#btn', 'none');
//             setInvalid('#maximumNumber');
//             showElement('#content', 'block');
//             showSetText('#content', `- please enter value in (maximum) number! -`);
//             return;
//         }

//         // if no enter value in base
//         if(!baseInput && maxInput) {
//             disableSelectOperator(true);
//             showElement('#btn', 'none');
//             setInvalid('#baseNumber');
//             showElement('#content', 'block');
//             showSetText('#content', `- please enter value in (base) number! -`);
//             return;
//         }

//         // show spinner loading if valid
//         showElement('.spinner', 'block');
//         // reset first before insert
//         resetContent('.child-table');
//         // clear input when done generate table
//         clearInput();

//         const fragment = document.createDocumentFragment();

//         for (let i = 0; i < maxInput; i++) {
//             // loading effect
//             await delay(0);

//             const p = document.createElement('p');
//             p.textContent = createTableRow(baseInput, selectOp, i); 
//             fragment.appendChild(p);
//         };

//         showElement('.spinner', 'none');
//         element('.child-table').appendChild(fragment);

//     };

//     function createTableRow(baseInput, selectOp, i) {
//         const symbol = selectOp === '*' ? 'x' : selectOp;
//         // inital value
//         let result = 0;

//         // if user select divide to prevent infinity
//         if(selectOp === '/') {
//             result = i === 0 ? '(Cannot divide by zero)' : (baseInput / i).toFixed(2);
//         } else {
//             result = eval(`${baseInput} ${selectOp} ${i}`);
//         }

//         return `${baseInput} ${symbol} ${i} = ${result}`;
//     }

//     function delay(ms) {
//         return new Promise(resolve => setTimeout(resolve, ms));
//     }

//     function clearInput() {
//         element('#baseNumber').value = '';
//         element('#maximumNumber').value = '';
//         values['baseInput'] = 0;
//         values['maxInput'] = 0;
//         disableSelectOperator(true);
//         showElement('#btn', 'none');
//     }

//     disableSelectOperator(true);
//     showElement('#content', 'block');
//     showSetText('#content', '- table will appear here -');
// })(); 


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

        chunkRender({
            count: maxInput,
            createFn: (i) => createTableRow(baseInput, selectOp, i),
            onDone: () => showElement('.spinner', 'none')
        });
    }

    function chunkRender({ count, chunkSize = 50, createFn, onDone }) {
        // console.log(count); // max
        let i = 0; // 
        const fragment = document.createDocumentFragment();

        /* 
        assume ko ang max inpput ko ay 103
        (i is 0 + 50, maxInput or count 103)
        so ay i is zero pa
        then condition tayo kung ang i na zero ay is mababa sa 50 na default na kada batch na 50
        edi incremnet tayo ng 50 batch ngayon update ng min
        (i is 50 + 50, maxInput or count 103) ngayon 100 na 
        then codition kung ang i na 50 ay mababa ba sa end so ang min natin na mababa ay 100 so
        codition ang 50 < 100 so yes increment ulit si i so 100 na
        then update min (i is 100 + 50, maxInput or count 103) 150 so ang min o mababa dito ay 103
        ngayon condition sya kung i ba na 100 ay mas mababa ba sa end na 150 so hindi diba?? so dito na papasok si min na 103 para gawing codtion so ang 100 ba ay mababa sa 103 yes 
        */

        function processChunk() {
            // default 50       
            // count 100 base on max input
            const end = Math.min(i + chunkSize, count);
            for (; i < end; i++) {
                // console.log(i); // max of by count increment
                // console.log(count)
                const p = document.createElement('p');
                p.textContent = createFn(i);
                // console.log(p);
                fragment.appendChild(p);
            }

            if (i < count) {
                requestAnimationFrame(processChunk);
            } else {
                element('.child-table').appendChild(fragment);
                if (onDone) onDone();
            }
        }

        requestAnimationFrame(processChunk);
    }

    function createTableRow(baseInput, selectOp, i) {
        const symbol = selectOp === '*' ? 'x' : selectOp;
        let result = 0;

        if(selectOp === '/') {
            result = i === 0 ? '(Cannot divide by zero)' : (baseInput / i).toFixed(2);
        } else {
            result = eval(`${baseInput} ${selectOp} ${i}`);
        }

        return `${baseInput} ${symbol} ${i} = ${result}`;
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