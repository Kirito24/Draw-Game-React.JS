

var color='blue';
var times =0;
var mousedown=0;
var arr =[];
var Button = React.createClass({

  clear: function(){

    document.getElementById('container').innerHTML='';
    ReactDOM.render(<div>
          {arr}
    </div>, document.getElementById('container'));


  },



   changeColor: function(){

           switch(color)
           {
             case 'blue':
             color='yellow'
              document.getElementById('showColor').style.background='yellow'
              break;
              case 'yellow':
              color='green'
               document.getElementById('showColor').style.background='green'
               break;
               case 'green':
               color='red'
                document.getElementById('showColor').style.background='red'
                break;
                case 'red':
                color='grey'
                 document.getElementById('showColor').style.background='grey'
                 break;
                 case 'grey':
                 color='magenta'
                  document.getElementById('showColor').style.background='magenta'
                  break;
                  case 'magenta':
                  color='orange'
                   document.getElementById('showColor').style.background='orange'
                   break;
                   case 'orange':
                   color='white'
                    document.getElementById('showColor').style.background='white'
                    break;
                     case 'white':
                     case 'black':
                    color='blue'
                     document.getElementById('showColor').style.background='blue'
                     break;


           }

   },
   clearIt: function(){

     color='black'
     document.getElementById('showColor').style.background='black'


   },
   circle: function(){


     for(var i=0;i<document.querySelectorAll('.block').length;i++)
     {
       document.querySelectorAll('.block')[i].style.borderRadius = '40px'
     }
   },
   square: function(){


     for(var y=0;y<document.querySelectorAll('.block').length;y++)
     {
       document.querySelectorAll('.block')[y].style.borderRadius = '0px'
     }

   },

  render: function(){

      return(
            <div>
             <input type="button" className="btn" value="Clear" onClick={this.clear}></input>
             <br/>
             <input type="button" className="btn" value="BlackX" onClick={this.clearIt}></input>
             <br/>
             <input type="button" className="btn" value="Circle" onClick={this.circle}></input>
             <br/>
             <input type="button" className="btn" value="Square" onClick={this.square}></input>
             <br/>
             <input type="button" className="btn-2" value="Color" onClick={this.changeColor}></input>

            </div>
      )

  }


});



var Block = React.createClass({

      getInitialState: function(){

              return {hover_flag: false, click_flag: false, mouse_flag: false}

        },

        hoverEvent: function(){
          if(mousedown===1)
          {
           if(this.state.hover_flag===false)
          this.setState({hover_flag: !this.state.hover_flag})
           if(this.state.hover_flag)
           this.setState({click_flag: !this.state.click_flag})
         }
        },

       clickEvent: function(){

           this.setState({click_flag: !this.state.click_flag})

        },
        cheakColor: function(){



        },
        down: function(){
          mousedown=1
        },
        up: function(){
          mousedown=0
        },
        render: function(){
               var bStyle={}

               if(this.state.hover_flag)
               {

                      bStyle ={backgroundColor:color}

               }
               if(!this.state.hover_flag)
               {

                 bStyle ={backgroundColor:'black'}
               }
               if(this.state.click_flag)
               {
                 bStyle ={backgroundColor: color}
               }

               return (

                <div className="block" style={bStyle} onMouseDown={this.down} onClick={this.clickEvent} onMouseUp={this.up} onMouseEnter={this.hoverEvent} ></div>


               )







     }


});

ReactDOM.render(<div id="showColor"><Button/></div>,document.getElementById('buttons'));


var xx = window.innerWidth;
var yy = window.innerHeight;
var pole = xx*yy-66000;


for(var i=0;i<pole/2000;i++)
  {
   arr.push(<Block key={i}/>);
 }

 ReactDOM.render(<div>
           {arr}
</div>, document.getElementById('container'));
