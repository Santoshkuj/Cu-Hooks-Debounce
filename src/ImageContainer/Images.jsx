import useUserDetails from "../Hooks/useUserDetails"
import './Images.css'

export default function Photos({name}) {
    const [details] = useUserDetails(`https://api.github.com/search/users?q=${name}`)

    return(
        <div className="image-wrapper">{details.isLoading ? 'plaese Wait...':
            details.userDetails && details.userDetails.map((d)=>
                <div key={d.avatar_url} className="userDetail">
                 <img src={d.avatar_url} alt={d.id} className="photo"/>
                <p className="name">{d.login}</p></div>)}
        </div>
    )
}