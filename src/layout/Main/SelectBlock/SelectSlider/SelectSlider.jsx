import { useRef, useEffect, useState } from 'react';

import './SelectSlider.style.css';

export const SelectSlider = () => {
  const rangeInputsRef = useRef([]);
  const progressBarRef = useRef(null);
  const [minPrice, setMinPrice] = useState(3.2);  // Начальная цена
  const [maxPrice, setMaxPrice] = useState(121.4); // Начальная цена

  const priceGap = 1; // Минимальный разрыв между значениями в млн. руб.

  useEffect(() => {
    const rangeInputs = rangeInputsRef.current;
    const progressBar = progressBarRef.current;

    // Функция для обновления прогрессбара и цен
    const updateSlider = (minVal, maxVal) => {
      // Пересчитываем цены и обновляем span
      const calculatedMinPrice = (minVal / 100) * (121.4 - 3.2) + 3.2;
      const calculatedMaxPrice = (maxVal / 100) * (121.4 - 3.2) + 3.2;

      setMinPrice(calculatedMinPrice.toFixed(1)); // Обновляем отображаемую минимальную цену
      setMaxPrice(calculatedMaxPrice.toFixed(1)); // Обновляем отображаемую максимальную цену

      // Обновляем прогрессбар
      progressBar.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
      progressBar.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";
    };

    // Устанавливаем начальные позиции ползунков и прогрессбара
    const initialMinVal = parseFloat(rangeInputs[0].value);
    const initialMaxVal = parseFloat(rangeInputs[1].value);
    updateSlider(initialMinVal, initialMaxVal);

    // Добавляем слушатели событий на изменение слайдеров
    const handleInput = (e) => {
      let minVal = parseFloat(rangeInputs[0].value);
      let maxVal = parseFloat(rangeInputs[1].value);

      // Обеспечиваем минимальный разрыв между значениями
      if ((maxVal - minVal) < priceGap) {
        if (e.target.classList.contains('range-input-slider__min')) {
          minVal = maxVal - priceGap;
          rangeInputs[0].value = minVal;
        } else {
          maxVal = minVal + priceGap;
          rangeInputs[1].value = maxVal;
        }
      }

      updateSlider(minVal, maxVal);
    };

    // Привязываем обработчики событий к ползункам
    rangeInputs.forEach(input => {
      input.addEventListener("input", handleInput);
    });

    return () => {
      // Очищаем слушатели при размонтировании компонента
      rangeInputs.forEach(input => {
        input.removeEventListener("input", handleInput);
      });
    };
  }, [priceGap]); // Обновляем useEffect, если изменится минимальный разрыв

  return (
    <div className="main__select-block__select-slider">
      <h1 className="main__select-block__select-slider__header">Цена, млн. руб</h1>
      <div className="select-slider-price">
        <span className="select-slider-price__min">от {minPrice}</span>
        <span className="select-slider-price__max">до {maxPrice}</span>
      </div>
      <div className="slider">
        <div ref={progressBarRef} className="progress"></div>
      </div>
      <div className="range-input-slider">
        <input ref={(el) => rangeInputsRef.current[0] = el} type="range" className='range-input-slider__min' defaultValue={0} min={0} max={100} step={1}/>
        <input ref={(el) => rangeInputsRef.current[1] = el} type="range" className='range-input-slider__max' defaultValue={100} min={0} max={100} step={1}/>
      </div>
    </div>
  );
}
