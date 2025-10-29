import React from 'react';
import induction from '../../assets/induction.jpg';
import FMSC from '../../assets/FMSC.jpg';

function Events(){
    return (
         
            <div className="container mt-0 pt-0">
                <h2 className="text-center mt-0">At Your Service</h2>
                <hr className="divider"/>
                <h4 className="text-center mt-1">LakeView NHS's Events</h4>

                {/* add vertical gutters with gy-4, and ensure columns are flex containers */}
                <div className="row gx-4 gx-lg-5 gy-4">
                    <div className="col-lg-6 col-md-6 d-flex">
                        <div className="mt-5 event-card w-100 text-center">
                            <div className="mb-2"><i className="bi-globe fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2">Feed My Starving Children</h3>
                            <img src={FMSC} className="rounded img-fluid event-img" alt="Rights to LakeView Technology Academy" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 d-flex">
                        <div className="mt-5 event-card w-100 text-center">
                            <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2">Induction Ceremony</h3>
                            <img src={induction} className="rounded img-fluid event-img" alt="Rights to LakeView Technology Academy" />
                        </div>
                    </div>
                </div>
            </div>
      

    );
}

export default Events;

