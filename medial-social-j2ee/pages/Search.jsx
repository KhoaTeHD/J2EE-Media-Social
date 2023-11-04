
import HomeContent from "./components/HomeContent.jsx"
var status = 'hide';
export default function Search(props){
    return(
        <>
            <div className="search_area">
                <h1>Search</h1>
                <input type="text" name="searchIO"/>
                <hr />
                <div className="user">
                    <img src="" alt="" />
                    <p className="name">Nguyen Dang Khoa</p>
                    <p className="desc">rat thich choi gem</p>
                </div>
                <div className="user">
                    <img src="" alt="" />
                    <p className="name">Nguyen Dang Khoa</p>
                    <p className="desc">rat thich choi gem</p>
                </div>
                <div className="user">
                    <img src="" alt="" />
                    <p className="name">Nguyen Dang Khoa</p>
                    <p className="desc">rat thich choi gem</p>
                </div>
                <div className="user">
                    <img src="" alt="" />
                    <p className="name">Nguyen Dang Khoa</p>
                    <p className="desc">rat thich choi gem</p>
                </div>
            </div>
        </>
    )
}