const myColor = () => {
        const color = document.getElementById('color').value;
        document.body.style.backgroundColor = color;
        document.getElementById("box").value = color;
    }

    const Copy = () => {
        const copyText = document.getElementById("box");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value)
    }
    

document.getElementById('color').addEventListener('input', myColor);
