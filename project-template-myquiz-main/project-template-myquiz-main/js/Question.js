class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder","Enter your name here...");
   //Create a input box to enter the number
    this.input2=createInput("").attribute("placeholder","Enter the option number");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question=createElement("h3");
    this.option1=createElement("h4");
    this.option2=createElement("h4");
    this.option3=createElement("h4");
    this.option4=createElement("h4");



    this.message = createElement("h2")
  }

  hide(){
    this.input1.hide();
    this.button.hide();
    this.input2.hide();

  }


  setElementsPosition(){

    this.title.position(350, 0);
    this.input1.position(150, 280);
    this.input2.position(340,280);
    this.button.position(320, 320);
    this.question.position(125,75);
    this.option1.position(125,120);
    this.option2.position(125,145);
    this.option3.position(125,170);
    this.option4.position(125,195);
  }

  displayText(){

    this.title.html("MyQuiz Game");

    var questionMessage=`Question:- What is the the symbol for the element, Potassium?`;
    this.question.html(questionMessage);

    var optionMessage1=`1: P`;
    this.option1.html(optionMessage1);

    var optionMessage2=`2: K`;
    this.option2.html(optionMessage2);

    var optionsMessage3=`3: Ph`;
    this.option3.html(optionsMessage3);

    var optionsMessage4=`4: Fe`;
    this.option4.html(optionsMessage4);


  }

  display(){
    

    this.setElementsPosition();
    this.displayText();
    

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{

      var message1=`Thank you ${this.input1.value()}, your response has been recorded`;
      this.message.html(message1);
      this.message.position(50,250);
      this.hide();

    })


  }
}
