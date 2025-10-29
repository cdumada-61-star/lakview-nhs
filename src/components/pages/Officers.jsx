import React, {useState} from 'react';

import TableHeaders from '../../models/table-header-data.js'

function Officers(props){

    const [officerData, setOfficerData] = useState(props.officerData);


    const deleteYear = (id) =>{
        alert(id);
        console.log(id)

        const updatedYears = officerData.filter(year => year.id !== id);

         setOfficerData(updatedYears);
        
}

   

    return (
        <div>

            <h1>These are the past and current officer teams!</h1>
            <br/>
            <br/>

            <table className="table table-striped">
                <thead>
                    <tr>
                        {TableHeaders.map((curHeading, id) =>(
                            <th key={id}>{curHeading}</th>
                        ))}
                    </tr>
                </thead>
                {officerData.map((curYear) =>(
                    <tr key={curYear.id}>
                        <td>{curYear.id}</td>
                        <td>{curYear.president}</td>
                        <td>{curYear.vicePresident}</td>
                        <td>{curYear.secretary}</td>
                        <td>{curYear.treasurer}</td>
                        <td>{curYear.parliamentarian}</td>
                        <td>{curYear.historian}</td>

                        <td>
                            <a type="button" className="btn btn-danger btn-sm" onClick={() => deleteYear(curYear.id)}>Delete</a>
                        </td>

                    </tr>
                ))}


            </table>
        </div>
    );
}


export default Officers;