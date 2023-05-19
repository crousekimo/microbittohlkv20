//% weight=0 color=#9911b1 icon="\uf0ad" block="Microbithlkv20"
namespace microbithlkv20 {
      export enum analogpin {
        D32 = 32,
        D33 = 33,
        D34 = 34,
        D35 = 35,
        D36 = 36,
        D39 = 39
     }
      
     
      export enum value555 {
        field1 = 1 ,
        field2 = 2,
        field3 = 3,
        field4 = 4,
        field5 = 5,
        field6 = 6,
        field7 = 7,
        field8 = 8
     }
      
      

      export enum type {
        INPUT = 2,
        OUTPUT = 1
     }
     export enum value {
        HIGH = 1,
        LOW = 0
     }

     export enum mode {
        測試 = 1,
        AP = 0
     }
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
    //% blockId=setWiFi block="Set ESP32 | SSID %SSID| Pass %PASS| Mode %mode1 "
    //% weight=101
    //% blockExternalInputs = 1
    export function setWiFi(SSID: string, PASS: string, mode1: mode) {
        ssid1=SSID
        pass1=PASS
        mode2=mode1
    }      
}
