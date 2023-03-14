function copyToClipboard(text) {
  const textToCopy = text.toString();
  navigator.clipboard.writeText(textToCopy);
}


function reducirVoltage(voltageIn, voltageOut){
  let lp = Math.pow((voltageIn / voltageOut),2);
  return lp;
}
function elevarVoltage(voltageIn, voltageOut){
  let lp = Math.pow((voltageOut / voltageIn),2);
  return lp;
}
export {
  reducirVoltage,
  elevarVoltage,
  copyToClipboard
};