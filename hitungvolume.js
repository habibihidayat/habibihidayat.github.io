function hitungVolume() {
    const inputSisiElement = document.getElementById("inputSisi"); // Ganti "inputVariable" dengan "inputSisi"
    const hasilPerhitunganElement = document.getElementById("hasilPerhitungan");

    const sisi = parseFloat(inputSisiElement.value);

    if (isNaN(sisi) || sisi <= 0) {
        hasilPerhitunganElement.innerText = "Masukkan panjang sisi yang valid (bilangan positif).";
    } else {
        const volume = sisi * sisi * sisi;
        hasilPerhitunganElement.innerText = `Volume kubus dengan sisi ${sisi} adalah ${volume}`;
    }
}
