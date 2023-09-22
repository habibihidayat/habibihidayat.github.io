function hitungVolume() {
    const inputSisiElement = document.getElementById("inputSisi");
    const hasilPerhitunganElement = document.getElementById("hasilPerhitungan");

    const sisi = parseFloat(inputSisiElement.value);

    if (isNaN(sisi) || sisi <= 0) {
        hasilPerhitunganElement.innerText = "Masukkan panjang sisi yang valid";
    } else {
        const volume = sisi * sisi * sisi;
        hasilPerhitunganElement.innerText = `Volume kubus dengan sisi ${sisi} adalah ${volume}`;
    }
}
