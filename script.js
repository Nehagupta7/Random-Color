const button = document.querySelector("#btn");
const colorCode = document.querySelector("#color-Code");
const dropDownList = document.querySelector("#drop-down-option");
let red, green, blue;
//rgb color genrate
const RGBColorConvertor = () => {
  red = Math.floor(Math.random() * 255);
  green = Math.floor(Math.random() * 255);
  blue = Math.floor(Math.random() * 255);
  return `rgb(${red} ${green} ${blue})`;
};

//rgb color to hexa
const RGBToHex = () => {
  let r, g, b;
  r = red.toString(16);
  g = green.toString(16);
  b = blue.toString(16);
  if (r.lenghth == 1) r = "0" + r;
  if (g.lenghth == 1) g = "0" + g;
  if (b.lenghth == 1) b = "0" + b;
  const hexString = `#${r}${g}${b}`;
  return hexString;
};

//rgb to hsl
const RGBToHSL = () => {
  let r = red / 255;
  let g = green / 255;
  let b = blue / 255;
  let cmin = Math.min(r, g, b);
  let cmax = Math.max(r, g, b);
  let delta = cmax - cmin;
  let h = (s = l = 0);
  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmin == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;
  h = Math.round(h * 60);
  if (h < 0) h += 360;
  l = (cmax - cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);
  const hslString = `hal(${h},${s}%,${l}%)`;

  return hslString;
};

//button event
button.addEventListener("click", () => {
  RGBColorConvertor();
  const rgbstring = `rgb(${red} ${green} ${blue})`;
  document.body.style.backgroundColor = rgbstring;
  colorCode.innerHTML = rgbstring;
});
//change color event on select
dropDownList.addEventListener("change", (e) => {
  const selectData = e.target.value;
  console.log(selectData);
  let r, g, b;
  switch (selectData) {
    case "HEXA":
      let rgbstring = RGBToHex();
      colorCode.innerHTML = rgbstring;
      break;
    case "HSL":
      let hslString = RGBToHSL();
      colorCode.innerHTML = hslString;
      break;
    case "RGB":
      const rgbString = `rgb(${red} ${green} ${blue})`;
      colorCode.innerHTML = rgbString;
      break;
  }
});
