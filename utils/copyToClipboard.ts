export const copyToClipboard = (event: any) => {
    const value = event.target.value;
    let textField = document.createElement('textarea');
    textField.innerText = value;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  }