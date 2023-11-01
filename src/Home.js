import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPage, deletePage } from "./redux/actions/pageAction";
import { useSelector, useDispatch } from "react-redux";
import {API_HOST} from "./api_utils";

const Home = () => {
    const [name, setName] = useState("");
    const [isValid, setIsValid] = useState(true);
    const dispatch = useDispatch();

    const { pageStore } = useSelector((state) => state);
    const { pages } = pageStore;

    const handleSubmit = async () => {
      if (!name) {
        setIsValid(false);
        return;
      }
      createPage(name)(dispatch);      
    };

    const clearName = async () => {
      setName("")    ;
    };
    
    return (
        <div className='container'>
		<div align='center'><h3>Web Splash Weaver</h3></div>
      <div className='row'>
        <div className='col-12 mt-5'>
          <form id='create-page'>
            <div className='modal-header'>
              <h5 className='modal-title' id='addPageModalLabel'>Create Web Page</h5>
            </div>
            <div className='modal-body'>
              <div className='col-auto'>
                <label htmlFor="name" className='form-label'>Name</label>
                <input
                  type='text'
                  className={`form-control form-control-sm ${
                    isValid ? "":"is-invalid"
                  }`}
                  id='name'
                  name='name'
                  placeholder='Name of Page'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {!isValid && (
                  <div className='invalid-feedback'>
                    Please provide a valid name.
                  </div>
                )}               
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary btn-sm'
                onClick={clearName}
              >
                Clear
              </button>
              <button type='button' className='btn btn-primary btn-sm' onClick={handleSubmit}>
                Save
              </button>
            </div>
          </form>
        </div>
        <div className='col-12 my-2'>          
          <table className='table table-bordered table-hover'>
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Slug</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
                {pages
                    ? pages.map((page) => (
                        <tr key={page._id}>
                          <td>{page._id}</td>
                          <td>{page.name}</td>
                          <td>{page.slug}</td>
                          <td>
                            <div className="m-3">
                              <button align="left" className="btn btn-sm btn-outline-primary">
                                <a  href={`${API_HOST}${page._id}`}>View</a>
                              </button>
                              &nbsp;
                              &nbsp;
                              <button align="center" className="btn btn-sm btn-outline-primary">
                                <Link  to={`/editor/${page._id}`}>Edit</Link>
                              </button>
                              &nbsp;
                              &nbsp;
                              <button align="right" className="btn btn-sm btn-outline-danger" onClick={()=> deletePage(page.name, page._id)(dispatch)}>
                                Delete
                              </button>
                            </div>                              
                          </td>
                        </tr>
                    ))
                    : "No Page"}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )
};

export default Home;