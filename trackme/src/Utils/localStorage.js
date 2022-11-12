

export const getLocalData = (key) => {
    try {
        let data = localStorage.getItem(key);
        data = JSON.parse(data);
        return data;
    }
    catch (err) {
        return ("Error in getting the token" + " " + err)
    }
}

export const SaveTheToken = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    }
    catch (err) {
        console.log("Error in storing the token" + " " + err)
    }
}