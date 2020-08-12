const extendClick = () => {
    return `
      position: relative;
      &:before{
        content: '';
        position: absolute;
        top: -10px; bottom: -10px; left: -10px; right: -10px;
      };
    `;
  };
  
  const noWrap = () => {
    return `
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `;
  };
  
  const bgFull = () => {
    return `
      background-position: 50%;
      background-size: contain;
      background-repeat: no-repeat;
    `
  };
  
  export default {
    "theme-color": "#98a3b1",
    "theme-color-v2": "#606975",
    "theme-color-shadow": "rgba(212, 68, 57, .5)",
    "font-color-v1":"#666",
    "font-color-v2":"#555",
    "font-color-v3":"#ccc",
    "font-color-light": "#dd1a21",
    "font-color-light-shadow": "rgba(241, 241, 241, 0.6)",//略淡
    "font-color-desc": "#2E3030",
    "font-color-desc-v2": "#bba8a8", //略淡
    "font-size-ss": "14px",
    "font-size-s": "17px",
    "font-size-m": "20px",
    "font-size-mm": "24px",
    "font-size-l": "32px",
    "font-size-ll": "32px",
    "border-color": "#e4e4e4",
    "border-color-v2": "rgba(228, 228, 228, 0.1)",
    "background-color": "#efefef",
    "background-color-v2": "#ededed",
    "background-color-v3": "#fff",
    "background-color-shadow": "rgba(0, 0, 0, 0.3)",
    "official-red": "#E82001",
    extendClick,
    noWrap,
    bgFull
  };