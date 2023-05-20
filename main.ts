//% weight=0 color=#9911b1 icon="\uf0ad" block="Microbithlkv20"
     enum mode {
        //% block="喚醒詞"
        wakeup_uni,
        //% block="退下"
        exitUni,
        //% block="打開風扇"
        openElectricfan,
        //% block="關閉風扇"
        closElectricfan,
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
        //% block="打開浴霸"
        dakaiyuba
        //% block="關閉浴霸"
        guanbiyuba
        //% block="打開暖氣"
        kdakainuanqi
        //% block="關閉暖氣"
        kguanbinuanq
        //% block="打開吹風"
        dakaicfeng
        //% block="關閉吹風"
        kguanbicfeng
     }
let check_word = ['wakeup_uni', 'exitUni',"openElectricfan","closElectricfan","openkongtiao","closekongtiao","shenggaowendu","jiandiwendu","turnon","turnoff","openled","closeled","setmaxld","setminld","zeogjialiangdu","jianxiaoliangdu","setcolorred","dakaiyuba","guanbiyuba","kdakainuanqi","kguanbinuanq","dakaicfeng","kguanbicfeng"];
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
        basic.pause(100)
        serial.setTxBufferSize(32)
        serial.setRxBufferSize(32)
    }
    //% group="1.Setup"
    //% blockId=returnserialdata1 block="read"
    //% weight=102
    export function returnserialdata1() {
           let a = serial.readBuffer(1)
           readserialdata = readserialdata + String.fromCharCode(a.getNumber(NumberFormat.UInt8LE, 0));
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
