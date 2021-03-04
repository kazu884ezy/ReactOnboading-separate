import fetchMock from "jest-fetch-mock";
import {get} from "../apiRequest";

fetchMock.enableMocks();

describe('apiRequestTest', () => {
    test('should call with correct parameters', () => {
        jest.spyOn(global, 'fetch').mockImplementation(
            () =>
                new Promise(resolve => {
                    resolve({
                        status: 200,
                        json: () =>
                            new Promise(resolve =>
                                resolve({
                                    body: 'Test'
                                })
                            )
                    })
                })
        )

        let url = 'http://abc.com';
        get(url);
        expect(global.fetch).toHaveBeenCalledWith(url, {});
    });

    test('should handle error when status is not 200', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(
            () =>
                new Promise(resolve => {
                    resolve({
                        status: 400,
                        json: () =>
                            new Promise(resolve =>
                                resolve({
                                    body: 'Test'
                                })
                            )
                    })
                })
        )

        let url = 'http://abc.com';
        await expect(get(url)).rejects.toThrow();
    });

    afterEach(() => {
        global.fetch.mockClear()
    })
})






// test('should create an action to set loading', () => {
//     let url = 'abc';
//     fetch.mockReject(new Error('fake error message'));
//     expect(()=>get(url)).toThrowError("Error - Fetch failed");
// });