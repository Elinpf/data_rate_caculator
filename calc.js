function Compute() {
    var y = "Z";
    if (document.frmBW.frmTxtbit.value != 0) {
        y = "bit";
    }
    if (document.frmBW.frmTxtkilobit.value != 0) {
        y = "kilobit";
    }
    if (document.frmBW.frmTxtmegabit.value != 0) {
        y = "megabit";
    }
    if (document.frmBW.frmTxtbyte.value != 0) {
        y = "Byte";
    }
    if (document.frmBW.frmTxtKilobyte.value != 0) {
        y = "KiloByte";
    }
    if (document.frmBW.frmTxtMegabyte.value != 0) {
        y = "MegaByte";
    }


    switch (y) {
        case "bit":
            document.frmBW.frmTxtkilobit.value = document.frmBW.frmTxtbit.value / 1024;
            document.frmBW.frmTxtmegabit.value = document.frmBW.frmTxtkilobit.value / 1024;
            document.frmBW.frmTxtbyte.value = (document.frmBW.frmTxtkilobit.value / 8) * 1024;
            document.frmBW.frmTxtKilobyte.value = document.frmBW.frmTxtkilobit.value / 8;
            document.frmBW.frmTxtMegabyte.value = document.frmBW.frmTxtKilobyte.value / 1024;
            break;
        case "kilobit":
            document.frmBW.frmTxtbit.value = document.frmBW.frmTxtkilobit.value * 1024;
            document.frmBW.frmTxtmegabit.value = document.frmBW.frmTxtkilobit.value / 1024;
            document.frmBW.frmTxtbyte.value = document.frmBW.frmTxtbit.value / 8;
            document.frmBW.frmTxtKilobyte.value = document.frmBW.frmTxtkilobit.value / 8;
            document.frmBW.frmTxtMegabyte.value = document.frmBW.frmTxtKilobyte.value / 1024;
            break;
        case "megabit":
            document.frmBW.frmTxtbit.value = document.frmBW.frmTxtmegabit.value * 1048576;
            document.frmBW.frmTxtkilobit.value = document.frmBW.frmTxtbit.value / 1024;
            document.frmBW.frmTxtbyte.value = document.frmBW.frmTxtbit.value / 8;
            document.frmBW.frmTxtKilobyte.value = document.frmBW.frmTxtkilobit.value / 8;
            document.frmBW.frmTxtMegabyte.value = document.frmBW.frmTxtKilobyte.value / 1024;
            break;
        case "Byte":
            document.frmBW.frmTxtbit.value = document.frmBW.frmTxtbyte.value * 8;
            document.frmBW.frmTxtkilobit.value = document.frmBW.frmTxtbit.value / 1024;
            document.frmBW.frmTxtmegabit.value = document.frmBW.frmTxtbit.value / 1048576;
            document.frmBW.frmTxtKilobyte.value = document.frmBW.frmTxtbyte.value / 1024;
            document.frmBW.frmTxtMegabyte.value = document.frmBW.frmTxtKilobyte.value / 1024;
            break;
        case "KiloByte":
            document.frmBW.frmTxtbyte.value = document.frmBW.frmTxtKilobyte.value * 1024;
            document.frmBW.frmTxtbit.value = document.frmBW.frmTxtbyte.value * 8;
            document.frmBW.frmTxtkilobit.value = document.frmBW.frmTxtbit.value / 1024;
            document.frmBW.frmTxtmegabit.value = document.frmBW.frmTxtbit.value / 1048576;
            document.frmBW.frmTxtMegabyte.value = document.frmBW.frmTxtKilobyte.value / 1024;
            break;
        case "MegaByte":
            document.frmBW.frmTxtbyte.value = document.frmBW.frmTxtMegabyte.value * 1048576;
            document.frmBW.frmTxtbit.value = document.frmBW.frmTxtbyte.value * 8;
            document.frmBW.frmTxtkilobit.value = document.frmBW.frmTxtbit.value / 1024;
            document.frmBW.frmTxtmegabit.value = document.frmBW.frmTxtkilobit.value / 1024;
            document.frmBW.frmTxtKilobyte.value = document.frmBW.frmTxtMegabyte.value * 1024;
            break;
    }
}
function Compute_speed() {
    var y = "Z";
    if (document.form_speed.frmTxtbit.value != 0) {
        y = "bit";
    }
    if (document.form_speed.frmTxtkilobit.value != 0) {
        y = "kilobit";
    }
    if (document.form_speed.frmTxtmegabit.value != 0) {
        y = "megabit";
    }
    if (document.form_speed.frmTxtbyte.value != 0) {
        y = "Byte";
    }
    if (document.form_speed.frmTxtKilobyte.value != 0) {
        y = "KiloByte";
    }
    if (document.form_speed.frmTxtMegabyte.value != 0) {
        y = "MegaByte";
    }


    switch (y) {
        case "bit":
            document.form_speed.frmTxtkilobit.value = document.form_speed.frmTxtbit.value / 1024;
            document.form_speed.frmTxtmegabit.value = document.form_speed.frmTxtkilobit.value / 1024;
            document.form_speed.frmTxtbyte.value = (document.form_speed.frmTxtkilobit.value / 8) * 1024;
            document.form_speed.frmTxtKilobyte.value = document.form_speed.frmTxtkilobit.value / 8;
            document.form_speed.frmTxtMegabyte.value = document.form_speed.frmTxtKilobyte.value / 1024;
            break;
        case "kilobit":
            document.form_speed.frmTxtbit.value = document.form_speed.frmTxtkilobit.value * 1024;
            document.form_speed.frmTxtmegabit.value = document.form_speed.frmTxtkilobit.value / 1024;
            document.form_speed.frmTxtbyte.value = document.form_speed.frmTxtbit.value / 8;
            document.form_speed.frmTxtKilobyte.value = document.form_speed.frmTxtkilobit.value / 8;
            document.form_speed.frmTxtMegabyte.value = document.form_speed.frmTxtKilobyte.value / 1024;
            break;
        case "megabit":
            document.form_speed.frmTxtbit.value = document.form_speed.frmTxtmegabit.value * 1048576;
            document.form_speed.frmTxtkilobit.value = document.form_speed.frmTxtbit.value / 1024;
            document.form_speed.frmTxtbyte.value = document.form_speed.frmTxtbit.value / 8;
            document.form_speed.frmTxtKilobyte.value = document.form_speed.frmTxtkilobit.value / 8;
            document.form_speed.frmTxtMegabyte.value = document.form_speed.frmTxtKilobyte.value / 1024;
            break;
        case "Byte":
            document.form_speed.frmTxtbit.value = document.form_speed.frmTxtbyte.value * 8;
            document.form_speed.frmTxtkilobit.value = document.form_speed.frmTxtbit.value / 1024;
            document.form_speed.frmTxtmegabit.value = document.form_speed.frmTxtbit.value / 1048576;
            document.form_speed.frmTxtKilobyte.value = document.form_speed.frmTxtbyte.value / 1024;
            document.form_speed.frmTxtMegabyte.value = document.form_speed.frmTxtKilobyte.value / 1024;
            break;
        case "KiloByte":
            document.form_speed.frmTxtbyte.value = document.form_speed.frmTxtKilobyte.value * 1024;
            document.form_speed.frmTxtbit.value = document.form_speed.frmTxtbyte.value * 8;
            document.form_speed.frmTxtkilobit.value = document.form_speed.frmTxtbit.value / 1024;
            document.form_speed.frmTxtmegabit.value = document.form_speed.frmTxtbit.value / 1048576;
            document.form_speed.frmTxtMegabyte.value = document.form_speed.frmTxtKilobyte.value / 1024;
            break;
        case "MegaByte":
            document.form_speed.frmTxtbyte.value = document.form_speed.frmTxtMegabyte.value * 1048576;
            document.form_speed.frmTxtbit.value = document.form_speed.frmTxtbyte.value * 8;
            document.form_speed.frmTxtkilobit.value = document.form_speed.frmTxtbit.value / 1024;
            document.form_speed.frmTxtmegabit.value = document.form_speed.frmTxtkilobit.value / 1024;
            document.form_speed.frmTxtKilobyte.value = document.form_speed.frmTxtMegabyte.value * 1024;
            break;
    }
}