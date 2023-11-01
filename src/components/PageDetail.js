import { deletePage } from "../redux/actions/pageAction";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function PageDetail({ page }) {

    const dispatch = useDispatch();
    let history = useHistory();

    const handleDeletePage = (name, pageId) => async (dispatch) => {
        deletePage(name, pageId)(dispatch);        
        history.push("/");
    };    

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">{page.name}
                   <div className="m-2">
                        <button className="btn btn-sm btn-outline-primary">
                            <Link  className="fa fa-pencil" to={`/editor/${page._id}`}/>
                        </button>
                        <button className="btn btn-sm btn-outline-danger" onClick={()=> handleDeletePage(page.name, page._id)(dispatch)}>
                            <i className="fa fa-trash"></i>
                        </button>
                   </div>
        </li>
    )
}

export default PageDetail;