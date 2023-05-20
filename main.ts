//% weight=0 color=#9911b1 icon="\uf0ad" block="Microbithlkv20"
     enum mode {
        //% block="喚醒詞"
        wakeup_uni,
        //% block="退下"
        exitUni,
        //% block="打開風扇"
        openElectricfan,
        //% block="關閉風扇"
        closeElectricfan,
        //% block="風速調到1檔"
        AdjustGdarmin,
        //% block="風速調到3檔"
        AdjustGdarmax,
        //% block="風速調到最大"
        settiOPonehonor,
        //% block="打開空調"
        openkongtiao,
        //% block="關閉空調"
        closekongtiao,
        //% block="升高溫度"
        shenggaowendu,
        //% block="降低溫度"
        jiandiwendu,
        //% block="打開檯燈"
        turnon,
        //% block="關閉檯燈"
        turnoff,
        //% block="開燈"
        openled,
        //% block="關燈"
        closeled,
        //% block="調到最亮"
        setmaxld,
        //% block="調到最暗"
        setminld,
        //% block="亮一點"
        zeogjialiangdu,
        //% block="調暗一點"
        jianxiaoliangdu,
        //% block="燈紅色"
        setcolorred
     }
let check_word = ['wakeup_uni', 'exitUni',"openElectricfan","closeElectricfan","AdjustGdarmin","AdjustGdarmax","settiOPonehonor","openkongtiao","closekongtiao","shenggaowendu","jiandiwendu","turnon","turnoff","openled","closeled","setminld","turnoff","zeogjialiangdu","jianxiaoliangdu","setcolorred"];
namespace microbithlkv20 {
let readserialdata='';
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
    //% blockId=returnserialdata1 block="read"
    //% weight=102
    export function returnserialdata1() {
           let a = serial.readBuffer(1)
           readserialdata = readserialdata + String.fromCharCode(a.getNumber(NumberFormat.UInt8LE, 0)))
    }
    //% group="1.Setup"
    //% blockId=returnresponse1 block="return key %word "
    //% weight=102
    export function returnresponse1():string {
        let a1=readserialdata;
        readserialdata='';
        return a1;
    }  
    //% group="1.Setup"
    //% blockId=returnresponse block="return %word "
    //% weight=101
    export function returnresponse(word: string):boolean {
        if (readserialdata.includes(word))
        {
          readserialdata='';
          return true
        }else
          return false
    }     
    //% group="1.Setup"
    //% blockId=words block="%word "
    //% weight=101
    export function words(word: mode):string {
        return check_word[word];
    } 
}
