import React, { useState } from 'react';

function ColorPicker() {
    const [selectedColor, setSelectedColor] = useState('#ffffff');

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    return (
        <div>
            <h2>Selected Color: {selectedColor}</h2>
            <input
                type="color"
                value={selectedColor}
                onChange={handleColorChange}
            />
            <div
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: selectedColor,
                    marginTop: '20px',
                }}
            ></div>
        </div>
    );
}

export default ColorPicker;
