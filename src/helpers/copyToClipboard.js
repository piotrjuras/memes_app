export const copyToClipboard = (text) => {
    const dummy = document.createElement("textarea");
    document.querySelector('#root').prepend(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.querySelector('#root').removeChild(dummy);
}