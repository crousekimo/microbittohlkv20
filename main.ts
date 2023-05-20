//% weight=0 color=#9911b1 icon="\uf0ad" block="Microbithlkv20"
     enum mode {
        //% block="喚醒詞"
        wakeup_uni,
        //% block="退下"
        exitUni
     }
namespace microbithlkv20 {
    //% group="1.Setup"  
    //% blockId=setMicrobit block="Initialize Microbit |TX %tx|RX %rx|Baud rate %baudrate "
    //% tx.defl=SerialPin.P0
    //% rx.defl=SerialPin.P1
    //% weight=101
    //% blockExternalInputs = 1
    export function setMicrobit(tx: SerialPin, rx: SerialPin, baudrate: BaudRate) {
        serial.redirect(
            tx,
            rx,
            baudrate
        )
        basic.pause(1000)
    }
    //% group="1.Setup"
    //% blockId=returnresponse block="return %word "
    //% weight=101
    export function returnresponse(word: string):boolean {
        return (serial.readUntil(serial.delimiters(Delimiters.NewLine)).includes("wakeup_uni"));
    }     
    //% group="1.Setup"
    //% blockId=words block="return %word "
    //% weight=101
    export function returnresponse(word: mode):string {
        return word.toString();
    } 
}
