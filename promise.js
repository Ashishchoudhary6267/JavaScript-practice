// const getuserdata = new Promise((resolve, reject) => {
//     console.log("start fetching data");
//     setTimeout(() => {
//         const serverup = false; // Simulating server status
//         if(serverup) {
//             resolve("data fetched successfully");
//         }  else {
//             reject("server is down");
//         }
//     }, 3000);
// })
// console.log("before calling then");
// getuserdata.then((data) => {
//     console.log(data);
// }).catch ((error) => {
//     console.error(error);
// })

// create a promise using the async function with add thre second delay

const fetchData = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulating success or failure
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 3000);
    });
};
async function logData() {
            try {
                const data = await fetchData();
                console.log(data);
            } catch (error) {
                console.error(error);
            }
}
logData();


 //a promise to return user data after 2 second delay using array in the user data and handle the promise using async await
const getUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = [
                { id: 1, name: "ashish 1" },
                { id: 2, name: "savan 2" },
                { id: 3, name: "satyam 3" },
            ];
            resolve(userData);
        }, 2000);
    })
}
async function logUserData() {
    try {
        const userData = await getUserData();
        console.log(userData);
    } catch (error) {
        console.error(error)
    }
}
logUserData();


//a promise to return user data after 2 second delay using array in the user data and handle the promise using async await with manual server status
const getUserDataWithStatus = () => {
    return new Promise((resolve, reject) => {    
        setTimeout(() => {
            const serverUp = true; // Simulating server status
            if (serverUp) {
                const userData = [
                    { id: 1, name: "ashish 1" },
                    { id: 2, name: "savan 2" },
                    { id: 3, name: "satyam 3" },
                ];
                resolve(userData);
            } else {
                reject("Server is down. Unable to fetch user data.");
            }
        }, 2000);
    })
}
async function logUserDataWithStatus() {
    try {
        const userData = await getUserDataWithStatus();
        console.log(userData);
    } catch (error) {
        console.error(error);
    }   
}
logUserDataWithStatus();