import React from 'react';
import profilePicture from "../../../static/assets/images/bio/headshot.jpg"; 

export default function() {
    return(
        <div className="content-page-wrapper">


            <div className="left-column" style={{
                background: "url(" + profilePicture +") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>

                

                

            </div>

            <div className="right-column">

                "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus in lacus viverra placerat. Maecenas convallis libero sit amet purus bibendum, ac suscipit odio bibendum. Suspendisse potenti. Phasellus quis lacus at nulla tempus convallis. Duis sed justo vel magna volutpat pharetra. In nec urna et justo feugiat suscipit. Integer non arcu non ligula auctor tincidunt. Sed at augue ac mi egestas luctus. Fusce vitae nisi id lacus vehicula faucibus. Donec ac felis sit amet est posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus in lacus viverra placerat. Maecenas convallis libero sit amet purus bibendum, ac suscipit odio bibendum. Suspendisse potenti. Phasellus quis lacus at nulla tempus convallis. Duis sed justo vel magna volutpat pharetra. In nec urna et justo feugiat suscipit. Integer non arcu non ligula auctor tincidunt. Sed at augue ac mi egestas luctus. Fusce vitae nisi id lacus vehicula faucibus. Donec ac felis sit amet est posuere blandit.</p>",
                
                
            </div>


        </div>
    )
}