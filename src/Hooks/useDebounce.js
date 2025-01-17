export default function useDebounce(cb,delay =2000) {
    let timerId;
    return (...args) =>{
        clearTimeout(timerId)
        setTimeout(() => {
            cb(...args)
        }, delay);
    }
}