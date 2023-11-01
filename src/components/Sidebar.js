import React from "react";

function Sidebar() {
    return (
        <>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
               <li className="nav-item" role="presentation">
                    <button
                    className=" nav-link active" 
                    id="block-tab"
                    type="button"
                    role="tab"
                    data-bs-toggle="tab"
                    data-bs-target="#block"
                    aria-selected="true"
                    aria-controls="block"
                    >
                    <i className="fa fa-cubes"></i>
                    </button>
               </li>
               <li className="nav-item" role="presentation">
                <button
                className=" nav-link" 
                id="layer-tab"
                type="button"
                role="tab"
                data-bs-toggle="tab"
                data-bs-target="#layer"
                aria-selected="true"
                aria-controls="layer"
                >
                <i className="fa fa-tasks"></i>
                </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                    className=" nav-link" 
                    id="style-tab"
                    type="button"
                    role="tab"
                    data-bs-toggle="tab"
                    data-bs-target="#style"
                    aria-selected="true"
                    aria-controls="style"
                    >
                    <i className="fa fa-paint-brush"></i>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                    className=" nav-link" 
                    id="trait-tab"
                    type="button"
                    role="tab"
                    data-bs-toggle="tab"
                    data-bs-target="#trait"
                    aria-selected="true"
                    aria-controls="trait"
                    >
                    <i className="fa fa-cog"></i>
                    </button>
                </li>
           </ul>
           <div className="tab-content">
                <div 
                    className="tab-pane fade show active"
                     id="block" 
                     role="tabpanel"
                     aria-labelledby="block-tab"
                     >
                     <div id="blocks"></div>
                </div>
                <div 
                    className="tab-pane fade"
                     id="layer" 
                     role="tabpanel"
                     aria-labelledby="layer-tab"
                     >
                     <div id="layers-container"></div>
                </div>
                <div 
                    className="tab-pane fade"
                     id="style" 
                     role="tabpanel"
                     aria-labelledby="block-tab"
                     >
                     <div id="styles-container"></div>
                </div>
                <div 
                    className="tab-pane fade"
                     id="trait" 
                     role="tabpanel"
                     aria-labelledby="trait-tab"
                     >
                     <div id="trait-container"></div>
                </div>
           </div>
        </>
    )
}

export default Sidebar;