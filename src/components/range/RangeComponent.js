import { React, useEffect, useState } from "react";

const RangeSimple = () => {
    const [rangePercent, setRangePercent] = useState(20);

    useEffect(() => {
        const slider = document.querySelector ("input");
        const value = document.querySelector (".value");

        value.textContent = slider.value;
    
        slider.oninput = () => {
            value.textContent = this.value;
        };
      
    }, [rangePercent])
    
    

    return (
        <div className="flex justify-between items-center">
            <div className="flex justify-center p-4">
                <input 
                    type="range"  
                    value={rangePercent} 
                    onChange={(e) => {setRangePercent(e.target.value);}}  
                    className="w-80 h-1.5" />
            </div>
            <div className="flex justify-center items-center value text-sm font-bold bg-white w-16 h-9 border-solid border-2 border-primary-border rounded-full">100</div>
        </div>
    );
};

export default RangeSimple;