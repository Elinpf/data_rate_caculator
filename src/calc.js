const data_bit = document.getElementById('data_bit');
data_bit.addEventListener('input', function () {
    var bit = data_bit.value;
    bit_to_other(bit, 'bit');
});

const data_byte = document.getElementById('data_byte');
data_byte.addEventListener('input', function () {
    var byte = data_byte.value;
    var bit = byte * 8;
    bit_to_other(bit, 'byte');
});

const data_kilobit = document.getElementById('data_kilobit');
data_kilobit.addEventListener('input', function () {
    var kilobit = data_kilobit.value;
    var bit = kilobit * 1024;
    bit_to_other(bit, 'kilobit');
});

const data_kilobyte = document.getElementById('data_kilobyte');
data_kilobyte.addEventListener('input', function () {
    var bit = data_kilobyte.value * 8 * 1024;
    bit_to_other(bit, 'kilobyte');
});

const data_megabit = document.getElementById('data_megabit');
data_megabit.addEventListener('input', function () {
    var bit = data_megabit.value * 1024 * 1024;
    bit_to_other(bit, 'megabit');
});

const data_megabyte = document.getElementById('data_megabyte');
data_megabyte.addEventListener('input', function () {
    var bit = data_megabyte.value * 8 * 1024 * 1024;
    bit_to_other(bit, 'megabyte');
});

const data_gigabit = document.getElementById('data_gigabit');
data_gigabit.addEventListener('input', function () {
    var bit = data_gigabit.value * 1024 * 1024 * 1024;
    bit_to_other(bit, 'gigabit');
});

const data_gigabyte = document.getElementById('data_gigabyte');
data_gigabyte.addEventListener('input', function () {
    var bit = data_gigabyte.value * 8 * 1024 * 1024 * 1024;
    bit_to_other(bit, 'gigabyte');
});

function bit_to_other(bit, type) {
    var kilobit = bit / 1024;
    var megabit = kilobit / 1024;
    var byte = (kilobit / 8) * 1024;
    var kilobyte = kilobit / 8;
    var megabyte = kilobyte / 1024;
    var gigabit = megabit / 1024;
    var gigabyte = megabyte / 1024;
    if (type != 'bit') {
        document.getElementById('data_bit').value = bit;
    }

    if (type != 'kilobit') {
        document.getElementById('data_kilobit').value = kilobit;
    }
    if (type != 'megabit') {
        document.getElementById('data_megabit').value = megabit;
    }
    if (type != 'byte') {

        document.getElementById('data_byte').value = byte;
    }
    if (type != 'kilobyte') {
        document.getElementById('data_kilobyte').value = kilobyte;
    }
    if (type != 'megabyte') {
        document.getElementById('data_megabyte').value = megabyte;
    }
    if (type != 'gigabit') {
        document.getElementById('data_gigabit').value = gigabit;
    }
    if (type != 'gigabyte') {
        document.getElementById('data_gigabyte').value = gigabyte;
    }
}

