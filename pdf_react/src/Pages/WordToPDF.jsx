import React, {useState, useEffect} from "react";

const WordToPDF = () =>{

const handleClick = () => {
}
return(
        <div className="">
            <p>Convert Word to PDF</p>
            <div className="form-control">
                <input className="form-input" type="file" name="wordFile" id="wordFile" />
            </div>
            <div className="form-control">
                <button className="form-input" onClick="handleClick()">Convert to PDF</button>
            </div>
            <div className="">
            </div>
        </div>
    )
}
export default WordToPDF;