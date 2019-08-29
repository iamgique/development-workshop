const calculate = require('../../app/apis/calculate');

const request = [
    { a: 1, b: 1 },
    { a: 4, b: 9 },
    { a: 20, b: 30 },
    { a: 1000000000000, b: 16 },
    { a: -1, b: 32 },
    { a: -1.345, b: 32.675 },
]

test('test add 1 + 1, 4 + 9, 20 + 30, 1,000,000,000,000 + 16, -1 + 32, -1.345 + 32.675', async () => {
    let send = jest.fn()
    for(let i = 0; i <= request.length; i++){
        calculate.add(request[i], { send } )
    }
    
    await expect(send.mock.calls[0][0]).toBe(2);
    await expect(console.log.mock.calls[0][0]).toEqual(request[0].a + '+' + request[0].b + '=2');
    await expect(send.mock.calls[1][0]).toBe(13);
    await expect(console.log.mock.calls[1][0]).toEqual(request[1].a + '+' + request[1].b + '=13');
    await expect(send.mock.calls[2][0]).toBe(50);
    await expect(console.log.mock.calls[2][0]).toEqual(request[2].a + '+' + request[2].b + '=50');
    await expect(send.mock.calls[3][0]).toBe(1000000000016);
    await expect(console.log.mock.calls[3][0]).toEqual(request[3].a + '+' + request[3].b + '=1000000000016');
    await expect(send.mock.calls[4][0]).toBe(31);
    await expect(console.log.mock.calls[4][0]).toEqual(request[4].a + '+' + request[4].b + '=31');
    await expect(send.mock.calls[5][0]).toBe(31.33);
    await expect(console.log.mock.calls[5][0]).toEqual(request[5].a + '+' + request[5].b + '=31.33');
});

test('test minus 1 - 1, 4 - 9, 20 - 30, 1,000,000,000,000 - 16, -1 - 32, -1.345 - 32.675', async () => {
    let send = jest.fn()
    for(let i = 0; i <= request.length; i++){
        calculate.minus(request[i], { send } )
    }
    await expect(send.mock.calls[0][0]).toBe("0.00");
    await expect(send.mock.calls[1][0]).toBe("-5.00");
    await expect(send.mock.calls[2][0]).toBe("-10.00");
    await expect(send.mock.calls[3][0]).toBe("999999999984.00");
    await expect(send.mock.calls[4][0]).toBe("-33.00");
    await expect(send.mock.calls[5][0]).toBe("-34.02");
});

test('test multiply 1 * 1, 4 * 9, 20 * 30, 1,000,000,000,000 * 16, 20 * 30, -1 * 32, -1.345 * 32.675', async () => {
    let send = jest.fn()
    for(let i = 0; i <= request.length; i++){
        calculate.multiply(request[i], { send } )
    }
    await expect(send.mock.calls[0][0]).toBe("1.00");
    await expect(send.mock.calls[1][0]).toBe("36.00");
    await expect(send.mock.calls[2][0]).toBe("600.00");
    await expect(send.mock.calls[3][0]).toBe("16000000000000.00");
    await expect(send.mock.calls[4][0]).toBe("-32.00");
    await expect(send.mock.calls[5][0]).toBe("-43.95");
});

test('test divide 1 / 1, 4 / 9, 20 / 30, 1,000,000,000,000 / 16, 20 / 30, -1 / 32, -1.345 / 32.675', async () => {
    let send = jest.fn()
    for(let i = 0; i <= request.length; i++){
        calculate.divide(request[i], { send } )
    }
    await expect(send.mock.calls[0][0]).toBe("1.00");
    await expect(send.mock.calls[1][0]).toBe("0.44");
    await expect(send.mock.calls[2][0]).toBe("0.67");
    await expect(send.mock.calls[3][0]).toBe("62500000000.00");
    await expect(send.mock.calls[4][0]).toBe("-0.03");
    await expect(send.mock.calls[5][0]).toBe("-0.04");
});

beforeEach(() => {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    console.log.mockRestore();
});