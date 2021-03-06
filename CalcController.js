class CalcController{

    constructor(){
        this._locale = "pr-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#date");
        this._timeEl = document.querySelector("#time");
        this._currentDate;
        this._operation = ['2'];
        this.initialize();
        this.initButtonsEvents();
       

    }
    
    DisplayDateTime(){ //method to display current date and time on the calculator screen
        this.displayDate = this.currentDate.toLocaleDateString(this._locale)
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)

    }

    initialize(){
        this.DisplayDateTime();
        
        setInterval(()=>{ //set the seconds interval, so that the clock keeps running
            this.DisplayDateTime();
        }, 1000);
    }

    addEventListenerAll(element, events, fn){ //setting a method to add EventListeners to all events
        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn, false); //using split to turn the stringtype events into an array and adding EventListener to each one
        })
    }

    
    initButtonsEvents(){ //adding the events of the keyboard buttons
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        
        buttons.forEach((btn, index)=>{
            this.addEventListenerAll(btn, 'click drag', e=>{ //activating event for clicking or draging
                console.log(btn.className.baseVal.replace("btn-", ""));
            });
            
            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e=>{
                btn.style.cursor = 'pointer';
            });
        })
    }

    getLastOparation(){
        return this._operation[this._operation.length - 1];
    }

    setLastOperation(value){
        this._operation[this._operation.length - 1] = value;

    }

    isOperator(value){
        return (['+', '-', '*', '/', '%'].indexOf(value) > -1);
    }

    addOperation(value){
        if(isNaN(this.getLastOparation())){
            
            if(this.isOperator(value)){
                this.setLastOperation(value);
            } 
            else if(isNaN(value)){
                //something else
                console.log(value);
            } 
            else{
                this._operation.push(value);
            } 
        } 
        else {
            let newValue = this.getLastOparation().toString() + value.toString();
            this.setLastOperation(parseInt(newValue));
        } 
        console.log(this._operation);

    }

    clearEntry(){
        this._operation.pop();
    }

    clearAll(){
        this._operation = [];
    }

    setError(){
        this.displayCalc = 'Error';
    }

    execBtn(value){
        switch (value){
            case 'ac':
                this.clearAll;
                break;

            case 'ce':
                this.clearEntry
                break;

            case 'soma':
                this.addOperation('+');
                break;

            case 'subtracao':

                break;

            case 'multiplicacao':

                break;

            case 'divisao':

                break;

            case 'porcento':

             break;

            case 'igual':

                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(value);
                break;
            
            default:
                this.setError();
                break;
        }
    }

    

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    } 

    set currentDate(value){
        this.dateEl.innerHTML = value;
    }
}