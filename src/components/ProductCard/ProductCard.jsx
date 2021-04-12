import React, { useState, useRef } from "react";
import { productData } from "./product-card-data";
import "./index.scss";

const ProductCard = () => {
  const [selectedColor, setSelectedColor] = useState(productData.defaultColor);
  const [selectedSize, setSelectedSize] = useState(null);
  const SizesDropdownRef = useRef(null);

  const expandSizeDropdown = () => {
    SizesDropdownRef.current.classList.contains("is-expanded") ||
      SizesDropdownRef.current.classList.add("is-expanded");
  };

  const collapseSizeDropdown = () => {
    SizesDropdownRef.current.classList.remove("is-expanded") 
  };

  const selectColor = (color) => {
    setSelectedColor(color);
  };

  const selectSize = (event, size) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    collapseSizeDropdown();
    setSelectedSize(size);
  };

  return (
    <div className="product-card">
      <div className="figure">
        <img
          src={`/images/${productData.colors[selectedColor].images[0]}.jpg`}
          alt="product"
        />
        <img
          src={`/images/${productData.colors[selectedColor].images[1]}.jpg`}
          className="img-top"
          alt="product"
        />
        <div className="overlay">
          <div className="quick-add">
            <div className="size-dropdown">
              <div
                className="box"
                onMouseEnter={expandSizeDropdown}
                onMouseLeave={collapseSizeDropdown}
              >
                <div className="sizes" ref={SizesDropdownRef}>
                  <div className="size-placeholder">
                    {selectedSize || "SIZE"}
                  </div>
                  <div className="sizes-box">
                    {Object.keys(productData.colors[selectedColor].sizes).map(
                      (size) => (
                        <div
                          className="size-item"
                          disabled={!productData.colors[selectedColor].sizes[size]}
                          key={size}
                          onClick={(event) => selectSize(event, size)}
                        >
                          {size}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-info">
        <div className="name">{productData.name}</div>
        <div className="price">{productData.price}&nbsp;EGP</div>
        <div className="color-set">
          {Object.keys(productData.colors).map((color, index) => {
            const currentColor = productData.colors[color];
            return (
              <div
                className={["color-item", selectedColor === color && "is-selected",].join(" ")}
                key={color}
                onClick={() => selectColor(color)}
              >
                <div
                  className="color-box"
                  style={{ backgroundColor: currentColor.colorCode }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
