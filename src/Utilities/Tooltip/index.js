import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

 import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap; // Expose bootstrap globally

const Tooltip = (props) => {
    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        const tooltipList = [...tooltipTriggerList].map(
            tooltipTriggerEl => new window.bootstrap.Tooltip(tooltipTriggerEl)
        );
        // Cleanup tooltips on unmount
        return () => {
            tooltipList.forEach(tooltip => tooltip.dispose());
        };
    }, []);
    return(
        <div data-bs-toggle="tooltip" 
            data-bs-placement="top"
            data-bs-custom-class="custom-tooltip"
            data-bs-title={props.tooltipTitle}
            className={props.className}
            style={{textAlign: 'center'}}>
        {props.children}
        </div>
    );
}
export default Tooltip