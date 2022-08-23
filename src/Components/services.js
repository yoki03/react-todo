
//export const getTodos = () => {
//    return JSON.parse(localStorage.getItem("localTasks"));
//};

export class Services {
    getTodos(){
        return JSON.parse(localStorage.getItem("localTasks"));
    }
}