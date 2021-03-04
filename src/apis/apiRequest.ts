
export const get = async (url : string, options = {}) => {
    try{
        let response = await fetch(url, options);
        if( response.status !== 200){
            throw new Error('Error - Status code:' + response.status);
        }
        return await response.json();
    }
    catch (error) {
        console.log(error);
        throw new Error("Error - Fetch failed");
    }
}