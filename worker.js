onmessage = function (e) {
    const { base, op, max } = e.data;
    const rows = [];

    for (let i = 0; i < max; i++) {
        const symbol = op === '*' ? 'x' : op;
        let result = 0;

        if (op === '/') {
        result = i === 0 ? '(Cannot divide by zero)' : (base / i).toFixed(2);
        } else {
        result = eval(`${base} ${op} ${i}`);
        }

        rows.push(`${base} ${symbol} ${i} = ${result}`);
    }

    postMessage(rows);
};