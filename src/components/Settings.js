import React from 'react';
import { Link } from 'react-router-dom';

export default function Settings() {
    return (
        <div>
                 <div class="">

<div class="middle-sidebar-bottom" style={{paddingLeft: "20px"}}>
    <div class="middle-sidebar-left">
        
        <div class="row">
            <div class="col-12">
                
                <div class="card dash-card dash-card__records dash-card__posts p-5">
                    
                    <h3 class="card-title mb-3">SETTINGS</h3>
                    
                    <ul class="list-inline">
                        <li class="list-inline-item d-block border-bottom me-0"><Link to="/settings/link" class="pt-3 pb-3 d-flex align-items-center"><i class="btn-round-md bg-primary-gradiant text-white feather-link font-md me-3"></i> <h4 class="fw-600 font-xsss mb-0 mt-0">Change your link</h4><i class="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                        <li class="list-inline-item d-block border-bottom me-0"><Link to="/settings/user" class="pt-3 pb-3 d-flex align-items-center"><i class="btn-round-md bg-gold-gradiant text-white feather-info font-md me-3"></i> <h4 class="fw-600 font-xsss mb-0 mt-0">User Details</h4><i class="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                        <li class="list-inline-item d-block border-bottom me-0"><Link to="/settings/password" class="pt-3 pb-3 d-flex align-items-center"><i class="btn-round-md bg-red-gradiant text-white feather-lock font-md me-3"></i> <h4 class="fw-600 font-xsss mb-0 mt-0">Change Password</h4><i class="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                        <li class="list-inline-item d-block me-0"><Link to="/settings/account" class="pt-3 pb-3 d-flex align-items-center"><i class="btn-round-md bg-mini-gradiant text-white feather-credit-card font-md me-3"></i> <h4 class="fw-600 font-xsss mb-0 mt-0">Update Bank Account Details</h4><i class="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                    </ul>
                

                    


                </div>
            </div>
        </div>

        
    </div>

</div>
</div>
        </div>
    )
}
