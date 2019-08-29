const index = require('../../app/controller/index');

test('test index', () => {
    let send = jest.fn()
    index.index(null, { send } )

    expect(send.mock.calls[0][0]).toBe('Hello World!');
    expect(console.log.mock.calls[0][0]).toEqual('Hello World!');
});

beforeEach(() => {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    console.log.mockRestore();
});
  