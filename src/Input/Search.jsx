import useDebounce from '../Hooks/useDebounce';
import './Search.css'
function Input({inputText}) {
   const deBounceCb = useDebounce(e =>inputText(e.target.value))
    return(
        <div>
            <input type="text"
            placeholder="Enter GitHub UserName"
            className="input"
            onChange={deBounceCb}
            />
        </div>
    )
}
export default Input;